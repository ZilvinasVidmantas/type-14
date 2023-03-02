import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseDataBody, HouseModel } from 'houses/types';
import houseDataValidationSchema from 'houses/validation-schemas/house-data-validation-schema';
import { createId } from 'helpers/create-id';
import { ValidationError } from 'yup';

const createHouse: RequestHandler<
  {},
  HouseModel | ErrorResponse,
  HouseDataBody,
  {}
> = (req, res) => {
  try {
    const houseData = houseDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const createdHouse = {
      id: createId(),
      ...houseData,
    };

    houses.push(createdHouse);

    res.status(201).json(createdHouse);
  } catch (error) {
    const recursiveValidationErrorReducer = (
      prevErrObj: RecursiveStringObj,
      validationError: ValidationError,
      index: number,
      validationErrors: ValidationError[],
    ): RecursiveStringObj => {
      const errorKey: string = validationError.path || String(createId());

      const [mainKey, ...childrenKeys] = errorKey.split('.');

      if (childrenKeys.length === 0) {
        return {
          ...prevErrObj,
          [mainKey]: validationError.message,
        };
      }

      if (!(mainKey in prevErrObj)) {
        const childrenValidationErrors = validationErrors
          .filter((childValidationError) => childValidationError.path?.includes(`${mainKey}.`))
          .map((childValidationError) => {
            const keys = errorKey.split('.');
            // eslint-disable-next-line no-param-reassign
            childValidationError.path = keys.slice(1).join('.');

            return childValidationError;
          });
        console.log(childrenValidationErrors.map((x) => x.path));

        return {
          ...prevErrObj,
          [mainKey]: childrenValidationErrors.reduce(recursiveValidationErrorReducer, {}),
        };
      }

      return prevErrObj;
    };

    const errorResponse: ErrorResponse = {
      error: 'request error',
    };

    if (error instanceof ValidationError && error.errors.length > 0) {
      errorResponse.errors = error.inner.reduce(recursiveValidationErrorReducer, {});
    }
    if (error instanceof Error) {
      errorResponse.error = error.message;
    }

    res.status(400).json(errorResponse);
  }
};

export default createHouse;

import { ValidationError } from 'yup';
import createId from './create-id';

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
      .filter((childValidationError) => childValidationError.path?.startsWith(`${mainKey}.`))
      .map((childError) => {
        const newValidationError = new ValidationError(
          childError.errors.length === 1 ? childError.message : childError.inner,
          childError.value,
          childError.path?.split('.').slice(1).join('.'),
        );

        return newValidationError;
      });

    return {
      ...prevErrObj,
      [mainKey]: childrenValidationErrors.reduce(recursiveValidationErrorReducer, {}),
    };
  }

  return prevErrObj;
};

export default recursiveValidationErrorReducer;

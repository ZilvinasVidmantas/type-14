import * as yup from 'yup';
import { PartialHouseData } from '../types';

const partialHouseDataValidationSchema: yup.ObjectSchema<PartialHouseData> = yup.object({
  address: yup.string()
    .min(2, 'address must have at least 2 letters')
    .max(32, 'address can\'t have more than 32 letters'),

  title: yup.string()
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

  price: yup.number()
    .positive('price must be positive')
    .test(
      'priceFormat',
      'price can\'t have more than 2 decimal points',
      (value) => value === undefined || Number(value.toFixed(2)) === value,
    ),

  images: yup
    .array(yup.string().required()),

  cityId: yup.number(),
}).strict(true);

export default partialHouseDataValidationSchema;

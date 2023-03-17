import * as yup from 'yup';
import { HouseData } from '../types';

const houseDataValidationSchema: yup.ObjectSchema<HouseData> = yup.object({
  address: yup.string()
    .required('address is required')
    .min(2, 'address must have at least 2 letters')
    .max(32, 'address can\'t have more than 32 letters'),

  title: yup.string()
    .required('title is required')
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

  price: yup.number()
    .required('price is required')
    .positive('price must be positive')
    .test(
      'priceFormat',
      'price can\'t have more than 2 decimal points',
      (value) => Number(value.toFixed(2)) === value,
    ),

  images: yup
    .array(yup.string().required().url('image must be accessible'))
    .min(1, 'at least one image required')
    .required('images are required'),

  cityId: yup.number()
    .required('city is required'),
}).strict(true);

export default houseDataValidationSchema;

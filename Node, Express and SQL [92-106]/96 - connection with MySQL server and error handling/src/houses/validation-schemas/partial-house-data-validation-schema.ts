import { PartialHouseData } from 'houses/types';
import * as yup from 'yup';

const partialHouseDataValidationSchema: yup.ObjectSchema<PartialHouseData> = yup.object({
  title: yup.string()
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

  location: yup
    .object({
      country: yup.string()
        .required('location.country is required')
        .min(2, 'location.country must have at least 2 letters')
        .max(32, 'location.country can\'t have more than 32 letters'),

      city: yup.string()
        .required('location.city is required')
        .min(2, 'location.city must have at least 2 letters')
        .max(32, 'location.city can\'t have more than 32 letters'),
    }),

  images: yup
    .array(yup.string().required()),

  price: yup.number()
    .positive('price must be positive')
    .test(
      'priceFormat',
      'price can\'t have more than 2 decimal points',
      (value) => value === undefined || Number(value.toFixed(2)) === value,
    ),

  rating: yup.number()
    .positive('rating must be positive')
    .min(1, 'rating must be at least 1')
    .max(5, 'rating can\'t be more than 5'),
}).strict(true);

export default partialHouseDataValidationSchema;

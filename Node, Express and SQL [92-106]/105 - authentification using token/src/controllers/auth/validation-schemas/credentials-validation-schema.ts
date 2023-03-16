import * as yup from 'yup';
import { Credentials } from '../types';

const credentialsValidationSchema: yup.ObjectSchema<Credentials> = yup.object({
  email: yup.string().required('email is required'),
  password: yup.string().required('password is required'),
}).strict(true);

export default credentialsValidationSchema;

export type RegistrationBody = {
  email: string,
  password: string,
  passwordConfirmation: string,
  name: string,
  surname: string,
  mobile: string,
  image: string,
};

export type UserData = Omit<RegistrationBody, 'passwordConfirmation'>;

export type UserViewModel = Omit<RegistrationBody, 'password' | 'passwordConfirmation'> & {
  id: number,
};

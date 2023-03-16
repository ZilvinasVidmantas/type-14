export type UserEntity = {
  id: number,
  email: string,
  password: string,
  name: string,
  surname: string,
  mobile: string,
  image: string,
};

export type RegistrationBody = Omit<UserEntity, 'id'> & {
  passwordConfirmation: string,
};

export type Credentials = {
  email: string,
  password: string,
};

export type UserData = Omit<RegistrationBody, 'passwordConfirmation'>;

export type UserViewModel = Omit<UserEntity, 'password'>;

export type AuthResponse = {
  user: UserViewModel,
  token: string
};

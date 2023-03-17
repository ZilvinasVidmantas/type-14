export type RegistrationBody = Omit<UserEntity, 'id' | 'role'> & {
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

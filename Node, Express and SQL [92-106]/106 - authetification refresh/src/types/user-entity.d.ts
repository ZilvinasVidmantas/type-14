type UserEntity = {
  id: number,
  email: string,
  password: string,
  name: string,
  surname: string,
  role: 'ADMIN' | 'USER',
  mobile: string,
  image: string,
};

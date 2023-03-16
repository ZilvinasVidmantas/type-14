import mysql from 'mysql2/promise';
import config from 'config';
import NotFoundError from 'errors/not-found-error';
import { UserData, UserEntity } from '../types';
import SQL from './sql';

const checkEmail = async (email: string): Promise<true> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
select 1
from user
where email = ?
`;

  const bindings = [email];
  const [rows] = await connection.query<mysql.RowDataPacket[]>(preparedSql, bindings);

  connection.end();

  if (rows.length > 0) throw new Error(`Email '${email}' is taken`);

  return true;
};

const createUser = async (userData: UserData): Promise<UserEntity> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
insert into image (src) VALUE (?);

insert into user (email, password, name, surname, mobile, imageId) VALUE 
(?, ?, ?, ?, ?, last_insert_id());

${SQL.SELECT}
where u.userId = last_insert_id();
`;

  const bindings = [
    userData.image,
    userData.email,
    userData.password,
    userData.name,
    userData.surname,
    userData.mobile,
  ];

  const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
  const [user] = queryResult[queryResult.length - 1] as UserEntity[];

  connection.end();

  return user;
};

const getUserByEmail = async (email: string): Promise<UserEntity> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
${SQL.SELECT}
where u.email = ?;
`;

  const bindings = [email];
  const [users] = await connection.query<mysql.RowDataPacket[]>(preparedSql, bindings);

  connection.end();

  if (users.length === 0) throw new NotFoundError(`User with email '${email} was not found'`);

  return users[0] as UserEntity;
};

const UserModel = {
  createUser,
  checkEmail,
  getUserByEmail,
};

export default UserModel;

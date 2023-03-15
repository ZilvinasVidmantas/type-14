import mysql from 'mysql2/promise';
import config from 'config';
import { UserData, UserViewModel } from '../types';

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

const createUser = async (userData: UserData): Promise<UserViewModel> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
insert into image (src) VALUE (?);

insert into user (email, password, name, surname, mobile, imageId) VALUE 
(?, ?, ?, ?, ?, last_insert_id());

select 
  u.userId as id,
  u.email,
  u.name,
  u.surname,
  u.mobile,
  i.src as image
from user as u
left join image as i
on i.imageId = u.imageId
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
  const [user] = queryResult[queryResult.length - 1] as UserViewModel[];

  connection.end();

  return user;
};

const UserModel = {
  createUser,
  checkEmail,
};

export default UserModel;

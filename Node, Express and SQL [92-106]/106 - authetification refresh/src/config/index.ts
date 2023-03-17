import dotenv from 'dotenv';

dotenv.config();

const {
  SERVER_PROTOCOL,
  SERVER_DOMAIN,
  SERVER_PORT,

  DB_USER,
  DB_PASS,
  DB_SCHEMA,
  DB_HOST,
  DB_PORT,

  B_CRYPT_ROUNDS,
  TOKEN_SECRET,
  TOKEN_EXP,
} = process.env;

if (!SERVER_PROTOCOL
  || !SERVER_DOMAIN
  || !SERVER_PORT
  || !DB_USER
  || !DB_PASS
  || !DB_SCHEMA
  || !DB_HOST
  || !DB_PORT
  || !B_CRYPT_ROUNDS
  || !TOKEN_SECRET
  || !TOKEN_EXP
) {
  throw new Error("You must configure constants in '.env' file.");
}

const config = {
  server: {
    protocol: SERVER_PROTOCOL,
    domain: SERVER_DOMAIN,
    port: SERVER_PORT,
    address: `${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}`,
  },
  database: {
    user: DB_USER,
    password: DB_PASS,
    database: DB_SCHEMA,
    host: DB_HOST,
    port: Number(DB_PORT),
    multipleStatements: true,
  },
  token: {
    secret: TOKEN_SECRET,
    expiration: TOKEN_EXP,
  },
  bcryptRounds: Number(B_CRYPT_ROUNDS),
};

export default config;

import dotenv from 'dotenv';

dotenv.config();
const {
  SERVER_PROTOCOL,
  SERVER_DOMAIN,
  SERVER_PORT,
} = process.env;

if (SERVER_PROTOCOL === undefined
  || SERVER_DOMAIN === undefined
  || SERVER_PORT === undefined) {
  throw new Error("You must configure constants in '.env' file.");
}

const config = {
  server: {
    protocol: SERVER_PROTOCOL,
    domain: SERVER_DOMAIN,
    port: SERVER_PORT,
    address: `${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}`,
  },
  database: {},
};

export default config;

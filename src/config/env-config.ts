import * as dotenv from 'dotenv';
dotenv.config();

export default {
  API_PORT: process.env.API_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CLUSTER: process.env.DB_CLUSTER,
  DB_NAME: process.env.DB_NAME,
};

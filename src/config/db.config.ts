import mongoose from 'mongoose';
import envConfig from './env.config';
export default () => {
  mongoose.set('strictQuery', false);
  const DB_NAME =
    process.env.NODE_ENV === 'production'
      ? envConfig.DB_PROD_NAME
      : envConfig.DB_BETA_NAME;
  mongoose
    .connect(
      `mongodb+srv://${envConfig.DB_USERNAME}:${envConfig.DB_PASSWORD}@${envConfig.DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )
    .catch((err: Error) => {
      throw new Error(err?.message);
    });
};

import express, { Application } from 'express';
import envConfig from './config/env-config';
class Server {
  app: Application = express();
  listen() {
    this.app.listen(envConfig.API_PORT, () => {
      console.log(` Server is running on port ${envConfig.API_PORT}`);
    });
  }
  init() {
    this.listen();
  }
}

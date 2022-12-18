import express, { Application } from 'express';
import cors from 'cors';
import envConfig from './config/env-config';
import corsConfig from './config/cors-config';
import Routes from './routes';
class Server {
  app: Application = express();
  constructor() {
    this.init();
  }
  listen() {
    this.app.listen(envConfig.API_PORT, () => {
      console.log(`Server is running on port ${envConfig.API_PORT}`);
    });
  }
  initConfig() {
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ limit: '10mb', extended: true }));
    this.app.use(cors(corsConfig));
  }
  initRoutes() {
    new Routes(this.app);
  }
  init() {
    this.initConfig();
    this.initRoutes();
    this.listen();
  }
}

new Server();

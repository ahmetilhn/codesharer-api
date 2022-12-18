import { Application } from 'express';
import { apiRoutes } from '../constants/routes';
import WorkspaceRoutes from './workspace.routes';
class Routes {
  constructor(public app: Application) {
    this.init();
  }
  init() {
    this.app.use(apiRoutes.WORKSPACES, WorkspaceRoutes);
  }
}

export default Routes;

import { Router } from 'express';
import WorkspaceController from '../controllers/workspace.controller';
class WorkspaceRoutes {
  router: Router = Router();
  constructor() {
    this.init();
  }
  init() {
    const controller = new WorkspaceController();
    console.log('controller', controller);
    this.router.route('/').post(controller.post);
  }
}
export default new WorkspaceRoutes().router;

import { Router } from 'express';
import WorkspaceController from '../controllers/workspace.controller';
class WorkspaceRoutes {
  router: Router = Router();
  constructor() {
    this.init();
  }
  init() {
    const controller = new WorkspaceController();
    this.router.route('/').post(controller.post);
    this.router.route('/:id').get(controller.get);
    this.router.route('/:id').put(controller.put);
  }
}
export default new WorkspaceRoutes().router;

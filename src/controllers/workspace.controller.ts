import { Request, Response, NextFunction } from 'express';
import WorkspaceService from '../services/workspace.service';
import IBaseController from '../types/base-controller.interface';

class WorkspaceController implements IBaseController {
  public Service = new WorkspaceService();
  constructor() {
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
  }
  public async post(req: Request, res: Response): Promise<void> {
    try {
      const workspace = await this.Service.create(req);
      res.status(201).json(workspace);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    try {
      const workspace = await this.Service.read(req, res);
      res.status(200).json(workspace);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default WorkspaceController;

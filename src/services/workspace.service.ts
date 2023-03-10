import { Request, Response } from 'express';
import WorkspaceModel from '../models/workspace.model';
import IBaseService from '../types/base-service.interface';
class WorkspaceService implements IBaseService {
  public Model = new WorkspaceModel();
  public async create(req: Request): Promise<unknown> {
    try {
      const workspace = await this.Model.create(req);
      return workspace;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async read(req: Request, res: Response): Promise<unknown> {
    try {
      const workspace = await this.Model.read(req, res);
      return workspace;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async update(req: Request, res: Response): Promise<unknown> {
    try {
      const workspace = await this.Model.update(req, res);
      return workspace;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default WorkspaceService;

import { Schema, model } from 'mongoose';
import IWorkspace from '../types/workspace.interface';
import { Request, Response } from 'express';
import IBaseModel from '../types/base-model.interface';

class WorkspaceModel implements IBaseModel {
  public WorkspaceSchema = new Schema<IWorkspace>(
    {
      code: {
        type: String,
        required: true,
      },
      file_name: {
        type: String,
        required: true,
      },
      language: {
        type: Object,
        required: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  public Model = model<IWorkspace>('Workspace', this.WorkspaceSchema);

  public async create(req: Request): Promise<IWorkspace> {
    const payload: IWorkspace = req.body;
    const workspace = await this.Model.create(payload);
    return workspace;
  }

  public async read(
    req: Request,
    res: Response
  ): Promise<IWorkspace | Array<IWorkspace>> {
    const { id } = req.params;
    console.log(id);
    if (id) {
      const workspace = await this.Model.findById(id);
      if (!workspace) {
        res.status(404).json({ message: 'Workspace not found' });
      }
      return workspace;
    }
    return this.Model.find();
  }
}

export default WorkspaceModel;

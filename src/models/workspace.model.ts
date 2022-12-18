import { Schema, model } from 'mongoose';
import IWorkspace from '../types/workspace.interface';
import { Request } from 'express';
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
    try {
      const payload: IWorkspace = req.body;
      const workspace = await this.Model.create(payload);
      return workspace;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default WorkspaceModel;

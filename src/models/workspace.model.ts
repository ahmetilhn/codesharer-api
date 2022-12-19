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
        name: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
        extension: {
          type: String,
          required: true,
        },
      },
      view_count: {
        type: Number,
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
    if (id) {
      const workspace = await this.Model.findById(id);
      if (!workspace) {
        res.status(404).json({ message: 'Workspace not found' });
      }
      return workspace;
    }
    return this.Model.find();
  }
  public async update(req: Request, res: Response): Promise<IWorkspace> {
    const { id } = req.params;
    if (id) {
      const payload: IWorkspace = req.body;
      const workspace = await this.Model.findByIdAndUpdate(id, payload, {
        new: true,
      });
      if (!workspace) {
        res.status(404).json({ message: 'Workspace not found' });
      }
      return workspace;
    }
  }
}

export default WorkspaceModel;

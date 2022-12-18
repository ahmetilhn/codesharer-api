import { Request, Response } from 'express';

type IBaseModel = {
  read?: (req: Request, res: Response) => Promise<unknown>;
  create?: (req: Request, res: Response) => Promise<unknown>;
  update?: (req: Request, res: Response) => Promise<unknown>;
  delete?: (req: Request, res: Response) => Promise<unknown>;
};

export default IBaseModel;

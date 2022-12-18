import { Request, NextFunction, Response } from 'express';

type IBaseController = {
  get?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  post?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  put?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  delete?: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<unknown>;
};

export default IBaseController;

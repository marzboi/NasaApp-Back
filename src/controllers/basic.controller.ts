import { NextFunction, Request, Response } from 'express';
import { Repo } from '../repository/repo.js';
import { ApiResponse } from '../types/response.api.js';

export abstract class Controller<T extends { id: string | number }> {
  public repo!: Repo<T>;

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await this.repo.query();

      const response: Partial<ApiResponse> = {
        items,
      };
      res.send(response);
    } catch (error) {
      next(error);
    }
  }
}

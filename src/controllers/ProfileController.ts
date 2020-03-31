import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import Ong from '../database/entities/Ong';

export default {
  async index(req: Request, res: Response) {
    const entityManager = getManager();

    const ong = await entityManager.findOne(Ong, {
      relations: ['incidents'],
      where: {
        id: req.headers.authorization
      }
    });

    return res.json(ong);
  }
};

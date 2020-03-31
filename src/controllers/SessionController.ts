import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import Ong from '../database/entities/Ong';

export default {
  async store(req: Request, res: Response) {
    const { id }: { id: string } = req.body;

    const entityManager = getManager();

    const ong = await entityManager.findOne(Ong, {
      where: {
        id
      },
      select: ['name']
    });

    if (!ong) {
      return res.status(400).json({ error: 'No ong found with this id' });
    }

    return res.json(ong);
  }
};

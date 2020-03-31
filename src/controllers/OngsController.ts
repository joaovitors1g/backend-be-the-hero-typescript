import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import generateRandomId from '../utils/generateRandomId';

import Ong from '../database/entities/Ong';

interface IOngData {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export default {
  async index(req: Request, res: Response) {
    const entityManager = getManager();

    const ongs = await entityManager.find(Ong, {
      relations: ['incidents']
    });

    return res.json(ongs);
  },

  async store(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf }: IOngData = req.body;

    const entityManager = getManager();

    const ongData = {
      id: generateRandomId(),
      name,
      email,
      whatsapp,
      city,
      uf
    };

    const ong = await entityManager.create(Ong, ongData);

    await entityManager.save(ong);

    return res.json(ong);
  }
};

import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import Incident from '../database/entities/Incident';

interface IIncidentData {
  title: string;
  description: string;
  value: number;
  ong_id: string;
}

export default {
  async index(req: Request, res: Response) {
    const entityManager = getManager();

    const incidents = await entityManager.find(Incident, {
      relations: ['ong'],
      select: ['title', 'description', 'value']
    });

    return res.json(incidents);
  },

  async store(req: Request, res: Response) {
    const { title, description, value, ong_id }: IIncidentData = req.body;

    const entityManager = getManager();

    const incidentData = {
      title,
      description,
      value,
      ong_id
    };

    const incident = await entityManager.create(Incident, incidentData);

    await entityManager.save(incident);

    return res.json(incident);
  },

  async delete(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    const ong_id = req.headers.authorization;

    const entityManager = getManager();

    const incident = await entityManager.findOne(Incident, {
      where: {
        id
      },
      relations: ['ong']
    });

    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    if (incident.ong.id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    const data = await entityManager.delete(Incident, id);

    return res.json(data);
  }
};

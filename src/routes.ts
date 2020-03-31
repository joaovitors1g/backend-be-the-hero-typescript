import { Router } from 'express';

import OngsController from './controllers/OngsController';
import IncidentsController from './controllers/IncidentsController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.store);
export default routes;

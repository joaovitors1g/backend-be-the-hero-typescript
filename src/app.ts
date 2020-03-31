import express from 'express';
import cors from 'cors';
import database from './database';
import routes from './routes';

const app = express();

database.init();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3333);

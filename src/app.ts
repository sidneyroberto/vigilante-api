import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import rotasEspecie from './routes/especie';
import rotasAtropelamento from './routes/atropelamento';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/especie', rotasEspecie);
app.use('/atropelamento', rotasAtropelamento);
app.use('/', (req, res) => res.send('API Vigilante'));

conectarServidorNoBD();

export default app;


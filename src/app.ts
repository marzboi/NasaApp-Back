import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { errorHandler } from './middleware/error.js';
import { postRouter as projectRouter } from './routers/project.router.js';
const debug = createDebug('Marketplace:App');

export const app = express();

debug('Loaded Express App');

const corsOptions = {
  origin: '*',
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.set('trust proxy', true);

app.use((req, res, next) => {
  res.header('Content-Security-Policy', 'upgrade-insecure-requests;');
  next();
});

app.use(express.static('public'));

app.use('/projects', projectRouter);
app.use(errorHandler);

import express from 'express';
import morgan from 'morgan';
import config from 'config';
import cors from 'cors';
import housesRouter from 'houses';

const server = express();
server.use(cors());
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use('/api/houses', housesRouter);

server.listen(config.server.port, () => {
  console.log(`Server is running on ${config.server.address}`);
});

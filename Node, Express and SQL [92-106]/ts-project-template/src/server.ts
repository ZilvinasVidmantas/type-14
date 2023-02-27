import express from 'express';
import morgan from 'morgan';
import config from 'config';

const server = express();
server.use(morgan('tiny'));
server.use(express.static('public'));

server.listen(config.server.port, () => {
  console.log(`Server is running on ${config.server.address}`);
});

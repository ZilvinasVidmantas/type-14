import express from 'express';

const server = express();
server.use(express.static('public'));

server.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});

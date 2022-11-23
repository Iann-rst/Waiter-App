import path from 'node:path';
import http from 'node:http';
import express, { json } from 'express';
import mongoose from 'mongoose';
import { router } from './router';

import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017').then(() => {
  console.log('Connected to MongoDB');

  const port = 3002;



  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
  //Ao acessar o a pastas uploads no front-end, o back-end irá apenas prover os dados que estão lá
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

  app.use(json());
  app.use(router);


  server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
  });

}).catch(() => {
  console.log('Error ao conectar com o MongoDB');
});


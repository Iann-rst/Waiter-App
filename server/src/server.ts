import express from 'express';
import mongoose from 'mongoose';


const app = express();

mongoose.connect('mongodb://localhost:27017').then(() => {
  console.log('Connected to MongoDB');

  const port = 3002;
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
  });

}).catch(() => {
  console.log('Error ao conectar com o MongoDB');
});


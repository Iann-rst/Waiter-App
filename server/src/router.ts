import { Router } from 'express';

export const router = Router();

//List categories
router.get('/categories', (req, res) => {
  res.send('Listar Categorias');
});

//Create Category
router.post('/categories', (req, res) => {
  res.send('Categoria criada!').status(201);
});

//List Product
router.get('/products', (req, res) => {
  res.send('Listar Produtos');
});

//Create Product
router.post('/products', (req, res) => {
  res.send('Produto criado!').status(201);
});

//Get Products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Produtos por categoria');
});

//List orders
router.get('/orders', (req, res) => {
  res.send('Listar pedidos');
});

//Create orders
router.post('orders', (req, res) => {
  res.send('Criar pedidos').status(201);
});

//Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Trocar status do pedido');
});

//Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Deletar pedido');
});

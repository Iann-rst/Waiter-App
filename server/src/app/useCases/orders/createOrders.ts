import { Order } from './../../models/Order';
import { Request, Response } from 'express';
import { io } from '../../../server';

export async function createOrders(req: Request, res: Response) {

  try {
    const { table, products } = req.body;

    const order = await Order.create({
      table,
      products,
    });

    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);

    res.status(201).send(order);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

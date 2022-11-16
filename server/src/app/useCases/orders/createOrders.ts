import { Order } from './../../models/Order';
import { Request, Response } from 'express';

export async function createOrders(req: Request, res: Response) {

  try {
    const { table, products } = req.body;

    const order = await Order.create({
      table,
      products,
    });

    res.status(201).send(order);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

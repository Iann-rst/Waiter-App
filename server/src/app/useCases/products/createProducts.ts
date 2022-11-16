import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {

  try {
    const imagePath = req.file?.filename;
    const { name, description, price, ingredients, category } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      imagePath,
      ingredients: JSON.parse(ingredients)
    });

    res.status(201).json(product);

  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

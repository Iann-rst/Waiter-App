import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategories(req: Request, res: Response) {

  try {
    const { icon, name } = req.body;
    const category = await Category.create({
      name,
      icon
    });

    res.status(201).send(category);

  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

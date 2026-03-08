import { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../config/supabase.js';
import { IProduct } from '@ecommerce/shared';

export const getProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { data: products, error } = await supabaseAdmin.from('products').select('*');

    if (error) throw new Error(error.message);

    res
      .status(200)
      .json({ success: true, count: products?.length || 0, data: products as IProduct[] });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const newProduct: Partial<IProduct> = req.body;

    if (!newProduct.name || newProduct.price === undefined) {
      res.status(400).json({ success: false, error: 'Name and Price are strictly required.' });
      return;
    }

    const { data, error } = await supabaseAdmin
      .from('products')
      .insert([newProduct])
      .select()
      .single();

    if (error) throw new Error(error.message);

    res.status(201).json({ success: true, data: data as IProduct });
  } catch (error) {
    next(error);
  }
};

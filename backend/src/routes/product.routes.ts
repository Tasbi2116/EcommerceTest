import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/product.controller.js';

const router: Router = Router();

router.route('/').get(getProducts).post(createProduct);

export default router;

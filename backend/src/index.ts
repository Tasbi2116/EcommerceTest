import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Top level middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Main Routes
app.use('/api/products', productRoutes);

// General simple check route
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'API is running optimally' });
});

// Centralized DRY error handling middleware applied to all routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 [Backend] Server strictly running on environment port ${PORT}`);
});

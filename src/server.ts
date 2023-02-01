import express from 'express';
import cors from 'cors';

import { router as productsRouter } from './routes/products';

const router = express.Router();

const app = express();
const PORT = 5000

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    'setup by': 'DevStars',
  });
});

app.use(express.static('public'));

app.use('/products', productsRouter);

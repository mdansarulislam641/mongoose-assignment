import express from 'express';
import cors from 'cors';
import bookRoutes from './app/modules/books/book.route';
import { Application } from 'express';

const app : Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/book/', bookRoutes);

export default app ;
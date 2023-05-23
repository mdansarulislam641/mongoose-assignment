import express from 'express';
import { getAllBooks, getPublisherAndGenreBooks } from './book.controller';
const router = express.Router();

router.get('/genre-publisher', getPublisherAndGenreBooks);
router.get('/:genre', getAllBooks)
// router.post('/create-book', getAllBooks);

export default router ;
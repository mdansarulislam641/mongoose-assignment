import express from 'express';
import { changePriceStringToInteger, getAllBooks, getGenreBooks, getPublisherAndGenreBooks } from './book.controller';
const router = express.Router();
router.get('/', getAllBooks)
router.get('/genre-publisher', getPublisherAndGenreBooks);
router.put('/update-price', changePriceStringToInteger);
router.get('/:genre', getGenreBooks)


export default router ;
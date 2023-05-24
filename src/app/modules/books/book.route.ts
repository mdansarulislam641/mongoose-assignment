import express from 'express';
import { changePriceStringToInteger, getAllBooks, getGenreBooks, getPublisherAndGenreBooks } from './book.controller';
const router = express.Router();

// default endpoint for get all data 
router.get('/', getAllBooks);

// task---> 3 :  end point
router.get('/genre-publisher', getPublisherAndGenreBooks);

// task ---> 5 : end point 
router.put('/update-price', changePriceStringToInteger);

// task ---> 2 end point 
router.get('/:genre', getGenreBooks)


export default router ;
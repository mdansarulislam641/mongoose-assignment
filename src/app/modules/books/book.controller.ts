import { Request, Response } from 'express';
import {  changePriceStringToIntegerToDB, getAllBooksFromDb, getBooksFromDb, getGenrePublisherBooksFromDb } from "./book.service";

//get all Book from DB
export const getAllBooks = async(req : Request , res : Response) =>{
    const books = await getAllBooksFromDb();
    res.status(200).json({
        status : "success",
        data : books 
    })
}

// get all  genre books from db 
export const getGenreBooks = async (req: Request, res: Response) => {
    const {genre} = req.params ;
    const books = await getBooksFromDb(genre);
    res.status(200).json({
        status: "success",
        data: books
    })
};


//get specific specific genre “Sci-Fi” and published by “Roli Books”.
export const getPublisherAndGenreBooks = async (req: Request, res: Response) => {
    const books = await getGenrePublisherBooksFromDb();
    res.status(200).json({
        status: "success",
        data : books 
    })
};

// task  ---> 5  controller
export const changePriceStringToInteger = async(req : Request , res : Response) =>{
    const books = await changePriceStringToIntegerToDB();
    res.status(200).json({
        status : "success",
        data : books
    });
}

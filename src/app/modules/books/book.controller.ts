import express, { Request, Response } from 'express';
import { createBookToDB, getBooksFromDb, getGenrePublisherBooksFromDb } from "./book.service";

// get all books from db 
export const getAllBooks = async (req: Request, res: Response) => {
    const { genre } = req.params;
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
}
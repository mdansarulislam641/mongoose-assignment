import { IBook } from "./book.interface";
import Book from "./book.model";

//create a new book 
export const createBookToDB = async (payload: IBook): Promise<IBook> => {
    const book = new Book(payload);
    await book.save();
    return book;
}

// get genre books Books from Db 
export const getBooksFromDb = async (payload: string): Promise<IBook[] | []> => {
    const regex = new RegExp(payload, 'i');
    const books = await Book.find({ genre: { $regex: regex } });
    return books;
};


// get specific specific genre “Sci-Fi” and published by “Roli Books”.
export const getGenrePublisherBooksFromDb = async (): Promise<IBook[] | []> => {
    const books = await Book.find({genre : "Sci-Fi",  "publisher.name" : "Roli Books"});
    return books ;
}

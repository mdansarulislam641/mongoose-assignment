import { IBook } from "./book.interface";
import Book from "./book.model";


//get all books from Db
export const getAllBooksFromDb = async () :Promise<IBook[] | []>=>{
    const books = await Book.find();
    return books ;
}

// Task--> 2 : get genre books Books from Db 
export const getBooksFromDb = async (payload : string): Promise<IBook[] | []> => {
    const genre = new RegExp(payload , 'i');
    const books = await Book.find({ genre});
    return books;
};


// Task---> 3 :  get specific  genre “Sci-Fi” and published by “Roli Books”.
export const getGenrePublisherBooksFromDb = async (): Promise<IBook[] | []> => {
    const books = await Book.find({genre : "Sci-Fi",  "publisher.name" : "Roli Books"});
    return books ;
};


//task --> 5 change price string to integer grater then 2020 published
export const changePriceStringToIntegerToDB = async () =>{
    const updatedBooks = await Book.updateMany(
        {publicationYear : {$gt : 2020}, price : {$type : 'string'}},
        [
            {
                $set : {
                    price : {
                        $toInt : "$price"
                    }
                }
            }
        ]
        );
        return updatedBooks ;
} 

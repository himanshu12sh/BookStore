import Book from "../database/model/book.js";

export const getBook=async(req,res)=>{
    try{
        const book=await Book.find()
        res.status(200).json(book)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
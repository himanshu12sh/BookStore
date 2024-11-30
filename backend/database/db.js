import mongoose from "mongoose";

export const connectDB= async (DATABSE_URL)=>{
  try{
   const DB_Options={
    
    dbname:"bookStore"
   }
   await mongoose.connect(DATABSE_URL,DB_Options);
   console.log("DB connected");
  }catch(err){
    console.log(err)
  }
}
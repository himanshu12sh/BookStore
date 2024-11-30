import React from "react";
import Card from "./Card";
import { useState,useEffect } from "react";
import axios from "axios";

const FreeBook = () => {
  const [book,setBook]=useState([])
  const fetchBook=async ()=>{
   try{
     const res= await axios.get("http://localhost:4000/api/book")
     const free = res.data.filter((data) => data.category === "Free")
     setBook(free)
     console.log(free)
   }catch(err){
     console.log(err)
   }
  }

  useEffect(()=>{
   fetchBook()
  },[])

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Free Books Available</h2>
      <p className="text-muted text-center mb-5">
        Discover our collection of free books. Enhance your knowledge and dive
        into a world of stories without spending a penny!
      </p>
      <div className="row g-4">
        {book.map((item) => (
          <div className="col-lg-4 col-md-6" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeBook;

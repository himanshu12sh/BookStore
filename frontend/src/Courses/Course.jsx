import { useEffect, useState } from "react";
import axios from 'axios'
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Course = () => {
  const [book,setBook]=useState([])
   const fetchBook=async ()=>{
    try{
      const res= await axios.get("http://localhost:4000/api/book")
      setBook(res.data)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
   }

   useEffect(()=>{
    fetchBook()
   },[])
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          We are delighted you are <span className="text-primary">Here!</span>
        </h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Discover a wide variety of courses to enhance your skills and knowledge. Start your journey with us today! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur atque temporibus placeat. Cum sed nihil laborum itaque fuga ipsa aspernatur rem perspiciatis provident ullam, eaque tenetur! Voluptatibus, inventore non.
        </p>
      </div>

      <div className="text-center mb-4">
       <Link to="/">
       <button className="btn btn-outline-primary px-4 py-2 fw-bold">
          Back
        </button>
        </Link>
      </div>

      <div className="row g-4">
        {book.map((item) => (
          <div className="col-lg-3 col-md-6" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

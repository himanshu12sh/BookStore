import React from 'react';

const Card = ({ item }) => {
  console.log(item.category);

  return (
    <div className="card custom-card shadow-sm border-0 h-100">
      <figure className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="card-img-top custom-card-img"
        />
      </figure>

      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-primary fw-bold">
          {item.name}
          <span className="badge bg-secondary ms-2">{item.category}</span>
        </h5>
        <p className="card-text text-muted">{item.title}</p>
        <div className="d-flex justify-content-between mt-3">
          <span className="badge bg-success">{item.price}</span>
          <button className="btn btn-outline-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

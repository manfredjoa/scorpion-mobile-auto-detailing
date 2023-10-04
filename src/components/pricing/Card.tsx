import React, { FC } from "react";

type CardProps = {
  type: string;
  description: string;
};

const Card: FC<CardProps> = ({ type, description }) => {
  return (
    <div className="card w-[33vw] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{type}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

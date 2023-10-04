import React from "react";
import Card from "./Card";

const cardData = [
  {
    type: "Striped Tail Scorpion Package",
    description: "description 1",
  },
  {
    type: "Emperor Scorpion Package",
    description: "description 2",
  },
];

const CardGroup = () => {
  return (
    <section className="flex justify-evenly">
      {cardData.map((data, index) => (
        <Card key={index} type={data.type} description={data.description} />
      ))}
    </section>
  );
};

export default CardGroup;

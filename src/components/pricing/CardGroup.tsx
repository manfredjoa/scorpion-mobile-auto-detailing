import React from "react";
import Card from "./Card";

const addOnData = {
  services: [
    "Tire Shine",
    "Pet Hair Removal",
    "Bug & Tar Removal",
    "Fabric Seat Shampoo",
    "Leather Seat Conditioner",
  ],
};

const cardData = [
  {
    type: "Striped Tail Scorpion Package",
    price: "$160 Sedan | $210 SUV",
    services: [
      "Interior Carpet & Upholstery Vacuum",
      "Exterior Hand Wash",
      "Rim and Tire Wash",
      "Microfiber Towel Dry",
    ],
    addOns: addOnData.services,
  },
  {
    type: "Emperor Scorpion Package",
    price: "$190 Sedan | $240 SUV",
    services: [
      "Interior Carpet & Upholstery Vacuum",
      "Exterior Hand Wash",
      "Rim and Tire Wash",
      "Spray Ceramic Wax",
      "Handheld Blow Dry",
    ],
    addOns: addOnData.services,
  },
];

const CardGroup = () => {
  return (
    <section className="flex justify-evenly">
      {cardData.map((data, index) => (
        <Card
          key={index}
          type={data.type}
          price={data.price}
          services={data.services}
          addOns={data.addOns}
        />
      ))}
    </section>
  );
};

export default CardGroup;

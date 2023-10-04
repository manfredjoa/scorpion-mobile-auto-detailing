import React, { FC } from "react";

type CardProps = {
  type: string;
  price: string;
  services: string[];
  addOns: string[];
};

const Card: FC<CardProps> = ({ type, price, services, addOns }) => {
  return (
    <article className="card w-[25vw] h-[30vw] border border-custom-red bg-black text-custom-gray">
      <header className="card-title flex justify-center items-center h-1/5 rounded-t-xl bg-custom-red text-black text-2xl">
        {type}
      </header>

      <main className="p-4">
        <h1>{price}</h1>

        <>
          <h2>Services</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </>

        <>
          <h2>Add Ons</h2>
          <ul>
            {addOns.map((addOn, index) => (
              <li key={index}>{addOn}</li>
            ))}
          </ul>
        </>
      </main>
    </article>
  );
};

export default Card;

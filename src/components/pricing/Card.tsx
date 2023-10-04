import React, { FC } from "react";

type CardProps = {
  type: string;
  price: string;
  services: string[];
  addOns: string[];
};

const Card: FC<CardProps> = ({ type, price, services, addOns }) => {
  return (
    <article className="card flex flex-col w-[25vw] h-[30vw] border border-custom-red bg-black text-custom-gray">
      <header className="card-title flex justify-center items-center h-1/6 rounded-t-xl bg-custom-red text-black text-2xl">
        {type}
      </header>

      <main className="grow p-4">
        <ul className="text-sm">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <br></br>

        <>
          <h2 className="text-md">Add Ons:</h2>
          <ul className="text-sm">
            {addOns.map((addOn, index) => (
              <li key={index}>{addOn}</li>
            ))}
          </ul>
        </>
      </main>

      <footer className="justify-end h-[12.5%] rounded-b-xl bg-custom-gray border border-custom-red text-black text-lg">
        <h2 className="flex items-center justify-center h-full">{price}</h2>
      </footer>
    </article>
  );
};

export default Card;

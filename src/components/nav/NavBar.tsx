import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav
      className="flex flex-col bg-black text-custom-gray text-stroke-3-black text-shadow-custom-red"
      style={{ fontFamily: "'Germania One', cursive" }}
    >
      <header className="flex">
        <img
          src="https://res.cloudinary.com/doqgufzuq/image/upload/v1696197217/Scorpion%20Mobile%20Auto%20Detailers/Scorpion.png"
          alt="Scorpion Mobile Auto Detailers Logo"
          className="absolute cursor-pointer h-20vh p-5 object-contain"
        ></img>

        <h1 className="w-screen h-20vh flex justify-center items-center text-6xl">
          SCORPION MOBILE AUTO DETAILERS
        </h1>
      </header>

      <section className="flex justify-center gap-5 border-y border-y-custom-red">
        <Button to={"/pricing"} text={"Pricing"}></Button>
        <Button to={"/contact"} text={"Contact"}></Button>
      </section>
    </nav>
  );
};

export default NavBar;

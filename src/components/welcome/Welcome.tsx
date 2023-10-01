import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const navigateHome = () => navigate("/home");

  return (
    <img
      src="https://res.cloudinary.com/doqgufzuq/image/upload/v1696181111/Scorpion%20Mobile%20Auto%20Detailers/Scorpion%20Logo.png"
      alt="Scorpion Mobile Auto Detailers Logo"
      className="bg-black h-screen w-screen object-contain m-auto cursor-pointer hover:scale-125 transition duration-700 ease-in-out"
      onClick={navigateHome}
    ></img>
  );
};

export default Welcome;

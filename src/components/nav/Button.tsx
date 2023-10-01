import React, { FC } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  to: string;
  text: string;
};

const Button: FC<ButtonProps> = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2 text-4xl text-stroke-2-black"
    >
      {text}
    </Link>
  );
};

export default Button;

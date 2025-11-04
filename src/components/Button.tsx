import React from "react";
import { Color } from "../constants/constant";

type ButtonProps = {
  colorName: Color;
  className: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

export const Button = ({ colorName, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-white uppercase rounded-full shadow-lg outline-none min-w-28 ${className}`}
      onClick={onClick}
      type="button"
    >
      {colorName}
    </button>
  );
};

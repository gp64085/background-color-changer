import { useState } from "react";
import { Color } from "../constants/constant";
import { Button } from "./Button";

const buttonData = [
  { colorName: Color.RED, className: "bg-red-600" },
  { colorName: Color.GREEN, className: "bg-green-600" },
  { colorName: Color.BLUE, className: "bg-blue-600" },
  { colorName: Color.TEAL, className: "bg-teal-600" },
  { colorName: Color.GRAY, className: "bg-gray-400" },
  { colorName: Color.ORANGE, className: "bg-orange-400" },
  { colorName: Color.PINK, className: "bg-pink-400" },
];

function BackgroundColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState<Color>(Color.GRAY);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-white rounded-md shadow-lg"> {
          buttonData.map((button, index) => (
            <Button
              key={index}
              colorName={button.colorName}
              className={button.className}
              onClick={() => setBackgroundColor(button.colorName)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackgroundColorChanger;

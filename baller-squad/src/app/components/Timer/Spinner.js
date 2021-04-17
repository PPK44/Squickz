import React from "react";

export const Spinner = ({ color, spin, lgSize, size }) => {
  let colorClass;
  switch (color) {
    case "purple":
      colorClass = "spin-purple";
      break;
    case "blue":
      colorClass = "spin-blue";
      break;
    case "pink":
      colorClass = "spin-pink";
      break;
    default:
      colorClass = "spin-blue";
      break;
  }
  return (
    <>
      <div className={`absolute inset-0 flex justify-center items-center z-10`}>
        <div
          className={`${colorClass} rounded-full flex border-4 border-green-500 border-opacity-0 ease-linear border-black lg:h-${lgSize} lg:w-${lgSize} h-${size} w-${size} animate-${spin} z-30`}
        />
      </div>
    </>
  );
};

import React from "react";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";

export const Incrementer = ({
  color,
  text,
  value,
  incrementUp,
  incrementDown,
  changable,
}) => {
  return (
    <div
      className={`h-32 w-full bg-simple-gray-1e rounded-lg flex flex-col flex1 select-none`}
    >
      <div
        onClick={changable ? incrementUp : () => null}
        className={`w-full h-6 bg-${color}-600 rounded-t-lg justify-center items-center flex flex-col flex1 p-2 cursor-pointer hover:bg-${color}-500 ease-in duration-100`}
      >
        <ArrowUpward />
      </div>
      <div
        className={`w-full h-full flex lg:flex-row flex-col flex1 text-center items-center justify-center lg:justify-between p-2 lg:pr-5`}
      >
        <div
          className={`lg:p-5 p-2 lg:text-3xl w-full text-lg lg:text-left text-center text-${color}-500`}
        >
          {text}
        </div>
        <div
          className={`lg:p-5 p-2 lg:text-2xl w-full text-md bg-simple-gray-30 rounded-lg text-${color}-400 text-center`}
        >
          {value}
        </div>
      </div>
      <div
        onClick={changable ? incrementDown : () => null}
        className={`w-full h-6 bg-${color}-600 rounded-b-lg justify-center items-center flex flex-col flex1 p-2 cursor-pointer hover:bg-${color}-500 ease-in duration-100`}
      >
        <ArrowDownward />
      </div>
    </div>
  );
};

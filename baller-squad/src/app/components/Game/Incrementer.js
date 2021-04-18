import React from "react";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";

export const Incrementer = ({ color, text, value, incrementUp, incrementDown }) => {
  return (
    <div
      className={`h-32 w-full bg-simple-gray-1e rounded-lg flex flex-col flex1`}
    >
      <div
        className={`w-full h-6 bg-${color}-600 rounded-t-lg justify-center items-center flex flex-col flex1 p-2 cursor-pointer hover:bg-${color}-500 ease-in duration-100`}
      >
        <ArrowUpward />
      </div>
      <div className={`w-full h-full flex lg:flex-row flex-col flex1 text-center items-center justify-center lg:justify-between divide-${color}-400 p-2 lg:pr-5`}>
          <div className={`lg:p-5 p-2 lg:text-3xl text-lg lg:text-left text-center text-${color}-500`}>{text}</div>
          <div className={`lg:p-5 p-2 lg:text-2xl text-md bg-simple-gray-30 rounded-lg text-${color}-400`}>{value}</div>
      </div>
      <div
        className={`w-full h-6 bg-${color}-600 rounded-b-lg justify-center items-center flex flex-col flex1 p-2 cursor-pointer hover:bg-${color}-500 ease-in duration-100`}
      >
        <ArrowDownward />
      </div>
    </div>
  );
};

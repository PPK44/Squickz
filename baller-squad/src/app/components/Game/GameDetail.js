import React from "react";

export const GameDetail = ({ text, value, color }) => {
  return (
    <div
      className={`flex-col flex items-center justify-center h-auto w-auto lg:p-5 p-2 rounded-xl bg-simple-gray-1e border-4 border-${color}-700 w-full divide-solid divide-y divide-${color}-400`}
    >
      <div className={`w-full items-center justify-center flex p-2`}>
        <p className={`lg:text-4xl text-xl text-${color}-400`}>{text}</p>
      </div>
      <div className={`w-full items-center justify-center flex p-2`}>
        <p className={`lg:text-3xl text-lg text-${color}-400`}>{value}</p>
      </div>
    </div>
  );
};

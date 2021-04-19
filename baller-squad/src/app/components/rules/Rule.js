import React from "react";

export const Rule = ({ text }) => {
  return (
    <>
      <div className="box-border h-full w-full p-4 border-purple-500 border-2 m4 rounded-tl-lg rounded-br-lg bg-gradient-to-r from-purple-500 hover:bg-purple-500 ease-in duration-100 select-none cursor-default text-lg">
        {text}
      </div>
    </>
  );
};

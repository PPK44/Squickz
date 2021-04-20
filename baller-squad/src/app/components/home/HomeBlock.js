import React from "react";

// A display for showing what is good about our sick website
export const HomeBlock = ({ text, icon }) => {
  return (
    <div className={`relative h-40 lg:w-40 md:w-40 w-full z-0 items-center justify-center select-none cursor-default`}>
      <div
        className={`h-5/6 w-full lg:hover:h-full ease-in-out duration-200 bg-gradient-to-br from-blue-300 via-fuscia-500 to-purple-500 rounded-md absolute items-center justify-center inset-x-0 bottom-0 z-10`}
      >
        <div className={`relative w-full h-full`}>
          <div className={`absolute inset-x-0 bottom-6  text-center p-2 text-lg`}>{text}</div>
        </div>
      </div>
      <div
        className={`rounded-full h-20 w-20 bg-purple-700 z-20 absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2e items-center justify-center`}
      >
        <div
          className={`flex flex1 items-center justify-center w-full h-full text-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

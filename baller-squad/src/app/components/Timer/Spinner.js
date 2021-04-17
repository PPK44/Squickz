import React from "react";

export const Spinner = ({ color, spin, size, borderSide }) => {

  const style = {
    borderBottomColor: color
  }
  return (
    <>
      <div className={`absolute inset-0 flex justify-center items-center z-10`}>
        <div
          className={`loader rounded-full flex border-${borderSide}-4 border-4 ease-linear border-${color} h-${size} w-${size} animate-${spin} z-30`}
        />
      </div>
    </>
  );
};

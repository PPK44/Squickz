import React from "react";

export const SpinningTimer = ({ time }) => {
  return (
    <>
      <div
        className={`flex relative items-center justify-center h-full w-full z-0`}
      >
        <div
          className={`rounded-full aboslute inset-0 flex border-t-4 border-pink-500 flex h-28 w-28 animate-spin z-10`}
        />        <div
          className={`rounded-full aboslute inset-0 flex border-t-4 border-pink-500 flex h-28 w-28 animate-reverse-spin z-10`}
        />

        <div
          className={`absolute inset-0 flex justify-center items-center z-10`}
        >
          <p className={`text-xl`}>Time: {time}</p>
        </div>
      </div>
    </>
  );
};

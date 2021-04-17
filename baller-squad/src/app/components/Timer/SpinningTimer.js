import React from "react";
import { Spinner } from './Spinner'

export const SpinningTimer = ({ time }) => {
  return (
    <>
      <div
        className={`flex relative items-center justify-center h-full w-full z-0`}
      >
        <Spinner color={`blue-500`} spin={`reverse-spin`} borderSide={`b`} size={`36`} />
        <Spinner color={`pink-500`} spin={`spin`} borderSide={`t`} size={`28`} />
        <div
          className={`absolute inset-0 flex justify-center items-center z-10`}
        >
          <p className={`text-xl`}>Time: {time}</p>
        </div>
      </div>
    </>
  );
};

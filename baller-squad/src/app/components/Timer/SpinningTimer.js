import React from "react";
import { FlatCircle } from "./FlatCircle";
import { Spinner } from "./Spinner";

export const SpinningTimer = ({ time, started }) => {
  return (
    <div
      className={`lg:h-52 lg:w-52 md:w-32 md:h-32 w-24 h-24 items-center justify-center`}
    >
      <div
        className={`flex relative items-center justify-center h-full w-full z-0 rounded-full`}
      >
        {started === true ? (
          <>
            <Spinner
              color={`blue`}
              spin={`spin`}
              lgSize={`28`}
              mdSize={`20`}
              size={`10`}
            />
            <Spinner
              color={`purple`}
              spin={`reverse-spin`}
              lgSize={`36`}
              mdSize={`24`}
              size={`16`}
            />
            <Spinner
              color={`pink`}
              spin={`spin`}
              lgSize={`44`}
              mdSize={`28`}
              size={`20`}
            />
          </>
        ) : (
          <>
            <FlatCircle
              color={`blue-500`}
              lgSize={`28`}
              mdSize={`20`}
              size={`10`}
            />
            <FlatCircle
              color={`purple-500`}
              lgSize={`36`}
              mdSize={`24`}
              size={`16`}
            />
            <FlatCircle
              color={`pink-500`}
              lgSize={`44`}
              mdSize={`28`}
              size={`20`}
            />
          </>
        )}

        <div
          className={`absolute inset-0 flex justify-center items-center z-10`}
        >
          <p
            className={`lg:text-4xl md:text-2xl text-lg ${
              time <= 5 ? "text-red-500" : "text-green-300"
            }`}
          >
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { FlatCircle } from "./FlatCircle";
import { Spinner } from "./Spinner";

export const SpinningTimer = ({ time, started }) => {
  return (
    <div className={`lg:h-52 lg:w-52 w-32 h-32 items-center justify-center`}>
      <div
        className={`flex relative items-center justify-center h-full w-full z-0 rounded-full bg-simple-gray-29`}
      >
        {started === true ? (
          <>
            <Spinner color={`blue`} spin={`spin`} lgSize={`28`} size={`20`} />
            <Spinner
              color={`purple`}
              spin={`reverse-spin`}
              lgSize={`36`}
              size={`24`}
            />
            <Spinner color={`pink`} spin={`spin`} lgSize={`44`} size={`28`} />
          </>
        ) : (
          <>
            <FlatCircle color={`blue-500`} lgSize={`28`} size={`20`} />
            <FlatCircle color={`purple-500`} lgSize={`36`} size={`24`} />
            <FlatCircle color={`pink-500`} lgSize={`44`} size={`28`} />
          </>
        )}

        <div
          className={`absolute inset-0 flex justify-center items-center z-10`}
        >
          <p
            className={`lg:text-4xl text-3xl ${
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

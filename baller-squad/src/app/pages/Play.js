import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useTimer } from "../hooks/useTimer";

const TIME_TO_PLAY = 5

export const Play = () => {
  const boxRef = useRef();
  const containerRef = useRef();
  const { seconds } = useTimer(0, TIME_TO_PLAY);
  const [clickHeight, setClickHeight] = useState(1);
  const [clicks, setClicks] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(1);
  const [gameDetails, setGameDetails] = useState({
    clicks: 0,
    hasWon: false,
    gameLength: 0
  });

  useLayoutEffect(() => {
    if (boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight);
      console.log("Height:", boxRef.current.offsetHeight);
    }
  }, []);

  // Depending on screen height increment the box by a certain amount
  // Kinda scales a lilbit with smaller screen and bigger screen sizes
  useEffect(() => {
    const { innerHeight: height } = window;
    if (height <= 650) {
      setClickHeight(1);
    } else if (height <= 900) {
      setClickHeight(2);
    } else if (height <= 1500) {
      setClickHeight(5);
    } else {
      setClickHeight(10);
    }
  }, []);

  const incrementHeight = () => {
    const nextClickHeight = currentHeight + clickHeight;
    const containerHeight = containerRef.current.offsetHeight;
    setClicks((c) => c + 1);
    if (containerHeight <= nextClickHeight) {
      setCurrentHeight(containerHeight);
      
    } else {
      setCurrentHeight((h) => h + clickHeight);
    }
    //if (seconds > 0) {

    //}
  };

  const style = {
    height: currentHeight,
  };

  return (
    <div className={`w-full h-full p-5`}>
      <div
        ref={containerRef}
        className={`grid grid-cols-3 gap-4 h-full w-full`}
      >
        <div className={`flex flex-col items-left justify-center h-full`}>
          <p className={`text-3xl`}>Clicks: {clicks}</p>
          <p className={`text-3m`}>Current Inc: {clickHeight}</p>
          <p
            className={`text-3m ${
              seconds > 0 ? "text-green-400" : "text-red-600"
            }`}
          >
            Seconds: {seconds}
          </p>
        </div>
        <div className={`flex flex-col-reverse flex1`}>
          <div
            ref={boxRef}
            className={`
                bg-gradient-to-t from-blue-400 via-fuscia-500 to-purple-700 rounded
               `}
            style={style}
          ></div>
        </div>
        <div className={`flex flex-col-reverse flex1`}>
          <button
            onClick={() => incrementHeight()}
            className={`bg-green-500 h-16 w-full rounded`}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

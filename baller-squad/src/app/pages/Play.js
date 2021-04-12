// Timer help from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { TimeFormatter } from "../utils";

const TIME_TO_PLAY = 5;

export const Play = () => {
  const boxRef = useRef();
  const containerRef = useRef();
  const [clickHeight, setClickHeight] = useState(1);
  const [clicks, setClicks] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(1);
  const [gameDetails, setGameDetails] = useState({
    hasWon: false,
    gameLength: 0,
  });

  const [timer, setTimer] = useState({
    on: false,
    time: 0,
  });

  useLayoutEffect(() => {
    if (boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight);
      console.log("Height:", boxRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer.on) {
      console.log("Timer's time:", timer.time);
      interval = setInterval(() => {
        setTimer({
          ...timer,
          time: timer.time - 1,
        });
      }, 1000);
      if (timer.time === 0) {
        console.log("Player lost, time's up!");
        clearInterval(interval);
        setGameDetails({
          hasWon: false,
          gameLength: TIME_TO_PLAY,
        });
      }
    } else if (!timer.on && timer.time !== 0) {
      console.log("Clearing Interval");
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, setTimer]);

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

  const toggleTimer = () => {
    console.log("Toggling timer");
    setTimer({
      ...timer,
      on: !timer.on,
    });
  };

  const resetTimer = () => {
    console.log("Resetting timer");
    setTimer({
      on: false,
      time: TIME_TO_PLAY,
    });
  };

  const incrementHeight = () => {
    const nextClickHeight = currentHeight + clickHeight;
    const containerHeight = containerRef.current.offsetHeight;
    setClicks((c) => c + 1);
    if (containerHeight <= nextClickHeight) {
      setCurrentHeight(containerHeight);
    } else {
      setCurrentHeight((h) => h + clickHeight);
    }
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
          <p className={`text-3xl`}>My Timer: {timer.time}</p>
          <p className={`text-3xl`}>Clicks: {clicks}</p>
          <p className={`text-3m`}>Current Inc: {clickHeight}</p>
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
          <button
            onClick={() => toggleTimer()}
            className={`bg-red-500 h-16 w-full rounded`}
          >
            Toggle Time
          </button>
          <button
            onClick={() => resetTimer()}
            className={`bg-purple-500 h-16 w-full rounded`}
          >
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};

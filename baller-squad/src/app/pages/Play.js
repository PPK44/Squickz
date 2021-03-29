import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { RelativeWrapper } from "../components/RelativeWrapper";
import { BodyWrapper } from "../components/BodyWrapper";
import { useTimer } from "../hooks/useTimer";
import { PageWrapper } from "../components/PageWrapper";

export const Play = () => {
  const boxRef = useRef();
  const containerRef = useRef();
  const [clickHeight, setClickHeight] = useState(1);
  const [clicks, setClicks] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(1);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight);
    }
  }, []);

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
    setClicks((c) => c + 1);
    setCurrentHeight((h) => h + clickHeight);
  };

  const style = {
    height: currentHeight,
  };

  const [minutes, seconds] = useTimer(0, 5);

  return (
      <BodyWrapper>
        <div ref={containerRef} className={`grid grid-cols-3 gap-4`}>
          <RelativeWrapper>
            <div className={`absolute inset-x-0 bottom-0 text-white`}>
              <p className={`text-3xl`}>Clicks: {clicks}</p>
              <p className={`text-3m`}>Current Inc: {clickHeight}</p>
              <p className={`text-3m`}>Minutes: {minutes}</p>
              <p className={`text-3m`}>Seconds: {seconds}</p>
            </div>
          </RelativeWrapper>
          <RelativeWrapper>
            <div
              ref={boxRef}
              className={`absolute 
                bg-gradient-to-t from-blue-400 via-fuscia-500 to-purple-700
               inset-x-0 bottom-0`}
              style={style}
            ></div>
          </RelativeWrapper>
          <RelativeWrapper>
            <button
              onClick={() => incrementHeight()}
              className={`absolute bg-green-500 h-16 w-full inset-x-0 bottom-0`}
            >
              Click
            </button>
          </RelativeWrapper>
        </div>
      </BodyWrapper>
  );
};

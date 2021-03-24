import React, { useState, useLayoutEffect, useRef } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { RelativeWrapper } from "../components/RelativeWrapper";

export const Play = () => {
  const boxRef = useRef();
  const containerRef = useRef();
  const [clicks, setClicks] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(1);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight);
    }
  }, []);

  const incrementHeight = () => {
    setClicks((c) => c + 1);
    setCurrentHeight((h) => h + 1);
    console.log(`New height: ${currentHeight}`);
  };

  const style = {
    height: currentHeight,
  };

  return (
    <>
      <div className={`flex flex-col flex-1 inset-x-0 bottom-0`}>
        <PageWrapper>
          <div ref={containerRef} className={`grid grid-cols-3 gap-4 h-96`}>
            <RelativeWrapper>
              <div className={`absolute inset-x-0 bottom-0 text-white`}>
                <p className={`text-3xl`}>Clicks: {clicks}</p>
              </div>
            </RelativeWrapper>
            <RelativeWrapper>
              <div
                ref={boxRef}
                className={`absolute bg-red-500 inset-x-0 bottom-0`}
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
        </PageWrapper>
      </div>
    </>
  );
};

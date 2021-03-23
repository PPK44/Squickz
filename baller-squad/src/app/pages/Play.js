import React, { useState, useLayoutEffect, useRef } from "react";
import { PageWrapper } from "../components/PageWrapper";


export const Play = () => {
  const boxRef = useRef();
  const [clicks, setClicks] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);

  useLayoutEffect(() => {
    if(boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight)
    }
  }, []);

  const incrementHeight = () => {
    setClicks(c => c + 1);
    setCurrentHeight(h => h + 1);
    console.log(`New height: ${currentHeight}`)
  }

  const style = {
    height : currentHeight
  }

  return (
    <>
      <div className={`flex flex-col flex-1`}>
        <PageWrapper>
          <div className={`grid grid-cols-3 gap-4`}>
            <div>Clicks: {clicks}</div>
            <div className={`relative w-full`}>
              <div
                ref={boxRef}
                className={`absolute bg-red-500 inset-x-0 bottom-0`}
                style={style}
              ></div>
            </div>
            <button onClick={() => incrementHeight()} className={`bg-green-500`}>Click</button>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

import { useState, useEffect } from "react";

export const useTimer = (mins, secs) => {
  const [minutes, setMinutes] = useState(mins);
  const [seconds, setSeconds] = useState(secs);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds, setMinutes, setSeconds]);
  return {minutes, seconds};
};

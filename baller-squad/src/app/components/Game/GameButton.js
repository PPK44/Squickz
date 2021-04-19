import React from "react";

export const GameButton = ({ onClick, text, color, classes = null, animateEnd = null }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${color} h-1/2 text-lg w-full rounded focus:outline-none ${classes} hover:bg-opacity-80 ease-in duration-100`}
        onAnimationEnd={animateEnd}
      >
        {text}
      </button>
    </>
  );
};

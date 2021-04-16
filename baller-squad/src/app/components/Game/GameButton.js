import React from "react";

export const GameButton = ({ onClick, text, color, classes, animateEnd }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${color} h-48 text-lg w-full rounded focus:outline-none ${classes}`}
        onAnimationEnd={animateEnd}
      >
        {text}
      </button>
    </>
  );
};

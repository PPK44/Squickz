import React from "react";

// Button to show graph for the targeted data
export const HighScoreButton = ({ text, onClick }) => {
  return (
    <>
      <div
        className="bg-purple-700 rounded-full flex align-middle text-lg text-center justify-center p-5 hover:bg-purple-600 ease-in-out duration-200 cursor-pointer border-4 border-transparent hover:border-purple-600 m-2"
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};

import React from "react";

// display for clicks
export const Clicks = ({ clicks }) => {
  return (
    <div className={`flex items-center justify-center h-auto w-auto p-5 rounded-xl bg-simple-gray-29 border-4 border-purple-500`}>
      <p className={`text-4xl text-purple-500`}>Clicks: {clicks}</p>
    </div>
  );
};

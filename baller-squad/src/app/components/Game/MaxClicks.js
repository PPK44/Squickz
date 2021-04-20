import React from "react";

// displays max clicks
export const MaxClicks = ({ maxClicks }) => {
  return (
    <div className={`flex items-center justify-center h-auto w-auto p-5 rounded-xl bg-simple-gray-29 border-4 border-blue-500`}>
      <p className={`text-4xl text-blue-500`}>Max Clicks: {maxClicks}</p>
    </div>
  );
};

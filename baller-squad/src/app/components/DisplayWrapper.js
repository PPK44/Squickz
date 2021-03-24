import React from "react";

export const DisplayWrapper = ({ children }) => {
  return <div className={`max-w-5xl p-5 flex relative h-full w-full flex-col`}>{children}</div>;
};

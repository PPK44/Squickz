import React from "react";

export const DisplayWrapper = ({ children }) => {
  return <div className={`max-w-7xl p-5 flex relative h-full w-full flex-col mx-auto`}>{children}</div>;
};

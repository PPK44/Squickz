import React from "react";

export const DisplayWrapper = ({ children }) => {
  return (
    <div className={`flex flex-col flex1`}>
      <div className={`mb-auto`}>{children}</div>
    </div>
  );
};

// https://github.com/benawad/dogehouse/blob/staging/kofta/src/app/components/CenterLayout.tsx
import React from "react";

export const CenterLayout = ({ children }) => {
  return (
    <div
      className={`max-w-screen-sm mx-auto w-full h-full flex flex-col relative`}
    >
      {children}
    </div>
  );
};

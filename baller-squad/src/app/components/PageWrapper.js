// https://github.com/benawad/dogehouse/blob/staging/kofta/src/app/components/PageWrapper.tsx
import React from "react";

export const PageWrapper = ({ children }) => {
  return (
    <div className={`mx-auto max-w-5xl w-full h-full flex relative`}>
      {children}
    </div>
  );
};

// Page used for wrapping around other content
import React from "react";

export const PageWrapper = ({ children }) => {
  return (
    <div className={`mx-auto max-w-5x1 w-full h-full flex relative`}>
      {children}
    </div>
  )
}
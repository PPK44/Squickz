import React from 'react';

export const PageWrapper = ({children}) => {
  return (
    <div className={`px-12`}>
      {children}
    </div>
  )
}
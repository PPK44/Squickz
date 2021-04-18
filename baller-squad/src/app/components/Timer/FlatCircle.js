import React from 'react';

export const FlatCircle = ({color, lgSize, mdSize, size}) => {
  return (
    <>
      <div className={`absolute inset-0 flex justify-center items-center z-10`}>
        <div
          className={`rounded-full flex border-4 ease-linear lg:h-${lgSize} lg:w-${lgSize} md:w-${mdSize} md:h-${mdSize} h-${size} w-${size} z-30 border-${color}`}
        />
      </div>
    </>
  );
}
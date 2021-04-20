import React from "react";

export const Profile = ({ name, studentNumber, description }) => {
  return (
    <>
      <div
        className={`w-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 flex flex-row flex1 rounded-lg justify-between items-center p-5 border-4 border-transparent hover:border-4 hover:border-purple-400 select-none cursor-default ease-in-out duration-200`}
      >
        <div className={`w-full h-full`}>
          <div className={`text-3xl`}>{name}</div>
          <div className={`text-md`}>
            <i>{studentNumber}</i>
          </div>
        </div>
        <div className={`text-lg w-1/2 text-right p-5 rounded-lg bg-opacity-10 bg-white h-full`}>
          {description}
        </div>
      </div>
    </>
  );
};

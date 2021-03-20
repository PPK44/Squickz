import React from "react";

export const MenuItem = ({link, text, isActive}) => {
  return (
    <>
      <a
        href={link}
        className={`ml-4 ${isActive? "bg-blue-600 text-white" : "text-purple-500 hover:bg-purple-700 hover:text-white"} px-8 py-2 rounded-md text-lg font-medium`}
      >
        {text}
      </a>
    </>
  );
};

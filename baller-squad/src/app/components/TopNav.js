import React from "react";
import logo from '../../assets/logo.png';

export const TopNav = () => {
  return (
    <nav className={`bg-gray-800`}>
      <div className={`max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8`}>
        <div className={`relative flex items-center justify-between h-28`}>
       <img src={logo} alt="logo" className={`object-contain h-24 w-full`}/>   
        </div>
      </div>
    </nav>
    );
};

// Rule page
import React from "react";

import { TopNavModule } from "./TopNav";
import { Footer } from "../components/Nav/Footer";

export const Rules = () => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="w-full h-full p-5">
        <div className="bg-simple-gray-29 rounded-lg divide-y-4 divide-blue-500">
        <div className="text-5xl text-center p-4">How to play:</div>
          <div className="flex lg:flex-row flex-col items-center p-5 justify-around h-auto">
              <div className="box-border h-full w-40 p-4 border-pink-500 border-4 m4 rounded-lg"> 
                  Click Start game on the bottom left to start the game
              </div>
              <div className="box-border h-full w-40 border-pink-500 border-4 p-4 m4 rounded-lg">
                Click as many times as you can before the time runs out
              </div>
              <div className="box-border h-full w-40 border-pink-500 border-4 p-4 m4 rounded-lg">
                Sign up to save your high score and compare yourself to others!
              </div>
              <div className="box-border h-full w-40 border-pink-500 border-4 p-4 m4 rounded-lg">
                <div className="text-2xl text-center">Have fun!</div>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
};

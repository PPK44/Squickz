// Rule page
import React from "react";

export const Rules = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="bg-simple-gray-29 h-auto p-5 w-full rounded-lg divide-y-4 divide-blue-500">
        <div className="text-5xl text-center p-4">How to play</div>
        <div class="flex flex-row items-center p-5 justify-around h-full">
          <div className="box-border h-full w-40 p-4 border-pink-500 border-4 m4 rounded-lg">
            <div>Click Start game on the bottom left to start the game</div>
          </div>
          <div className="box-border h-full w-40 border-pink-500 border-4 p-4 m4 rounded-lg">
            <div>Click as many times as you can before the time runs out</div>
          </div>
          <div className="box-border h-full w-40 border-pink-500 border-4 p-4 m4 rounded-lg">
            <div>
              Sign up to save your high score and compare yourself to others!
            </div>
          </div>
          <div className="box-border h-full w-40 border-pink-500 border-4 p-4 m4 rounded-lg">
            <div className="text-2xl text-center">
              <div>Have fun!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

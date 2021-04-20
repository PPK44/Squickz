// Rule page
import React from "react";
import { Footer } from "../components/Nav/Footer";
import { Rule } from "../components/rules/Rule";

// Rules page 
// Displays some rules and how to plays for the game
export const Rules = () => {
  return (
    <>
      <div className="flex flex-col h-full ">
        <div className="w-full h-full p-5">
          <div className="bg-simple-gray-29 rounded-lg divide-y-4 divide-purple-400">
            <div className="text-5xl text-center p-4 text-purple-300">How to play</div>
            <div className="flex flex-col items-center p-5 justify-around h-auto space-y-4 text-left">
              <Rule
                text={`Click Start game on the bottom left to start the game`}
              />
              <Rule
                text={`Click as many times as you can before the time runs out`}
              />
              <Rule
                text={`Sign up to save your high score and compare yourself to others!`}
              />
              <Rule
                text={`Your high score only gets submitted if you reach 80% of Max Clicks`}
              />
              <Rule
                text={`Have fun!`}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

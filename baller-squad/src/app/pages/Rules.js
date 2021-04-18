// Home page for app
import React from "react";
import { TopNavModule } from "./TopNav";
import { useFetch } from "../components/KanyeAPI/KanyeFetch";

export const Rules = () => {
    const { data, loading } = useFetch("https://api.kanye.rest/?format=text");
  return (
    <div className="grid grid-cols-3 gap-4 h-full w-full">
      <div></div>
      <div className="w-full h-full p-5 justify-center content-center">
        <div className="border border-yellow-300 justify-center">
          <div className="flex flex-col items-center justify-center p-5 text-center	">
            <div className="text-5xl">Rules:</div>
            <div className="text-2xl p-5">Click Start game on the bottom left to start the game</div>
            <div className="text-2xl p-5">Click as many times as you can before the time runs out</div>
            <div className="text-2xl p-5">Sign up to save your high score and compare yourself to others!</div>
            <div className="text-4xl p-5">Have fun!</div>
            <div className="flex-col-reversed pt-5">
              <div className="text-2xl">Kanye: "{loading ? "loading..." : data}"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

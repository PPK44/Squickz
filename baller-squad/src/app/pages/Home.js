// Home page for app
import React from "react";
import { useFetch } from "../components/KanyeAPI/KanyeFetch";

export const Home = () => {
  const { data, loading } = useFetch("https://api.kanye.rest/?format=text");
  return (
    <div className="w-full h-full p-5">
      <div className="bg-simple-gray-29 rounded-lg divide-y-4 divide-blue-500">
      <div className="text-5xl text-center p-4">What is Squickz?</div>
        <div class="grid grid-cols-2 gap-4">
          <div>          
            <div className="text-2xl p-5">The newest and hotest game in town.</div>
            <div className="text-2xl p-5">More addicting than Runescape</div>
            <div className="text-2xl p-5">Click play on the top right to play now!</div>
            <div className="text-4xl p-5">Have fun!</div>
          </div>
          <div>          
            <div className="text-2xl p-5">Created by the Ballersquad  </div>
            <div className="text-2xl p-5">Click as many times as you can before the time runs out</div>
            <div className="text-2xl p-5">Sign up to save your high score and compare yourself to others!</div>
            <div className="text-4xl p-5">Have fun!</div>
          </div>
        </div>
        <div className="text-2 text-center p-4">Kanye: "{loading ? "loading..." : data}"</div>
      </div>
    </div>
  )
};

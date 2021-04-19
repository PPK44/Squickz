// Home page for app
import React from "react";
import { Footer } from "../components/Nav/Footer";

export const Home = () => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="w-full h-full p-5">
        <div className="bg-simple-gray-29 rounded-lg divide-y-4 divide-blue-500">
        <div className="text-5xl text-center p-4">What is Squickz?</div>
          <div class="grid grid-cols-2 gap-4">
            <div>          
              <div className="text-2xl p-5">The newest and hotest game in town.</div>
              <div className="text-2xl p-5">More addicting than Runescape</div>
              <div className="text-2xl p-5">Click play on the top right to play now!</div>
              <div className="text-4xl p-5">Please let us pass</div>
            </div>
            <div>          
              <div className="text-2xl p-5">Created by the Ballersquad</div>
              <div className="text-2xl p-5">Calvin Lapp</div>
              <div className="text-2xl p-5">Paul Kerrigan!</div>
              <div className="text-2xl p-5">Henry Zheng</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

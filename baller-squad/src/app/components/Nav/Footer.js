// Nav section for application
// using code from here https://tailwindui.com/components/application-ui/navigation/navbars
import React from "react";
import { useFetch } from "../KanyeAPI/KanyeFetch";

// Icons from:
// https://www.flaticon.com/free-icon/twitter_733579?term=twitter&page=1&position=3&page=1&position=3&related_id=733579&origin=tag
export const Footer = () => {
  const { data, loading } = useFetch("https://api.kanye.rest/?format=text");

  return (
    <footer className="p-5 w-full bottom-0 inset-x-0 sm:px-6 lg:px-8 bg-simple-gray-1e">
        <div className="text-xl text-center">Kanye: "{loading ? "loading..." : data}"</div>
        <div className="flex flex-row flex1 justify-between">
            <div className="flex">Poop</div>
            <div className="flex flex-row-reverse">
              <img src="https://img.icons8.com/fluent/32/000000/twitter.png"/>    
              <img src="https://img.icons8.com/fluent/32/000000/facebook-new.png"/>
              <img src="https://img.icons8.com/fluent/32/000000/linkedin.png"/>
              <img src="https://img.icons8.com/fluent/32/000000/instagram-new.png"/>
            </div>
          </div>
       </footer>
  );
};

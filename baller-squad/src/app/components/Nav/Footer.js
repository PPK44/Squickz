// Nav section for application
// using code from here https://tailwindui.com/components/application-ui/navigation/navbars
import React from "react";
import { useFetch } from "../API/APIFetch";

// Icons from:
// https://icons8.com/
export const Footer = () => {
  const { data, loading } = useFetch(`https://uselessfacts.jsph.pl/random.json`);

  return (
    <footer className="p-5 w-full bottom-0 inset-x-0 sm:px-6 lg:px-8 bg-simple-gray-1e">
      <div className="text-xl text-center">Trivia API: "{loading ? "loading..." : data.text}"</div>
      <div className="flex flex-row flex1 justify-between">
        <div className="flex">Copyright 2021</div>
        <div className="flex flex-row-reverse gap-4">
          <a href="#">
            <img src="https://img.icons8.com/fluent/32/000000/twitter.png" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/fluent/32/000000/facebook-new.png" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/fluent/32/000000/linkedin.png" />
          </a>
          <a href="#">
            <img src="https://img.icons8.com/fluent/32/000000/instagram-new.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};

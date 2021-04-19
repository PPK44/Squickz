import React, { useState, useEffect, useLayoutEffect } from "react";
import { TopNav } from "../components/Nav/TopNav";
import { MenuItems } from "../components/Nav/MenuItems";
import { MobileMenu } from "../components/Nav/MobileMenu";

export const TopNavModule = () => {
  const [isNavOpen, setNavOpen] = useState(false); // state for opening/closing navbar in mobile menu
  const [currentRoute, setCurrentRoute] = useState("/"); // used for storing current visited route

  // code taken from https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
  // This is used because once you pass a threshold of size, if you didn't close the nav 
  // before your screen size grew you would use the previous mobile menu sizes
  function useWindowSize(boolCheck) {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        if(window.innerWidth >= 640 && window.innerWidth !== size && boolCheck){
          setSize(window.innerWidth);
          setNavOpen(false);
        }
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, [size, boolCheck]);
    return size;
  }

  useWindowSize(isNavOpen)

  useEffect(() => {
    console.log("Top Nav re-rendered.  Nav Open = " + isNavOpen)
  })
  

  return (
    <nav className={`bg-simple-gray-1e`}>
      <TopNav
        isNavOpen={isNavOpen}
        toggleMenu={() => setNavOpen(!isNavOpen)}
        menuItems={
          <MenuItems
            isNavOpen={isNavOpen}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />
        }
      />
      {isNavOpen ? (
        <MobileMenu
          isNavOpen={isNavOpen}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
      ) : null}
      
    </nav>
  );
};

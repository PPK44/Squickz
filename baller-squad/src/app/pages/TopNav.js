import React, { useState, useLayoutEffect, useContext } from "react";
import { TopNav } from "../components/Nav/TopNav";
import { MenuItems } from "../components/Nav/MenuItems";
import { MobileMenu } from "../components/Nav/MobileMenu";
import { RouteContext } from "../routeContext";

export const TopNavModule = () => {
  const [isNavOpen, setNavOpen] = useState(false); // state for opening/closing navbar in mobile menu
  const { route, setRoute } = useContext(RouteContext);

  // code taken from https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
  // This is used because once you pass a threshold of size, if you didn't close the nav
  // before your screen size grew you would use the previous mobile menu sizes
  function useWindowSize(boolCheck) {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        if (
          window.innerWidth >= 640 &&
          window.innerWidth !== size &&
          boolCheck
        ) {
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

  useWindowSize(isNavOpen);

  const setCurrentRoute = (val) =>{
    setRoute(val);
    console.log("val:",val)
    localStorage.setItem('page', val)
  }

  return (
    <nav className={`bg-simple-gray-1e`}>
      <TopNav
        isNavOpen={isNavOpen}
        toggleMenu={() => setNavOpen(!isNavOpen)}
        menuItems={
          <MenuItems
            isNavOpen={isNavOpen}
            currentRoute={route}
            setCurrentRoute={setCurrentRoute}
          />
        }
      />
      {isNavOpen ? (
        <MobileMenu
          isNavOpen={isNavOpen}
          currentRoute={route}
          setCurrentRoute={setCurrentRoute}
        />
      ) : null}
    </nav>
  );
};

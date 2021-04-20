import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Login } from "../../pages/Login"
import { UserContext } from "../../userContext";

const navNotOpenClass = `ml-4 lg:px-8 px-4 py-4 rounded-md text-lg font-medium`;
const navOpenClass = `block px-3 py-2 rounded-md text-base font-medium text-white`;

//for the login and logout menu buttons
export const LoginMenuItem = ({text, isNavOpen, setCurrentRoute}) => {

  //contexxt to check if user is logged in and set a user whon logs in
const {userInfo, setUserInfo} = useContext(UserContext);

//to open the login dialog
const [isOpen, setDialogOpen] = useState(false);
  const loadLogin = () => {
    setDialogOpen(true);
  }

    //close the login dialog
  const closeDialog =  () => {
    setDialogOpen(false);
  };

  //when the logout button is clicked go back to home
  //remove the user form context and localstorage
  const logout = () => {
    setCurrentRoute("/");
    const data = {userName: "", isLoggedIn: false};
    localStorage.removeItem('user')
    setUserInfo(data);
  }

  return (
      <>
      {/* check if the user is logged in or not display the login button */}
      {
      userInfo.isLoggedIn ? null : <a
        className={`cursor-pointer text-purple-500 hover:bg-purple-700 hover:text-white ${isNavOpen ? navOpenClass : navNotOpenClass}`} 
        onClick={()=>loadLogin()}
      >
        {text}
        
      </a>
        }
        {/* check if the user is logged in or not display the logout button */}
      {
        userInfo.isLoggedIn ? <Link to="/"><a onClick={()=>logout()} className={`cursor-pointer text-red-500 hover:bg-red-700 hover:text-white ${isNavOpen ? navOpenClass : navNotOpenClass}`}>Logout</a> </Link> : null
      }
      {/* call the login dialog and onlyt display if login button is click*/}
      <Login
          open={isOpen}
          onClose={() => closeDialog()}
        ></Login>
      </>
  );
};

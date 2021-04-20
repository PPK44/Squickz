import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Login } from "../../pages/Login"
import { UserContext } from "../../userContext";

const navNotOpenClass = `ml-4 lg:px-8 px-4 py-4 rounded-md text-lg font-medium`;
const navOpenClass = `block px-3 py-2 rounded-md text-base font-medium text-white`;

export const LoginMenuItem = ({text, isNavOpen, setCurrentRoute}) => {

const {userInfo, setUserInfo} = useContext(UserContext);

const [isOpen, setDialogOpen] = useState(false);
  const loadLogin = () => {
    setDialogOpen(true);
  }

  const closeDialog =  () => {
    setDialogOpen(false);
  };

  const logout = () => {
    setCurrentRoute("/");
    const data = {userName: "", isLoggedIn: false};
    localStorage.removeItem('user')
    setUserInfo(data);
  }

  return (
      <>
      {
      userInfo.isLoggedIn ? null : <a
        className={`cursor-pointer text-purple-500 hover:bg-purple-700 hover:text-white ${isNavOpen ? navOpenClass : navNotOpenClass}`} 
        onClick={()=>loadLogin()}
      >
        {text}
        
      </a>
        }
      {
        userInfo.isLoggedIn ? <Link to="/"><a onClick={()=>logout()} className={`cursor-pointer text-red-500 hover:bg-red-700 hover:text-white ${isNavOpen ? navOpenClass : navNotOpenClass}`}>Logout</a> </Link> : null
      }
      <Login
          open={isOpen}
          onClose={() => closeDialog()}
        ></Login>
      </>
  );
};

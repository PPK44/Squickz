import React, {useState, useContext} from "react";

import { Login } from "../../pages/Login"
import { UserContext } from "../../userContext";

export const LoginMenuItem = ({text}) => {

const {userInfo, setUserInfo} = useContext(UserContext);

const [isOpen, setDialogOpen] = useState(false);
  const loadLogin = () => {
    setDialogOpen(true);
  }

  const closeDialog =  () => {
    setDialogOpen(false);
  };

  const logout = () => {
    const data = {userName: "", isLoggedIn: false};
    setUserInfo(data);
    
  }

  return (
      <>
      {
      userInfo.isLoggedIn ? null : <a
        className={"cursor-pointer text-purple-500 hover:bg-purple-700 hover:text-white ml-4 lg:px-8 px-4 py-4 rounded-md text-lg font-medium"} 
        onClick={()=>loadLogin()}
      >
        {text}
        
      </a>
        }
      {
        userInfo.isLoggedIn ? <a onClick={()=>logout()} className={"cursor-pointer text-red-500 hover:bg-red-700 hover:text-white ml-4 lg:px-8 px-4 py-4 rounded-md text-lg font-medium"}>Logout</a> : null
      }
      <Login
          open={isOpen}
          onClose={() => closeDialog()}
        ></Login>
      </>
  );
};

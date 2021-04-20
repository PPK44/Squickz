// Home page for app
import { useRef, useState, useContext } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { UserContext } from "../userContext";
import { Register } from "./Register";

export const Login = ({ open, onClose }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const userRef = useRef("");
  const passRef = useRef("");
  const [error, setError] = useState("");
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const loadRegister = () => {
    setRegisterOpen(true);
    closeForm();
  };

  const closeRegister = () => {
    setRegisterOpen(false);
  };

  const theme = createMuiTheme({
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    input: {
      color: "white",
    },
    floatingLabelFocusStyle: {
      color: "white",
      "&.Mui-focused": {
        color: "white",
      },
    },
    focusedLabel: {},
    inputBackground: {
      label: "white",
    },
    customizedButton: {
      position: "absolute",
      left: "85%",
      top: "5%",
      color: "red",
    },
    submitButton: {
      position: "absolute",
      left: "5%",
      bottom: "4%",
      backgroundColor: "#7e57c2",
      color: "black",
      "&:hover": {
        backgroundColor: "#583c87",
      },
    },
    registrationButton: {
      position: "absolute",
      left: "5%",
      bottom: "4%",
      color: "#2196f3",
    },
  }));
  const classes = useStyles();

  const closeForm = () => {
    setError("");
    onClose();
  }

  const formSubmit = () => {
    if(userRef.current.value !== "" && passRef.current.value !== ""){
      fetch(`http://localhost:3000/getUsers?username=${userRef.current.value}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.length);
          if(res.length !== 0){
            const data = { userName: res[0].user, isLoggedIn: true };
            setUserInfo(data);
            localStorage.setItem("user", data.userName);
            setError("");
            onClose();
          }else{
            setError("No records match this username and password");
          }
        });
    }else{
      setError("You have to input a username or password");
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        aria-labelledby="form-dialog-title"
        className={`flex items-center justify-center h-full w-full self-center border-blue-300`}
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
      >
        {/* Reference for the svg: https://www.tailwindtoolbox.com/components/modal */}
        <div
          className={`  justify-center h-auto w-auto bg-simple-gray-41 pt-6 px-5 focus:outline-none text-white`}
        >
          <div class="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
            <svg
              onClick={closeForm}
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
          <DialogTitle id="form-dialog-title center">Login Form</DialogTitle>
        </div>
        <div
          className={`justify-center h-auto w-auto bg-simple-gray-41 pb-10 px-5 focus:outline-none text-white`}
        >
          <DialogContent>
            <p>Please enter your Login information</p>
            <TextField
              margin="dense"
              id="user"
              label="username"
              InputLabelProps={{
                classes: {
                  root: classes.floatingLabelFocusStyle,
                  focused: classes.focusedLabel,
                },
              }}
              InputProps={{
                className: classes.input,
              }}
              inputRef={userRef}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pass"
              label="password"
              type="password"
              inputRef={passRef}
              InputLabelProps={{
                classes: {
                  root: classes.floatingLabelFocusStyle,
                  focused: classes.focusedLabel,
                },
              }}
              InputProps={{
                className: classes.input,
              }}
              fullWidth
            />
            <div className={`text-red-500`}>{error}</div>
          </DialogContent>
          <DialogActions>
            <button
              onClick={formSubmit}
              className={`bg-purple-500 inset-x-0 bottom-0 rounded p-2 w-full h-12 text-lg hover:bg-purple-600 transition duration-300`}
              type="submit"
            >
              Login
            </button>

            <a
              onClick={loadRegister}
              className={`cursor-pointer ${classes.registrationButton}`}
            >
              Click here to make an account
            </a>
          </DialogActions>
        </div>
      </Dialog>
      <Register
        open={isRegisterOpen}
        onClose={() => closeRegister()}
      ></Register>
    </ThemeProvider>
  );
};

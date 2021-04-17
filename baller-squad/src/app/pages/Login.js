// Home page for app
import { useRef, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { UserContext } from "../userContext";

export const Login = () =>{   
     const [open, setOpen] = useState(true);
     const {userInfo, setUserInfo} = useContext(UserContext);
     const userRef = useRef('');
     const passRef = useRef('');
    
    const handleClose = (value) => {
        setOpen(false);
        return <Link to="/"/>
    };


    const formSubmit = () => {
        fetch(`http://localhost:3000/getUsers?username=${userRef.current.value}`)
        .then((res) => res.json())
        .then(res =>{
            const data = {userName: res[0].user, isLoggedIn: true};
            setUserInfo(data);
       
        });
    }
    
    return (
        <div>
            
        <Dialog 
        onClose={handleClose}
        aria-labelledby="form-dialog-title" 
        open={open} disableBackdropClick>
            <div className={` justify-center bg-simple-gray-41 text-white`}>
            <DialogTitle id="form-dialog-title center">Login Form</DialogTitle>
            <DialogContent>
            <DialogContentText >
                Please enter your Login information
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="user"
                label="username"
                inputRef={userRef}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="password"
                type="password"
                inputRef={passRef}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                <Link to="/">
                Cancel
                </Link>
            </Button>
            <Button onClick={formSubmit} type="submit" color="primary">
                Login
            </Button>
            </DialogActions>
            </div>
    </Dialog>
    </div>
    );
};

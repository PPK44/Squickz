// Home page for app
import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { UserContext } from "../userContext";

export const Register = () =>{   
    const [open, setOpen] = useState(true);
    const userRef = useRef('');
    const passRef = useRef('');
    const emailRef = useRef('');
    
    const handleClose = () => {
        setOpen(false);
        return <Link to="/"/>
    };
    
    const formSubmit = () => {
        fetch(`http://localhost:3000/registerUser`,{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({userName: userRef.current.value, email: emailRef.current.value, passwd: passRef.current.value})
        }).then((res) => res.text())
        .then(res =>{
            console.log(res);
            
        });
    }

    return (
        <div>
        <Dialog 
        onClose={handleClose}
        aria-labelledby="form-dialog-title" 
        open={open} disableBackdropClick>
            <div className={` justify-center bg-simple-gray-41 text-white`}>
            <DialogTitle id="form-dialog-title center">Registration Form</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                inputRef={emailRef}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="user"
                label="Username"
                inputRef={userRef}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                inputRef={passRef}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="confirmpass"
                label="Confirm Password"
                type="password"
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} className={`bg-purple-600`}>
                <Link to="/">
                Cancel
                </Link>
            </Button>
            <Button onClick={formSubmit} color="primary">
                Login
            </Button>
            </DialogActions>
            </div>
    </Dialog>
    </div>
    );
};

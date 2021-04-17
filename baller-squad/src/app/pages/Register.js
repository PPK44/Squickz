// Home page for app
import { Fragment, useRef, useState } from "react";
import { TopNavModule } from "../modules/Nav/TopNav";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const Register = () =>{   
    const [open, setOpen] = useState(true);
    
    const handleClose = (value) => {
        setOpen(false);
        return <Link to="/"/>
    };
    
    return (
        <div>
        <TopNavModule/>
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
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="Password"
                type="password"
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
            <Button onClick={handleClose} color="primary">
                Login
            </Button>
            </DialogActions>
            </div>
    </Dialog>
    </div>
    );
};

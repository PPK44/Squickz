import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";

export const GameModal = ({isOpen, onClose}) => {
  console.log(isOpen)
  return (
    <Modal
      aria-labelledby="Game pop-up"
      aria-describedby="Pop=up screen displaying game details"
      className={`flex items-center justify-center h-48 w-48 bg-green-500`}
      open={isOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableBackdropClick
    >
      <Fade in={isOpen}>
        <div onClick={onClose}>swag</div>
      </Fade>
    </Modal>
  );
};

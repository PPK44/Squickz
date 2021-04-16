import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";

export const GameModal = ({ isOpen, onClose, hasWon, clicks, timeLeft }) => {
  return (
    <Modal
      aria-labelledby="Game pop-up"
      aria-describedby="Pop=up screen displaying game details"
      open={isOpen}
      className={`flex items-center justify-center h-full w-full self-center border-blue-300`}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div
          className={`flex items-center justify-center h-auto lg:w-2/4 w-3/4 bg-simple-gray-41 py-7 px-7 focus:outline-none rounded`}
        >
          <div className={`flex flex-col flex-1 items-center justify-center space-y-4`}>
            <div className={`text-3xl text-blue-400`}>
              {hasWon ? "You won!" : "You lost!"}
            </div>
            {hasWon ? (
              <div className={`text-lg`}>You clicked a total of <span className={`text-pink-300 text-xl`}>{clicks}</span> times with <span className={`text-pink-300 text-xl`}>{timeLeft}</span> seconds remaining!</div>
            ) : (
              <div className={`text-lg`}>You clicked a total of <span className={`text-pink-300 text-xl`}>{clicks}</span> times until you ran out of time...</div>
            )}

            <button
              onClick={onClose}
              className={`bg-blue-500 inset-x-0 bottom-0 rounded p-2 w-full h-12 text-lg hover:bg-blue-600 transition duration-300`}
            >
              Okay
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

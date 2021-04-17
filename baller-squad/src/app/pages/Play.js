// Timer help from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { GameButton } from "../components/Game/GameButton";
import { GameModal } from "../components/Game/GameModal";

const TIME_TO_PLAY = 15;

export const Play = () => {
  const boxRef = useRef();
  const containerRef = useRef();
  const [clickHeight, setClickHeight] = useState(1);
  const [clicks, setClicks] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(1);
  const [gameDetails, setGameDetails] = useState({
    hasWon: false,
    gameLength: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wiggleEffect, setWiggleEffect] = useState(false);

  const [timer, setTimer] = useState({
    on: false,
    time: TIME_TO_PLAY,
  });

  useLayoutEffect(() => {
    if (boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight);
      console.log("Height:", boxRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer.on) {
      interval = setInterval(() => {
        setTimer({
          ...timer,
          time: timer.time - 1,
        });
      }, 1000);
      if (timer.time === 0) {
        console.log("Player lost, time's up!");
        clearInterval(interval);
        setTimer({
          ...timer,
          on: false,
        });
        setGameDetails({
          hasWon: false,
          gameLength: TIME_TO_PLAY,
        });
        setIsModalOpen(true);
      }
    } else if (!timer.on && timer.time !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, setTimer]);

  // Depending on screen height increment the box by a certain amount
  // Kinda scales a lilbit with smaller screen and bigger screen sizes
  useEffect(() => {
    const { innerHeight: height } = window;
    if (height <= 650) {
      setClickHeight(1);
    } else if (height <= 900) {
      setClickHeight(2);
    } else if (height <= 1500) {
      setClickHeight(15);
    } else {
      setClickHeight(10);
    }
  }, []);

  const toggleTimer = () => {
    console.log("Toggling timer");
    setTimer({
      ...timer,
      on: !timer.on,
    });
  };

  const resetTimer = () => {
    console.log("Resetting timer");
    setTimer({
      on: false,
      time: TIME_TO_PLAY,
    });
  };

  // Increments the box height that shows how high youve clicked so far
  const incrementHeight = () => {
    const nextClickHeight = currentHeight + clickHeight;
    const containerHeight = containerRef.current.offsetHeight;
    setWiggleEffect(true);
    setClicks((c) => c + 1);
    if (containerHeight <= nextClickHeight) {
      toggleTimer();
      setCurrentHeight(containerHeight);
      setGameDetails({
        ...gameDetails,
        hasWon: true,
        gameLength: TIME_TO_PLAY - timer.time,
      });
      setIsModalOpen(true);
    } else {
      setCurrentHeight((h) => h + clickHeight);
    }
  };

  // Starts the game
  const startGame = () => {
    setTimer({
      ...timer,
      on: true,
      time: TIME_TO_PLAY,
    });
  };

  const resetGame = () => {
    resetTimer();
    setGameDetails({
      ...gameDetails,
      hasWon: false,
      gameLength: 0,
    });
    setClicks(0);
    setCurrentHeight(1);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
    setCurrentHeight(1);
    await new Promise((r) => setTimeout(r, 500));
    resetGame();
  };

  const style = {
    height: currentHeight,
  };

  return (
    <div className={`w-full h-full p-5`}>
      <div
        ref={containerRef}
        className={`grid grid-cols-3 gap-4 h-full w-full`}
      >
        <div className={`flex flex-col items-left justify-center h-full`}>
          <p className={`text-3xl`}>My Timer: {timer.time}</p>
          <p className={`text-3xl`}>Clicks: {clicks}</p>
          <p className={`text-3m`}>Current Inc: {clickHeight}</p>
        </div>
        <div className={`flex flex-col-reverse flex1`}>
          <div
            ref={boxRef}
            className={`
                bg-gradient-to-t from-blue-400 via-fuscia-500 to-purple-700 rounded
               `}
            style={style}
          ></div>
        </div>
        <div className={`flex flex-col-reverse flex1`}>
          {timer.on === true ? (
            <div className={`space-y-8 flex flex-col flex1`}>
              <GameButton
                onClick={() => resetGame()}
                color="bg-purple-700"
                text="Reset Game"
              />
              <GameButton
                onClick={() => incrementHeight()}
                color="bg-blue-500"
                text="Click"
                classes={`${wiggleEffect && "animate-wiggle"}`}
                animateEnd={() => setWiggleEffect(false)}
              />
            </div>
          ) : (
            <GameButton
              onClick={() => startGame()}
              color="bg-purple-600"
              text="Start Game"
            />
          )}
        </div>
      </div>
      <div
        className={`flex flex-col flex1 justify-center items-center relative`}
      >
        <GameModal
          isOpen={isModalOpen}
          onClose={() => closeModal()}
          hasWon={gameDetails.hasWon}
          clicks={clicks}
          timeLeft={gameDetails.gameLength}
        ></GameModal>
      </div>
    </div>
  );
};

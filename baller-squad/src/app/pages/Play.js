// Timer help from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { GameButton } from "../components/Game/GameButton";
import { GameModal } from "../components/Game/GameModal";
import { SpinningTimer } from "../components/Timer/SpinningTimer";
import { GameDetails } from "../components/Game/GameDetails";
import { Incrementer } from "../components/Game/Incrementer";
import { GAME_TIMES, DIFFICULTIES } from "../constants";

export const Play = () => {
  const boxRef = useRef();
  const containerRef = useRef();
  // current height of the clicks (increment)
  const [clickHeight, setClickHeight] = useState(1);
  // num clicks currently done
  const [clicks, setClicks] = useState(0);
  // current height of the div
  const [currentHeight, setCurrentHeight] = useState(1);
  // details about the game
  const [gameDetails, setGameDetails] = useState({
    hasWon: false,
    maxClicks: 0,
    gameLength: 0,
    difficulty: 0,
    maxTime: 0,
  });
  // var for checking to open modal or not
  const [isModalOpen, setIsModalOpen] = useState(false);
  // var for wiggling click button
  const [wiggleEffect, setWiggleEffect] = useState(false);

  // timer info
  const [timer, setTimer] = useState({
    on: false,
    time: GAME_TIMES[0],
  });

  // get the current height of the gradient box
  useLayoutEffect(() => {
    if (boxRef.current) {
      setCurrentHeight(boxRef.current.offsetHeight);
    }
  }, []);

  // set up the timer
  useEffect(() => {
    let interval = null;
    if (timer.on) {
      interval = setInterval(() => {
        setTimer({
          ...timer,
          time: timer.time - 1,
        });
      }, 1000);
      // timer is over
      if (timer.time === 0) {
        clearInterval(interval);
        setTimer({
          ...timer,
          on: false,
        });
        setGameDetails({
          ...gameDetails,
          hasWon: false,
          gameLength: GAME_TIMES[gameDetails.maxTime],
        });
        setIsModalOpen(true);
      }
    } else if (!timer.on && timer.time !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, setTimer, gameDetails]);

  // set how much the box should be incremented with each click
  useEffect(() => {
    const height = containerRef.current.offsetHeight
    const numClicks = DIFFICULTIES[gameDetails.difficulty].value
    console.log("Height:",height )
    console.log("swag:",height / numClicks)
    setClickHeight((height/numClicks))
  }, [gameDetails.difficulty]);

  // calc max clicks
  useEffect(() => {
    setGameDetails({
      ...gameDetails,
      hasWon: false,
      maxClicks: DIFFICULTIES[gameDetails.difficulty].value,
      gameLength: 0,
    });
    // eslint error but idk if i add dependency then it forever updates so wut ever yolo
  }, [clickHeight]);

  // toggles the timer
  const toggleTimer = () => {
    setTimer({
      ...timer,
      on: !timer.on,
    });
  };

  // resets the timer
  const resetTimer = () => {
    setTimer({
      on: false,
      time: GAME_TIMES[gameDetails.maxTime],
    });
  };

  // Increments the box height that shows how high youve clicked so far
  const incrementHeight = () => {
    const nextClickHeight = currentHeight + clickHeight;
    const containerHeight = containerRef.current.offsetHeight;
    setWiggleEffect(true);
    
    // If they have reached the max clicks
    // show them the winning model and reset
    if (clicks === gameDetails.maxClicks) {
      toggleTimer();
      setCurrentHeight(containerHeight);
      setGameDetails({
        ...gameDetails,
        hasWon: true,
        gameLength: timer.time,
      });
      setIsModalOpen(true);
    } else {
      setCurrentHeight((h) => h + clickHeight);
      setClicks((c) => c + 1);
    }
  };

  // Starts the game
  const startGame = () => {
    setTimer({
      ...timer,
      on: true,
      time: GAME_TIMES[gameDetails.maxTime],
    });
  };

  // resets the game
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

  // closes the model and resets game
  const closeModal = async () => {
    setIsModalOpen(false);
    setCurrentHeight(1);
    // sleep for 500ms to allow modal to close without the data being reset on the modal
    await new Promise((r) => setTimeout(r, 500));
    resetGame();
  };

  // adds an extra time level
  // 10 -> 15 -> 20
  const incrementTime = () => {
    if (gameDetails.maxTime < GAME_TIMES.length - 1) {
      setGameDetails({
        ...gameDetails,
        maxTime: gameDetails.maxTime + 1,
      });
      // idk why i have to add in the set timer why it doesnt jsut fire off but owell maybe react groups setstates
      setTimer({
        ...timer,
        time: GAME_TIMES[gameDetails.maxTime +1],
      });
    }
  };

  // decrements the time level
  // 20 -> 15 -> 10
  const decrementTime = () => {
    if (gameDetails.maxTime > 0) {
      setGameDetails({
        ...gameDetails,
        maxTime: gameDetails.maxTime - 1,
      });
      setTimer({
        ...timer,
        time: GAME_TIMES[gameDetails.maxTime -1],
      });
    }
  };

  // increases difficulty
  const incrementDifficulty = () => {
    console.log(DIFFICULTIES.length);
    console.log(gameDetails.difficulty);
    if (gameDetails.difficulty < DIFFICULTIES.length - 1) {
      setGameDetails({
        ...gameDetails,
        difficulty: gameDetails.difficulty + 1,
      });
    }
  };

  // decreases difficulty
  const decrementDifficulty = () => {
    if (gameDetails.difficulty > 0) {
      setGameDetails({
        ...gameDetails,
        difficulty: gameDetails.difficulty - 1,
      });
    }
  };

  // changes the style for the height of the gradient div
  const style = {
    height: currentHeight,
  };

  return (
    <div className={`w-full h-full p-5 select-none`}>
      <div
        ref={containerRef}
        className={`grid grid-cols-3 gap-4 h-full w-full`}
      >
        <div
          className={`flex flex-col items-center justify-between h-full space-y-16 bg-simple-gray-29 lg:p-5 p-2 rounded-lg`}
        >
          <SpinningTimer time={timer.time} started={timer.on} />
          <GameDetails
            clicks={clicks}
            maxClicks={gameDetails.maxClicks}
            difficulty={DIFFICULTIES[gameDetails.difficulty].difficulty}
          />
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
        <div
          className={`flex flex-col flex1 bg-simple-gray-29 rounded-lg p-2 lg:p-5 justify-between space-y-16`}
        >
          <div className={`flex flex-col flex1 space-y-10`}>
            <Incrementer
              color={`blue`}
              text={`Time`}
              value={GAME_TIMES[gameDetails.maxTime]}
              incrementUp={() => incrementTime()}
              incrementDown={() => decrementTime()}
              changable={!timer.on}
            />
            <Incrementer
              color={`blue`}
              text={`Difficulty`}
              value={DIFFICULTIES[gameDetails.difficulty].difficulty}
              incrementUp={() => incrementDifficulty()}
              incrementDown={() => decrementDifficulty()}
              changable={!timer.on}
            />
          </div>
          {timer.on === true ? (
            <div className={`space-y-4 flex flex-col flex1 h-full`}>
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
          difficulty={DIFFICULTIES[gameDetails.difficulty].difficulty}
          difficultyValue={DIFFICULTIES[gameDetails.difficulty].value}
          initTime={GAME_TIMES[gameDetails.maxTime]}
          timeLeft={gameDetails.gameLength}
        ></GameModal>
      </div>
    </div>
  );
};

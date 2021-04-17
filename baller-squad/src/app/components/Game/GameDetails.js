import React from 'react';
import { GameDetail } from './GameDetail';

export const GameDetails = ({clicks, maxClicks, increment}) => {
  return (
    <div className={`w-full h-full flex flex-col-reverse gap-4`}>
      <GameDetail text={`Increment`} value={increment} color={`pink`} />
      <GameDetail text={`Max Clicks`} value={maxClicks} color={`blue`} />
      <GameDetail text={`Clicks`} value={clicks} color={`purple`} />
    </div>
  )
}
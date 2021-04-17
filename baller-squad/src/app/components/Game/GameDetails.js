import React from 'react';
import { GameDetail } from './GameDetail';

export const GameDetails = ({clicks, maxClicks, increment}) => {
  return (
    <div className={`w-full h-full flex flex-col-reverse gap-4`}>
      <GameDetail text={`Increment`} value={increment} color={`pink-400`} />
      <GameDetail text={`Max Clicks`} value={maxClicks} color={`blue-400`} />
      <GameDetail text={`Clicks`} value={clicks} color={`purple-400`} />
    </div>
  )
}
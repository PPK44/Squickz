import React from 'react';
import { GameDetail } from './GameDetail';

export const GameDetails = ({clicks, maxClicks}) => {
  return (
    <div className={`w-full h-full flex flex-col-reverse gap-4`}>
      <GameDetail text={`Max Clicks`} value={maxClicks} color={`blue-500`} />
      <GameDetail text={`Clicks`} value={clicks} color={`purple-500`} />
    </div>
  )
}
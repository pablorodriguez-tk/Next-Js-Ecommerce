import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { GameList } from '../../../interfaces/gamesInterfaces';

interface InfoGame {
  game: GameList;
}

const InfoGame = ({ game }: InfoGame) => {
  return (
    <div className="info-game">
      <ReactPlayer className="info-game__video" url={game.video} controls />
    </div>
  );
};

export default InfoGame;

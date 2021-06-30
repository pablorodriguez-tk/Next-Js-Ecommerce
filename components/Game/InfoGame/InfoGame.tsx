import moment from 'moment';
import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { GameList } from '../../../interfaces/gamesInterfaces';
import CarouselScreenshots from '../CarouselScreenshots';

interface InfoGame {
  game: GameList;
}

const InfoGame = ({ game }: InfoGame) => {
  return (
    <div className="info-game">
      <ReactPlayer className="info-game__video" url={game.video} controls />
      <CarouselScreenshots title={game.title} screenshots={game.screenshots} />
      <div className="info-game__content">
        <div dangerouslySetInnerHTML={{ __html: game.summary }} />
        <div className="info-game__content-date">
          <h4>Release Date:</h4>
          <p>{moment(game.releaseDate).format('LL')}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoGame;

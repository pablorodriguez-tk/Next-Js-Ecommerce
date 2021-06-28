import { map } from 'lodash';
import React from 'react';

const ListGames = ({ games }) => {
  return (
    <div className="game-list">
      {map(games, (game) => (
        <h3>{game.title}</h3>
      ))}
    </div>
  );
};

export default ListGames;

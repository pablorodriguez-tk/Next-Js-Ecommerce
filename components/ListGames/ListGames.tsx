import { map } from 'lodash';
import Link from 'next/link';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { GameList } from '../../interfaces/gamesInterfaces';

interface ListGamesProps {
  games: GameList[];
}

interface ListGameProps {
  game: GameList;
}

const ListGames = ({ games }: ListGamesProps) => {
  return (
    <div className="game-list">
      <Grid>
        <Grid.Row columns={5}>
          {map(games, (game) => (
            <Game game={game} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

const Game = ({ game }: ListGameProps) => {
  return (
    <Grid.Column className="game-list__game">
      <Link href={`/${game.url}`}>
        <a>
          <div className="game-list__game-poster">
            <Image src={game.poster.url} alt={game.title} />
            <div className="game-list__game-poster-info">
              {game.discount ? (
                <span className="discount">-{game.discount}%</span>
              ) : (
                <span></span>
              )}
              <span className="price">${game.price}</span>
            </div>
          </div>
          <h2>{game.title}</h2>
        </a>
      </Link>
    </Grid.Column>
  );
};

export default ListGames;

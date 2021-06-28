import { map } from 'lodash';
import Link from 'next/link';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import useWindowSize from '../../hooks/useWindowSize';
import { GameList } from '../../interfaces/gamesInterfaces';
import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from '../../utils/breakpoint';

interface ListGamesProps {
  games: GameList[] | null;
}

interface ListGameProps {
  game: GameList;
}

const ListGames = ({ games }: ListGamesProps) => {
  const { width } = useWindowSize();

  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpLg:
        return 5;
      case width > breakpointUpMd:
        return 3;
      case width > breakpointUpSm:
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="game-list">
      <Grid>
        <Grid.Row columns={getColumnsRender()}>
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

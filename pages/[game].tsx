import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getGameByUrlApi } from '../api/game';
import { GameList } from '../interfaces/gamesInterfaces';
import BasicLayout from '../layouts/BasicLayout';
import HeaderGame from '../components/Game/HeaderGame';

const Game = () => {
  const { query } = useRouter();
  const [game, setGame] = useState<GameList | null>(null);
  console.log(query.game);

  useEffect(() => {
    (async () => {
      const response = await getGameByUrlApi(query.game);
      setGame(response);
    })();
  }, [query]);

  if (!game) return null;

  return (
    <BasicLayout className="game">
      <HeaderGame game={game} />
      <p>Tabs Game</p>
    </BasicLayout>
  );
};

export default Game;

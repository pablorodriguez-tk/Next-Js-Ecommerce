import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getGameByUrlApi } from '../api/game';
import { GameList } from '../interfaces/gamesInterfaces';
import BasicLayout from '../layouts/BasicLayout';
import HeaderGame from '../components/Game/HeaderGame';
import TabsGame from '../components/Game/TabsGame';

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
      <TabsGame game={game} />
    </BasicLayout>
  );
};

export default Game;

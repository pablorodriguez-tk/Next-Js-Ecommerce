import { size } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { getGamesPlatformApi } from '../../api/game';
import ListGames from '../../components/ListGames';
import { GameList } from '../../interfaces/gamesInterfaces';
import BasicLayout from '../../layouts/BasicLayout';

const limitPerPage = 10;

const Platform = () => {
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<GameList[] | null>(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (query.platform) {
        const response = await getGamesPlatformApi(
          query.platform,
          limitPerPage,
          0
        );
        setGames(response || []);
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <BasicLayout className="platform">
      {isLoading && <Loader active>Loading games</Loader>}
      {!isLoading && size(games) === 0 && <div>There is no games</div>}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
};

export default Platform;

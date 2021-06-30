import { size } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { getGamesPlatformApi, getTotalGamesPlatformApi } from '../../api/game';
import ListGames from '../../components/ListGames';
import Pagination from '../../components/Pagination';
import { GameList } from '../../interfaces/gamesInterfaces';
import BasicLayout from '../../layouts/BasicLayout';

const limitPerPage = 10;

const Platform = () => {
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<GameList[] | null>(null);
  const [totalGames, setTotalGames] = useState(0);

  const getStartItems = () => {
    const currentPages = Number(query.page);

    if (!query.page || currentPages === 1) return 0;
    else return currentPages * limitPerPage - limitPerPage;
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (query.platform) {
        const response = await getGamesPlatformApi(
          query.platform,
          limitPerPage,
          getStartItems()
        );
        setGames(response || []);
        setIsLoading(false);
      }
    })();
  }, [query]);

  useEffect(() => {
    (async () => {
      const response: number = await getTotalGamesPlatformApi(query.platform);
      setTotalGames(response);
    })();
  }, [query]);
  return (
    <BasicLayout className="platform">
      {isLoading && <Loader active>Loading games</Loader>}
      {!isLoading && size(games) === 0 && <div>There is no games</div>}
      {size(games) > 0 && <ListGames games={games} />}

      {totalGames !== 0 && (
        <Pagination
          totalGames={totalGames}
          page={query.page ? Number(query.page) : 1}
          limitPerPage={limitPerPage}
        />
      )}
    </BasicLayout>
  );
};

export default Platform;

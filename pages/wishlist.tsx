import React, { useEffect, useState } from 'react';
import { getFavouriteApi } from '../api/favourite';
import ListGames from '../components/ListGames';
import { useAuth } from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout';
import { Loader } from 'semantic-ui-react';
import { forEach, size } from 'lodash';
import { GameList } from '../interfaces/gamesInterfaces';

const Wishlist = () => {
  const { auth, logout } = useAuth();
  const [games, setGames] = useState<GameList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getFavouriteApi(auth?.idUser, logout);
      if (size(response) > 0) {
        const gameList: GameList[] = [];
        forEach(response, (data) => gameList.push(data.game));
        setGames(gameList);
        setIsLoading(false);
      } else {
        setGames([]);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <BasicLayout className="wishlist">
      <div className="wishlist__block">
        <div className="title">Wishlist</div>
        <div className="data">
          {isLoading && <Loader active>Loading games</Loader>}
          {!isLoading && size(games) === 0 && (
            <div className="data__not-found">
              There is no games on favourite list
            </div>
          )}
          {size(games) > 0 && <ListGames games={games} />}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Wishlist;

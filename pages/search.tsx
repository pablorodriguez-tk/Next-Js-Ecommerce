import { size } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { searchGamesApi } from '../api/game';
import BasicLayout from '../layouts/BasicLayout';
import { GameList } from '../interfaces/gamesInterfaces';
import ListGames from '../components/ListGames';
import { Loader } from 'semantic-ui-react';

const Search = () => {
  const [games, setGames] = useState<GameList[] | null>(null);
  const { query } = useRouter();

  useEffect(() => {
    document.getElementById('search-game').focus();
  }, []);

  useEffect(() => {
    (async () => {
      if (size(query.query) > 0) {
        const response = await searchGamesApi(query.query);
        if (size(response) > 0) setGames(response);
        else setGames([]);
      } else {
        setGames([]);
      }
    })();
  }, [query]);

  return (
    <BasicLayout className="search">
      {!games && <Loader active>Searching games...</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No games found</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
};

export default Search;

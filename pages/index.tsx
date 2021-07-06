import { size } from 'lodash';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { getLastGamesApi } from '../api/game';
import BasicLayout from '../layouts/BasicLayout';
import ListGames from '../components/ListGames/ListGames';
import { GameList } from '../interfaces/gamesInterfaces';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  const [games, setGames] = useState<GameList[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      if (size(response) > 0) {
        setGames(response);
      } else {
        setGames([]);
      }
    })();
  }, []);

  return (
    <div className="home">
      <BasicLayout>
        <Seo />
        {!games && <Loader active>Loading games</Loader>}
        {games && size(games) === 0 && <div>There is no games</div>}
        {size(games) > 0 && <ListGames games={games} />}
      </BasicLayout>
    </div>
  );
};
export default Home;

import React from 'react';
import { Tab } from 'semantic-ui-react';
import { GameList } from '../../../interfaces/gamesInterfaces';
import InfoGame from '../InfoGame';

interface TabsGame {
  game: GameList;
}

const TabsGame = ({ game }: TabsGame) => {
  const panes = [
    {
      menuItem: 'information',
      // eslint-disable-next-line react/display-name
      render: () => (
        <Tab.Pane>
          <InfoGame game={game} />
        </Tab.Pane>
      ),
    },
  ];

  return <Tab className="tabs-game" panes={panes} />;
};

export default TabsGame;

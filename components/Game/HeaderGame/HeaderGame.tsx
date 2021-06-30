import React, { useEffect, useState } from 'react';
import { Grid, Icon, Image, Button } from 'semantic-ui-react';
import { GameList } from '../../../interfaces/gamesInterfaces';

interface HeaderGame {
  game: GameList;
}

const HeaderGame = ({ game }: HeaderGame) => {
  return (
    <Grid className="header-game">
      <Grid.Column mobile={16} tablet={6} computer={5}>
        <p>
          <Image src={game?.poster.url} alt={game?.title} fluid />
        </p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <Info game={game} />
      </Grid.Column>
    </Grid>
  );
};

const Info = ({ game }: HeaderGame) => {
  const { title, summary, price, discount } = game;
  return (
    <>
      <div className="header-game__title">
        {title}
        <Icon name="heart outline" link />
      </div>
      <div className="header-game__delivery">Entrega en 24/48hs</div>
      <div
        className="header-game__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <div className="header-game__buy">
        <div className="header-game__buy-price">
          <p>Precio de venta al publico:${price}</p>
          <div className="header-game__buy-price-actions">
            <p>-{discount}%</p>
            <p>${price - Math.floor(price * discount) / 100}</p>
          </div>
        </div>
        <Button className="header-game__buy-btn">Comprar</Button>
      </div>
    </>
  );
};

export default HeaderGame;

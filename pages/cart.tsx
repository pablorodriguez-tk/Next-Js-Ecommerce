import React, { useEffect, useState } from 'react';
import { getGameByUrlApi } from '../api/game';
import { useCart } from '../hooks/useCart';
import { GameList } from '../interfaces/gamesInterfaces';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';

const Cart = () => {
  const { getProductsCart } = useCart();
  const products = getProductsCart();

  useEffect(() => {}, []);

  return !products ? <EmptyCart /> : <FullCart products={products} />;
};

const EmptyCart = () => {
  return (
    <BasicLayout className="empty-cart">
      <h1>There is no products in the cart</h1>
    </BasicLayout>
  );
};

const FullCart = ({ products }) => {
  const [productsData, setProductsData] = useState<GameList[] | GameList>([]);

  useEffect(() => {
    (async () => {
      const productsTemp: GameList[] | GameList = [];
      for await (const product of products) {
        const data: GameList | null = await getGameByUrlApi(product);

        if (data !== null) {
          productsTemp.push(data);
          setProductsData(productsTemp);
        }
      }
    })();
  }, []);

  return (
    <BasicLayout className="full-cart">
      <h1>{products}</h1>
    </BasicLayout>
  );
};

export default Cart;

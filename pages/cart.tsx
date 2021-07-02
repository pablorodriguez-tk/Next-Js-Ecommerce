import React, { useEffect, useState } from 'react';
import { getGameByUrlApi } from '../api/game';
import SummaryCart from '../components/Cart/SummaryCart';
import { useCart } from '../hooks/useCart';
import { GameList } from '../interfaces/gamesInterfaces';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';

const Cart = () => {
  const { getProductsCart } = useCart();
  const products = getProductsCart();

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
  const [reloadCart, setReloadCart] = useState(false);

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
    setReloadCart(false);
  }, [reloadCart]);

  return (
    <BasicLayout className="full-cart">
      <SummaryCart
        products={productsData}
        setReloadCart={setReloadCart}
        reloadCart={reloadCart}
      />
    </BasicLayout>
  );
};

export default Cart;

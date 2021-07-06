import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { getOrdersApi } from '../api/order';
import { useAuth } from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout';
import Order from '../components/Orders/Order/Order';
import Seo from '../components/Seo';

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getOrdersApi(auth?.idUser, logout);
      setOrders(response || []);
    })();
  }, []);
  return (
    <BasicLayout>
      <Seo title="My Orders" description="List of all your orders" />
      <div className="orders__block">
        <div className="title">My orders</div>
        <div className="data">
          {size(orders) === 0 ? (
            <h2 style={{ textAlign: 'center' }}>
              You have not made any purchase yet
            </h2>
          ) : (
            <OrderList orders={orders} />
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

const OrderList = ({ orders }) => {
  return (
    <Grid>
      {map(orders, (order) => (
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Order order={order} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Orders;

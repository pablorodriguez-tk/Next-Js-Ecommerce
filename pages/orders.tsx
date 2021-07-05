import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { getOrdersApi } from '../api/order';
import { useAuth } from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout';

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
      <div className="orders__block">
        <div className="title">My orders</div>
        <div className="data">
          <p>Order List</p>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Orders;

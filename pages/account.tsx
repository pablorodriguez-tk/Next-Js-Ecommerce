import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { getMeApi } from '../api/user';
import { useAuth } from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout';

const Account = () => {
  const router = useRouter();
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) {
    return null;
  }

  if (!auth && !user) {
    router.replace('/');
    return null;
  }

  return (
    <BasicLayout className="account">
      <Configuration />
    </BasicLayout>
  );
};

const Configuration = () => {
  return (
    <div className="account__configuration">
      <div className="title">Configuration</div>
      <div className="data">Configuration Form</div>
    </div>
  );
};

export default Account;

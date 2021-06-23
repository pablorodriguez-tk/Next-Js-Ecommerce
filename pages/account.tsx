import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { getMeApi } from '../api/user';
import ChangeNameForm from '../components/Account/ChangeNameForm';
import { useAuth } from '../hooks/useAuth';
import { ResponseGetMeAPI } from '../interfaces/interfaces';
import BasicLayout from '../layouts/BasicLayout';

const Account = () => {
  const router = useRouter();
  const [user, setUser] = useState<ResponseGetMeAPI | null | undefined>(
    undefined
  );
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
      <Configuration user={user} />
    </BasicLayout>
  );
};

interface ConfigurationProps {
  user: User;
}

const Configuration = ({ user }: ConfigurationProps) => {
  return (
    <div className="account__configuration">
      <div className="title">Configuration</div>
      <div className="data">
        <ChangeNameForm user={user} />
      </div>
    </div>
  );
};

export default Account;

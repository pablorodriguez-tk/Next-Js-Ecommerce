import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { getMeApi } from '../api/user';
import ChangeEmailForm from '../components/Account/ChangeEmailForm';
import ChangeNameForm from '../components/Account/ChangeNameForm';
import { useAuth } from '../hooks/useAuth';
import { ResponseGetMeAPI, User } from '../interfaces/interfaces';
import BasicLayout from '../layouts/BasicLayout';

const Account = () => {
  const router = useRouter();
  const [user, setUser] = useState<ResponseGetMeAPI | null | undefined>(
    undefined
  );
  const { auth, logout, setReloadUser } = useAuth();

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
      <Configuration
        user={user!}
        logout={logout}
        setReloadUser={setReloadUser}
      />
    </BasicLayout>
  );
};

export interface ConfigurationProps {
  user: User;
  logout: () => void;
  setReloadUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const Configuration = ({ user, logout, setReloadUser }: ConfigurationProps) => {
  return (
    <div className="account__configuration">
      <div className="title">Configuration</div>
      <div className="data">
        <ChangeNameForm
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
        <ChangeEmailForm
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
      </div>
    </div>
  );
};

export default Account;

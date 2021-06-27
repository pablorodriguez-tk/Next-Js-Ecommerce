import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { getMeApi } from '../api/user';
import ChangeEmailForm from '../components/Account/ChangeEmailForm';
import ChangeNameForm from '../components/Account/ChangeNameForm';
import ChangePasswordForm from '../components/Account/ChangePasswordForm';
import { useAuth } from '../hooks/useAuth';
import { ResponseGetMeAPI, User } from '../interfaces/interfaces';
import BasicLayout from '../layouts/BasicLayout';
import { Icon } from 'semantic-ui-react';
import BasicModal from '../components/Modal/BasicModal';
import AddressForm from '../components/Account/AddressForm';
import ListAddress from '../components/Account/ListAddress/ListAddress';

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
      <Addresses />
    </BasicLayout>
  );
};

export interface ConfigurationProps {
  user: User;
  logout: () => void;
  setReloadUser?: React.Dispatch<React.SetStateAction<boolean>>;
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
        <ChangePasswordForm user={user} logout={logout} />
      </div>
    </div>
  );
};

const Addresses = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');
  const [formModal, setFormModal] = useState<JSX.Element | null>(null);
  const [reloadAddresses, setReloadAddresses] = useState<boolean>(false);

  const openModal = (title: string) => {
    setTitleModal(title);
    setFormModal(
      <AddressForm
        setShowModal={setShowModal}
        setReloadAddresses={setReloadAddresses}
      />
    );
    setShowModal(true);
  };

  return (
    <div className="account__addresses">
      <div className="title">
        Addresses
        <Icon name="plus" link onClick={() => openModal('New Address')} />
      </div>
      <div className="data">
        <ListAddress
          reloadAddresses={reloadAddresses}
          setReloadAddresses={setReloadAddresses}
        />
      </div>
      <BasicModal title={titleModal} setShow={setShowModal} show={showModal}>
        {formModal}
      </BasicModal>
    </div>
  );
};

export default Account;

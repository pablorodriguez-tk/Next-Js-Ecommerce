import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';
import Link from 'next/link';
import BasicModal from '../../Modal/BasicModal/BasicModal';
import { useEffect, useState } from 'react';
import Auth from '../../Auth';
import { useAuth } from '../../../hooks/useAuth';
import { getMeApi } from '../../../api/user';

interface MenuOptionsProps {
  onShowModal: () => void;
  user: any;
  logout: () => void;
}

const MenuWeb: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Login');
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlataforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            {user !== undefined && (
              <MenuOptions
                onShowModal={onShowModal}
                user={user}
                logout={logout}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={modalTitle}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setModalTitle={setModalTitle} />
      </BasicModal>
    </div>
  );
};

const MenuPlataforms: React.FC = () => {
  return (
    <Menu>
      <Link href="/playstation">
        <Menu.Item as="a">Playstation</Menu.Item>
      </Link>
      <Link href="/xbox">
        <Menu.Item as="a">Xbox</Menu.Item>
      </Link>
      <Link href="/switch">
        <Menu.Item as="a">Switch</Menu.Item>
      </Link>
    </Menu>
  );
};

const MenuOptions: React.FC<MenuOptionsProps> = ({
  onShowModal,
  user,
  logout,
}) => {
  return (
    <Menu>
      {user ? (
        <>
          <Link href="/orders">
            <Menu.Item as="a">
              <Icon name="game" />
              My orders
            </Menu.Item>
          </Link>
          <Link href="/whislist">
            <Menu.Item as="a">
              <Icon name="heart outline" />
              Whislist
            </Menu.Item>
          </Link>
          <Link href="/account">
            <Menu.Item as="a">
              <Icon name="user outline" />
              {user.name} {user.lastname}
            </Menu.Item>
          </Link>
          <Link href="/cart">
            <Menu.Item as="a">
              <Icon name="cart" />
              Cart
            </Menu.Item>
          </Link>
          <Menu.Item onClick={logout}>
            <Icon name="power off" />
            Logout
          </Menu.Item>
        </>
      ) : (
        <Menu.Item onClick={onShowModal}>
          <Icon name="user outline" />
          Account
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MenuWeb;

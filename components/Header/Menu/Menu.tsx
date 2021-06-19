import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';
import Link from 'next/link';
import BasicModal from '../../Modal/BasicModal/BasicModal';
import { useState } from 'react';
import Auth from '../../Auth';

interface MenuOptionsProps {
  onShowModal: () => void;
}

const MenuWeb: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Login');

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlataforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions onShowModal={onShowModal} />
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

const MenuOptions: React.FC<MenuOptionsProps> = ({ onShowModal }) => {
  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name="user outline" />
        Account
      </Menu.Item>
    </Menu>
  );
};

export default MenuWeb;

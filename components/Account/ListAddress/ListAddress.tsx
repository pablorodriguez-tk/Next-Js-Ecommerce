import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { deleteAddressesApi, getAddressesApi } from '../../../api/address';
import { useAuth } from '../../../hooks/useAuth';
import { AddressResponse } from '../../../interfaces/interfaces';

interface AdressListProps {
  reloadAddresses: boolean;
  setReloadAddresses: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (title: string) => void;
}

const ListAddress = ({
  reloadAddresses,
  setReloadAddresses,
  openModal,
}: AdressListProps) => {
  const [addresses, setAddresses] = useState<AddressResponse[]>([]);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getAddressesApi(auth?.idUser!, logout);
      setAddresses(response || []);
      setReloadAddresses(false);
    })();
  }, [reloadAddresses]);

  if (addresses.length === 0) return null;

  return (
    <div className="list-address">
      {size(addresses) === 0 ? (
        <h3>No address</h3>
      ) : (
        <Grid>
          {map(addresses, (ad) => (
            <Grid.Column key={ad.id} mobile={16} tablet={8} computer={4}>
              <Address
                address={ad}
                logout={logout}
                setReloadAddresses={setReloadAddresses}
                openModal={openModal}
              />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </div>
  );
};

interface AddressProps {
  address: AddressResponse;
  logout: () => void;
  setReloadAddresses: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (title: string) => void;
}

const Address = ({
  address,
  logout,
  setReloadAddresses,
  openModal,
}: AddressProps) => {
  const [loadingDelete, setLoadingDelete] = useState(false);

  const deleteAddress = async () => {
    setLoadingDelete(true);
    const response = await deleteAddressesApi(address.id, logout);
    if (response) {
      setReloadAddresses(true);
    }
    setLoadingDelete(false);
  };

  return (
    <div className="address">
      <p>{address.title}</p>
      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>
        {address.state}, {address.city}, {address.postalCode}
      </p>
      <p>{address.phone}</p>
      <div className="actions">
        <Button
          primary
          onClick={() => openModal(`Edit ${address.title}`, address)}
        >
          Edit
        </Button>
        <Button onClick={deleteAddress} loading={loadingDelete}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ListAddress;

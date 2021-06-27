import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { getAddressesApi } from '../../../api/address';
import { useAuth } from '../../../hooks/useAuth';
import {
  AddressListProps,
  AddressResponse,
} from '../../../interfaces/interfaces';

interface AdressListProps {
  reloadAddresses: boolean;
  setReloadAddresses: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListAddress = ({
  reloadAddresses,
  setReloadAddresses,
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
              <Address address={ad} />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </div>
  );
};

const Address = (props: AddressListProps) => {
  const { address } = props;

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
        <Button primary>Edit</Button>
        <Button>Remove</Button>
      </div>
    </div>
  );
};

export default ListAddress;

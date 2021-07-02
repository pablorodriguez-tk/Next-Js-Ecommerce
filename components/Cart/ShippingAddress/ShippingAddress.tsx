import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import { getAddressesApi } from '../../../api/address';
import { useAuth } from '../../../hooks/useAuth';
import Link from 'next/link';
import { GridColumn, Grid } from 'semantic-ui-react';
import classNames from 'classnames';

const ShippingAddress = ({ setAddress }) => {
  const [addresses, setAddresses] = useState(null);
  const [addressActive, setAddressActive] = useState(null);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getAddressesApi(auth?.idUser, logout);
      setAddresses(response || []);
    })();
  }, []);

  return (
    <div className="shipping-address">
      <div className="title">Shipping Address</div>
      <div className="data">
        {size(addresses) === 0 ? (
          <h3>
            There is no address
            <Link href="/account">
              <a>Add your first address</a>
            </Link>
          </h3>
        ) : (
          <Grid>
            {map(addresses, (address) => (
              <Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
                <Address
                  address={address}
                  addressActive={addressActive}
                  setAddressActive={setAddressActive}
                  setAddress={setAddress}
                />
              </Grid.Column>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

const Address = ({ address, addressActive, setAddressActive, setAddress }) => {
  const changeAddress = () => {
    setAddressActive(address._id);
    setAddress(address);
  };

  return (
    <div
      className={classNames('address', {
        active: addressActive === address._id,
      })}
      onClick={changeAddress}
    >
      <p>{address.title}</p>
      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>
        {address.city},{address.state} {address.postalCode}
      </p>
      <p>{address.phone}</p>
    </div>
  );
};

export default ShippingAddress;

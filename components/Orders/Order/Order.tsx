import moment from 'moment';
import Link from 'next/link';
import React, { useState } from 'react';
import { Icon, Image } from 'semantic-ui-react';
import BasicModal from '../../Modal/BasicModal';

const Order = ({ order }) => {
  const { game, totalPayment, createdAt, ShippingAddress } = order;
  const { title, poster, url } = game;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="order">
        <div className="order__info">
          <div className="order__info-data">
            <Link href={`/${url}`}>
              <a>
                <Image src={poster.url} alt={title} />
              </a>
            </Link>
            <div>
              <h2>{title}</h2>
              <p>${totalPayment}</p>
            </div>
          </div>
          <div className="order__other">
            <p className="order__other-date">
              {moment(createdAt).format('L')} - {moment(createdAt).format('LT')}
            </p>
            <Icon name="eye" circular link onClick={() => setShowModal(true)} />
          </div>
        </div>
      </div>
      <AddressModal
        showModal={showModal}
        setShowModal={setShowModal}
        shippingAddress={ShippingAddress}
        title={title}
      />
    </>
  );
};

const AddressModal = ({ showModal, setShowModal, shippingAddress, title }) => {
  return (
    <BasicModal
      title={title}
      show={showModal}
      setShow={setShowModal}
      size="tiny"
    >
      <h3>The order has been sent to the following address</h3>
      <p>{shippingAddress.name}</p>
      <p>{shippingAddress.address}</p>
      <p>
        {shippingAddress.state}, {shippingAddress.city}{' '}
        {shippingAddress.postalCode}
      </p>
      <p>{shippingAddress.phone}</p>
    </BasicModal>
  );
};

export default Order;

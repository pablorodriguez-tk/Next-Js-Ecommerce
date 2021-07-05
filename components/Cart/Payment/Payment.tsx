import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { STRIPE_TOKEN } from '../../../utils/constants';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(STRIPE_TOKEN);

const Payment = ({ products, address }) => {
  return (
    <div className="payment">
      <div className="title">Payment</div>
      <div className="data">
        <Elements stripe={stripePromise}>
          <PaymentForm products={products} address={address} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { STRIPE_TOKEN } from '../../../utils/constants';

const stripePromise = loadStripe(STRIPE_TOKEN);

const Payment = ({ products, address }) => {
  return (
    <div className="payment">
      <div className="title">Payment</div>
      <div className="data">
        <Elements stripe={stripePromise}>
          <p>Payment Form</p>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

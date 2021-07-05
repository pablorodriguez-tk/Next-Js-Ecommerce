import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { size } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import { useAuth } from '../../../../hooks/useAuth';
import { useCart } from '../../../../hooks/useCart';

const PaymentForm = ({ products, address }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Realizando pago');
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit">Pagar</Button>
    </form>
  );
};

export default PaymentForm;

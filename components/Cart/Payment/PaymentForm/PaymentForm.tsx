import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { size } from 'lodash';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import { paymentCardApi } from '../../../../api/cart';
import { useAuth } from '../../../../hooks/useAuth';
import { useCart } from '../../../../hooks/useCart';

const PaymentForm = ({ products, address }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { auth, logout } = useAuth();
  const { removeAllProductsCart } = useCart();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement);

    if (stripeResponse.error) {
      toast.error(stripeResponse.error.message);
    } else {
      const response = await paymentCardApi(
        stripeResponse.token,
        products,
        auth?.idUser,
        address,
        logout
      );

      if (size(response) > 0) {
        console.log(response);
        toast.success('order completed');
        removeAllProductsCart();
        router.push('/orders');
      } else {
        console.log(response);
        toast.error('an error occurred while ordering');
      }
    }

    setLoading(false);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" loading={loading} disabled={!stripe}>
        Pagar
      </Button>
    </form>
  );
};

export default PaymentForm;

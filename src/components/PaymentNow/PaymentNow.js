import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentFrom from './PaymentFrom';

const stripePromise = loadStripe('pk_test_51IeBp1FZaEpTxceHFE0DNTLocaHL6ob7eyWRyilfqYzSqz7MMSooEIQrOSra5e22bbwwXbfJHCtbqBbZtLzPGyQd00Xlvr0O8Q');
const PaymentNow = ({handlePaymentSuccessFull}) => {
  return (
    <div>
       <Elements stripe={stripePromise}>
       <PaymentFrom handlePaymentSuccessFull={handlePaymentSuccessFull} ></PaymentFrom>
      </Elements>
    </div>
  );
};

export default PaymentNow;
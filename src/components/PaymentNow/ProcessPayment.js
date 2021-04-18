import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeBp1FZaEpTxceHFE0DNTLocaHL6ob7eyWRyilfqYzSqz7MMSooEIQrOSra5e22bbwwXbfJHCtbqBbZtLzPGyQd00Xlvr0O8Q');

const ProcessPayment = ({handlePayment} ) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IiC4dBcz5mFospna833CDPtWo1uzamXo5MfJWUwvwHZylLu08MQhsSfubaA7dJLWNQscDitSvjFus4ONUA15YkT00M0DPiVZa';

    const onToken = token =>{
    console.log(token);
    alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Apparel'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    )
};

export default StripeCheckoutButton; 
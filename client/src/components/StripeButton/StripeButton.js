import React from 'react';
import './StripeButton.styles.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 //stripe needs to get the price value in cents
    const publishableKey = 'pk_test_TMArZFc4pE55DY2WlTMYNqZl00b9DDz4ua';

    const onToken = token => {
        const url = 'http://localhost:8000/payment';
        console.log(token); //carries info about the payment to stripe
        axios({
            url: 'http://localhost:8000/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(res => {
            alert('Payment Successful')
        })
        .catch(error => {
            console.log(error)
            alert('There was an issue with your payment')
        })
    
    }
    return (
        //from stipe docs we can choose whatever features to include here as props
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing LTD.'
            billingAddress
            shippingAddress
            image =''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}
export default StripeCheckoutButton;
import React from 'react';
import './StripeButton.styles.scss';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 //stripe needs to get the price value in cents
    const publishableKey = 'pk_test_Uv2WNYGHsgq7vXy7n40tTEn800RtkKKA7l'

    const onToken = token => {
        console.log(token); //normally it would be passed in auth to backend
        alert('Payment Successful')
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
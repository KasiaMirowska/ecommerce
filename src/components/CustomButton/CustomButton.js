import React from 'react';
import './CustomButton.styles.scss';


export default function CustomButton({children, isGoogleSignedIn, ...otherProps}) {
    //conditionally rendering a button class based on a prop for google signIn...if google? then it has a google class , if not then nothing plus always custom-button class...
    console.log(isGoogleSignedIn)

    return (
        <button className={`${isGoogleSignedIn? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
import React from 'react';
//import './CustomButton.styles.scss';
import {CustomButtonContaner} from './CustomButton.styles';

// export default function CustomButton({children, isGoogleSignedIn, invertedColor, ...otherProps}) {
//     //conditionally rendering a button class based on a prop for google signIn...if google? then it has a google class , if not then nothing plus always custom-button class...

//     return (
//         <button className={`${isGoogleSignedIn? 'google-sign-in' : ''} ${invertedColor? 'invertedColor' : ''} custom-button`} {...otherProps}>
//             {children}
//         </button>
//     )
// }


export default function CustomButton(props) {
    //after creating styled component this becomes simpler then above - we put rendering conditionals into the styled component

    return (
        <CustomButtonContaner {...props} >
            {props.children}
        </CustomButtonContaner>
    )
}
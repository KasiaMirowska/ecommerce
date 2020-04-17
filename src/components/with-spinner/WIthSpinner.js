import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

//higher order component
const WithSpinner = WrappedComponent => {
    const spinner = ({ isLoadding, ...otherProps }) => {
        return isLoadding ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
            :
            (
                <WrappedComponent  {...otherProps} />
            )
    }
    return spinner;
}
export default WithSpinner;
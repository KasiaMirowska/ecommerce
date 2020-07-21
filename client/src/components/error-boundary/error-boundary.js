import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

export default class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false,
        }
    }

    //this static catches any error thrown by any children of ErrorBoundary component
    static getDerivedStateFromError(error) {
        //process error by returning some object that will set the state in this class
        return { hasErrored: true }
    }
    //second lifecycle method of error boundary is:
    componentDidCatch(error, info) {
        console.log(error, info)
    }


    render() {
        if (this.state.hasErrored === true) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/oCkEbrA.png' />
                    <ErrorImageText>Sorrty thid page is has been temporarly blown away</ErrorImageText>
                
                </ErrorImageOverlay>
            )
        } else {
            return this.props.children
        }
    }
}
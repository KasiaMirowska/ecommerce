import React from 'react';
import Directory from '../../components/directory/Directory';
import {HomePageContainer} from './HomePage.styles';


const HomePage =()=> {
    //throw Error; //to test error boundaries
    return <HomePageContainer>
        <Directory />
     </HomePageContainer>
}

export default HomePage;
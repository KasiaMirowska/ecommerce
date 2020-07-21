import React, { Profiler } from 'react';
import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePage.styles';


const HomePage = () => {
    //throw Error; //to test error boundaries
    return <HomePageContainer>
        <Profiler //for testing the performace of sections of the app
            id='directory'
            onRender={(id, phase, actualDuration) => {
                console.log({
                    id,
                    phase,
                    actualDuration,
                })
            }}>
            <Directory />
        </Profiler>
    </HomePageContainer>
}

export default HomePage;
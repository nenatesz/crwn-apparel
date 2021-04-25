import React from 'react';
import {HomepageContainer} from './homepage.styles'

// import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'


const HomePage =  () => (
    <HomepageContainer>
        <Directory />
    </HomepageContainer>
);

export default HomePage;
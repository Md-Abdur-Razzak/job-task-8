import React from 'react';
import Banner from './Banner';
import FooterSection from './FooterSection';
import Contack from './Contack';
import Services from './services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contack></Contack>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;
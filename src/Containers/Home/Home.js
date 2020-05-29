import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Food from '../../Components/Food/Food';
import WhyUs from '../../Components/WhyUs/WhyUs';

const Home = (props) => {
    return (
        <div>
            <Hero/>
            <Food cart={props.cart}/>
            <WhyUs/>
        </div>
    );
};

export default Home;
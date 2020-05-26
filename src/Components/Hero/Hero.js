import React from 'react';
import './Hero.css';
import banner from '../../Image/rsz_bannerbackground.png';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={banner} alt="banner" className='img-fluid' />
            <div className='action'>
                <h1 >
                    Best Food waiting for your belly
                </h1>
            </div>
        </div>
    );
};

export default Hero;
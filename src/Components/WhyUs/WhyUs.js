import React, { useState, useEffect } from 'react';
import './WhyUs.css';
import {whyUS} from '../../data/food';
import WhyDetail from './WhyDetail';

const WhyUs = (props) => {
    const [why, setWhy] = useState([]);
    useEffect(()=>{
        setWhy(whyUS)
    },[])
    return (
        <div className='container why-container mt-4'>
            <div >
                <h3>Why choose us</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, beatae. <br/> Dolore labore esse earum deleniti, eius quod asperiores molestias ut?</p>
            </div>
            <div className="row">
                {why.map(x=>(
                    <WhyDetail whyUS={x} key={x.id}/>
                ) )}        
            </div>
        </div>
    );
};

export default WhyUs;
import React, { useState, useEffect } from 'react';
import { food } from '../../data/food';
import SingleFood from '../SingleFood/SingleFood';
// import image from '../../Image/Breakfast/breakfast1.png'

const Food = () => {
    const [foods, setFoods] = useState(['breakfast']);
    useEffect(()=>{
        let data = food;
        const data2 = data.filter(x=> x.foodCategory === foods.toString() );
        setFoods(data2);
    },[])
    // foodImage
    return (
        <div>
            {/* <img src={require('../../Image/Breakfast/breakfast1.png')} alt=""/> */}
            <div className="container">
                <div className="row">
                {foods.map(x=>(
                <SingleFood food={x} key={x.id} />
            ))}
                </div>
            </div>
        </div>
    );
};

export default Food;
import React, { useEffect, useState } from "react";
import './Details.css';
import { food } from "../../data/food";
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const {foodID} = useParams() ;
  const [foodDescription, setFoodDescription] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    // const foodID = props.match.params.id;
    const foodDetails = food.find((x) => x.id === parseInt(foodID));
    setFoodDescription(foodDetails);
  }, [foodID]);

  const handleClick =()=>{
    foodDescription.quantity = count
    props.handleCart(foodDescription);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6  d-flex justify-content-center align-items-center ">
          <div className='left p-5'>
            <h2><b>{foodDescription.foodTitle}</b></h2>
            <p>{foodDescription.foodDescription}</p>
            
            <div className="d-flex my-4">
            <h3 >${foodDescription.price}</h3>
              <div className="cart ml-3 btn">
                <button
                  className="btn"
                  onClick={()=> {if(count > 0){
                      setCount(count-1)
                  }}}
                >
                  -
                </button>
                    <button className="btn">{count}</button>
                <button
                  className="btn"
                  onClick ={()=>setCount(count+1) }
                >
                  +
                </button>
              </div> 
            </div>
            <button onClick={handleClick} className="cart btn add mt-2">
             <span><img src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-32.png" alt="icon"/></span> Add</button>
          </div>
        </div>
        <div className="col-md-6 p-4">
          {foodDescription.foodImage && (
            <img
              className="img-fluid"
              src={require(`../../Image/${foodDescription.foodImage}`)}
              alt="d"
            />
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Details;

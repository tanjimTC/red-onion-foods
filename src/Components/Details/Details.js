import React, { useEffect, useState } from "react";
import './Details.css';
import { food } from "../../data/food";

const Details = (props) => {
  console.log(props);
  const [foodDescription, setFoodDescription] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const foodID = props.match.params.id;
    const foodDetails = food.find((x) => x.id === parseInt(foodID));
    console.log(foodDetails.price);
    setFoodDescription(foodDetails);
  }, [props.match.params.id]);
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

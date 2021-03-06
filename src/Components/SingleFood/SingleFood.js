import React from "react";
import "./SingleFood.css";
import { Link } from "react-router-dom";

const SingleFood = (props) => {
  const { id , foodTitle, foodImage, slug, price } = props.food;
  return (
    <div className="col-md-4 text-center ">
      <Link to={`/details/${id}`} style={{textDecoration:'none'}}>
      <div className='card'>
      <div>
        {foodImage && (
          <img
            className="img-fluid card-image-top"
            // src={require(`../../Image/${foodImage}`)}
            src={foodImage}
            alt="d"
          />
        )}
      </div>
      <div className="card-body">
          <p style={{color : 'black' , fontSize :'20px'}}>{foodTitle}</p>
          <p style={{color : '#6a6a6a'}}><small>{slug}</small></p>
          <p style={{marginBottom : '0px' , color :'#f91944'}} ><b>${price}</b></p>
      </div>
      </div>
      </Link>
    </div>
  );
};

export default SingleFood;

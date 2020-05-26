import React from "react";

const SingleFood = (props) => {
  console.log(props.food);
  const { foodTitle , foodImage } = props.food;
  console.log(foodImage);
  return (

    <div className="col-md-4">
        <img src={require('../../Image/Breakfast/breakfast1.png')} alt=""/>
      <p>
          {foodTitle}
      </p>
      <div>
          <img src={require(`../../Image/${foodImage}`)} alt='d'/>
          
      </div>
    </div>
  );
};

export default SingleFood;

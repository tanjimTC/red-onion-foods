import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const { foodID } = useParams();
  const [foodDescription, setFoodDescription] = useState([]);
  const [count, setCount] = useState(1);
  const [successMsg, setSuccessMsg] = useState(false);
  useEffect(() => {
    fetch('https://tranquil-ridge-31876.herokuapp.com/foods')
    .then(res=>res.json())
    .then(data =>{
      const foodDetails = data.find((x) => x.id === parseInt(foodID));
      setFoodDescription(foodDetails);
      window.scrollTo(0, 0);
    })
  }, [foodID]);

  const handleClick = () => {
    foodDescription.quantity = count;
    props.handleCart(foodDescription);
    setSuccessMsg(true);
  };

  if (successMsg) {
    setTimeout(() => setSuccessMsg(true), 1500);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6  d-flex justify-content-center align-items-center ">
          <div className="left p-5">
            <h2 className='text-left'>
              <b>{foodDescription.foodTitle}</b>
            </h2>
            <p>{foodDescription.foodDescription}</p>

            <div className="d-flex my-4">
              <h3>${foodDescription.price}</h3>
              <div className="cart ml-3 btn">
                <button
                  className="btn"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <button className="btn">{count}</button>
                <button className="btn" onClick={() => setCount(count + 1)}>
                  +
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button onClick={handleClick} className="cart btn add mt-2">
                <span>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-32.png"
                    alt="add"
                  />
                </span>{" "}
                Add
              </button>
              {successMsg && (
                <p
                  style={{ color: "#fff" }}
                  className="ml-3 p-2 success-msg bg-success"
                >
                  <span>
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/healthy-17/64/eat-eating-food-32.png"
                      alt="added"
                    />
                  </span>{" "}
                  Items Added To Cart!
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 p-4">
          {foodDescription.foodImage && (
            <img
              className="img-fluid"
              src={foodDescription.foodImage}
              alt="foodImage"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;

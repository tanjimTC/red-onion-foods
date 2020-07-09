import React, { useState, useEffect } from "react";
import SingleFood from "../SingleFood/SingleFood";
import "./Food.css";
import { Link } from "react-router-dom";

const Food = (props) => {
  const [selectedFood, setSelectedFood] = useState("lunch");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('https://tranquil-ridge-31876.herokuapp.com/foods')
    .then(res=> res.json())
    .then(data=> {
      const data2 = data.filter(
        (x) =>
          x.foodCategory.toLowerCase() === selectedFood.toString().toLowerCase()
      );
      setFoods(data2);
    });
  }, [selectedFood]);
  return (
    <div className="container mt-5">
      <nav className="mb-5">
        <ul className="nav justify-content-center">
          <li
            onClick={() => {
              setSelectedFood("breakfast");
            }}
            className="nav-item"
          >
            <span
              to="breakfast"
              className={
                selectedFood.toLowerCase() === "breakfast"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Breakfast
            </span>
          </li>
          <li
            onClick={() => {
              setSelectedFood("lunch");
            }}
            className="nav-item"
          >
            <span
              to="lunch"
              className={
                selectedFood.toLowerCase() === "lunch"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Lunch
            </span>
          </li>
          <li
            onClick={() => {
              setSelectedFood("dinner");
            }}
            className="nav-item"
          >
            <span
              to="dinner"
              className={
                selectedFood.toLowerCase() === "dinner"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Dinner
            </span>
          </li>
        </ul>
      </nav>
      <div className="row">
        {foods.map((x) => (
          <SingleFood food={x} key={x.id} />
        ))}
      </div>
      <div className="col-md-12 cart-review">
        {props.cart.length ? (
          <center>
            <Link to='/cart-details'>
            <button className="btn  review-button my-3">
              Review your cart
            </button>
            </Link>
          </center>
        ) : (
          <center>
            
            <button className="btn disabled review-button my-3">
              Review your cart
            </button>
          </center>
        )}
      </div>
    </div>
  );
};

export default Food;

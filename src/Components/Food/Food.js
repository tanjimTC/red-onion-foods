import React, { useState, useEffect } from "react";
import { food } from "../../data/food";
import SingleFood from "../SingleFood/SingleFood";
import './Food.css'

const Food = () => {
  const [selectedFood, setSelectedFood] = useState("lunch");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    let data = food;
    const data2 = data.filter(
      (x) => x.foodCategory.toLowerCase() === selectedFood.toString().toLowerCase()
    );
    setFoods(data2);
  }, [selectedFood]);
  return (
    <div>
      <div className="container mt-5">
        <nav className='mb-5'>
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
                  selectedFood.toLowerCase() === "breakfast" ? "nav-link active" : "nav-link"
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
                  selectedFood.toLowerCase() === "lunch" ? "nav-link active" : "nav-link"
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
                  selectedFood.toLowerCase() === "dinner" ? "nav-link active" : "nav-link"
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
      </div>
    </div>
  );
};

export default Food;

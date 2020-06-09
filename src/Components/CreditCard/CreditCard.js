import React, { useState } from "react";
import Cards from "react-credit-cards";
import { useForm } from "react-hook-form";
import "./CreditCard.css";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";

const CreditCard = () => {
  const { register, handleSubmit, errors } = useForm();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <h2 className="mt-5" style={{ color: "#F91944" }}>
        <center>Pay here to confirm order</center>
      </h2>
      <div className="container credit-card-container">
        <div className="row d-flex align-items-center justify-content-around">
          <div className="mb-5">
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>
          <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text  text-white">
                  <i className="far fa-id-badge"></i>
                </span>
              </div>
              <input
                type="tel"
                name="number"
                ref={register({ required: true })}
                placeholder="Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            {errors.number ? (
              <span className="error">This Option is required</span>
            ) : (
              <span className="none">none</span>
            )}
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text  text-white">
                  <i className="far fa-id-badge"></i>
                </span>
              </div>
              <input
                type="text"
                name="name"
                ref={register({ required: true })}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            {errors.name ? (
              <span className="error">This Option is required</span>
            ) : (
              <span className="none">none</span>
            )}
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text  text-white">
                  <i className="fas fa-calendar-alt"></i>
                </span>
              </div>
              <input
                type="text"
                name="expiry"
                ref={register({ required: true })}
                placeholder="MM/YY Expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            {errors.expiry ? (
              <span className="error">This Option is required</span>
            ) : (
              <span className="none">none</span>
            )}
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text  text-white">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                ref={register({ required: true })}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            {errors.cvc ? (
              <span className="error">This Option is required</span>
            ) : (
              <span className="none">none</span>
            )}
            <Link
              to="/place-order"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button type="submit" className="review-button btn btn-block">
                Pay
              </button>
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreditCard;

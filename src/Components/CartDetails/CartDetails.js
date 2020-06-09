import React from "react";
import "./CartDetails.css";
import { Link } from "react-router-dom";
import Auth from "../SignUp/useAuth";
const CartDetails = (props) => {
  const auth = Auth();
  const Orders = props.cart;
  return (
    <div>
      {props.cart.length?(
      <div className="cart-container container mb-4">
      <div className="mb-5 cart-review-top d-flex justify-content justify-content-between align-items-center">
        <h3 className="">Cart Review</h3>
        <button onClick={props.resetCart} className="btn cart-review-top-btn">
          <img
            className="img-fluid mr-1"
            src="https://cdn0.iconfinder.com/data/icons/outlined-buttons-pack/200/signs_alert-32.png"
            alt=""
          />
          Reset cart
        </button>
      </div>
      <div className="row ">
        {Orders.map((x) => (
          <div key={x.id} className="col-md-4 ">
            <div className="cartDetails d-flex">
              <div className="cart-box ">
                {x.foodImage && (
                  <img
                    className="img-fluid p-3"
                    src={require(`../../Image/${x.foodImage}`)}
                    alt="d"
                  />
                )}
              </div>
              <div className=" cart-box p-3">
                <h6>{x.foodTitle}</h6>
                <button
                  onClick={() => {
                    props.removeFromCart(x.id, x.quantity - 1);
                  }}
                  className="cart-button btn"
                >
                  -
                </button>
                {x.quantity}
                <button
                  onClick={() => {
                    props.removeFromCart(x.id, x.quantity + 1);
                  }}
                  className="cart-button btn"
                >
                  +
                </button>
                <p style={{ color: "#f91944" }}>
                  $<b>{x.price * x.quantity}</b>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {auth.currentUser ? (
          <center>
            <Link to='/checkout'>
            <button className="btn  review-button my-3">
              place order
            </button>
            </Link>
          </center>
        ) : (
          <center>
            <button className="btn disabled review-button my-3">
            log in to place order
            </button>
          </center>
        )}
    </div>
    ):(
      <div>
        <h2 className='p-5 mt-5'>
          <center>
            Currently your cart is empty. <img src="https://cdn1.iconfinder.com/data/icons/ui-basic-8/64/x-19-32.png" alt=""/> <br/> <br/> Please add foods to your cart to place order. <br/> <br/>
            <img src="https://cdn3.iconfinder.com/data/icons/food-round/64/Food_hamburger_and_aeration-128.png" className='img-fluid mt-3' alt=""/> 
          </center>
        </h2>
      </div>
    )}

    
  
    </div>
    );
};

export default CartDetails;

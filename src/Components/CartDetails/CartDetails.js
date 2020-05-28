import React from "react";
import "./CartDetails.css";
const CartDetails = (props) => {
  const Orders = props.cart;
  console.log(Orders);
  return (
    <div className="cart-container container">
        <center><h3 className='mb-5'>Order Summary</h3></center>
      <div className="row">
        {Orders.map((x) => (
          <div className="col-md-4 ">
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
                <button onClick={()=>props.removeFromCart(x)} className="cart-button btn">-</button>
                {x.quantity}
                <button onClick={()=>props.removeFromCart(x)} className="cart-button btn">+</button>
                <p style={{ color: "#f91944" }}>
                  $<b>{x.price * x.quantity}</b>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDetails;

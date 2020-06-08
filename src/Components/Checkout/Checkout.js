import React from "react";
import "./Checkout.css";
const Checkout = (props) => {
  const Orders = props.cart;
  return (
    <div className="container">
      <div className="row checkout">
        <div className="col-md-6">
          <div className="from-container-checkout">
            <form>
              <h4>Delivery Details</h4>
              <hr />
              <div className="form-group ">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Place"
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="input-group ">
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Road no"
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Flat,suite or floor"
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="input-group ">
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Business name"
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="input-group ">
                  <textarea
                    className="form-control "
                    placeholder="Add delivery instruction"
                  ></textarea>
                </div>
              </div>
              <button className="review-button btn btn-block">
                Save & continue
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <div className="checkout-confirm p-4">
            <p className="">
              with love from Red onion <br /> Arriving time 20-30 min
            </p>
            {Orders.map((x) => (
              <div key={x.id} className="col-md-12">
                <div className="checkoutDetails d-flex row">
                  <div className="image col-md-4">
                    {x.foodImage && (
                      <img
                        className="img-fluid p-2"
                        src={require(`../../Image/${x.foodImage}`)}
                        alt="d"
                      />
                    )}
                  </div>
                  <div className="checkout-box col-md-8">
                    <p><small>{x.foodTitle} <br/>quantity: <b>{x.quantity}</b> <br/></small>
                    <span style={{ color: "#f91944" }}>
                      $<b>{x.price * x.quantity}</b>{" "}
                    </span></p>
                  </div>
                </div>
              </div>
            ))}
            <div>
                subtotal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

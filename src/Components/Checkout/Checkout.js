import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
const Checkout = (props) => {
  const [active, setActive] = useState(false);
  const Orders = props.cart;
  const subtotal = Orders.reduce((x, y) => x + y.price * y.quantity, 0);
  const qty = Orders.reduce((x, y) => x + y.quantity, 0);
  const tax = (2 / 100) * subtotal.toFixed(2);
  const total = subtotal + tax;
  const handleConfirm = (event) => {
    event.preventDefault();
    setActive(true);
  };
  return (
    <div className="container">
      <div className="row checkout align-items-center justify-content-between">
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
                    required
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
                    required
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
              <button
                onClick={handleConfirm}
                className="review-button btn btn-block"
              >
                Save & continue
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <div className="checkout-confirm p-4">
            <p className="">
              with love from Red onion foods
              <br /> Arriving time 20-30 min
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
                    <p>
                      <small>
                        {x.foodTitle} <br />
                        quantity: <b>{x.quantity}</b> <br />
                      </small>
                      <span style={{ color: "#f91944" }}>
                        $<b>{x.price * x.quantity}</b>{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="checkout-price mt-4 p-2">
              <div className="d-flex justify-content-between">
                <div className="qty">total item</div>
                <div className="qty">{qty}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="sub">subtotal</div>
                <div className="sub">{subtotal.toFixed(2)}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="tax">tax</div>
                <div className="tax">{tax.toFixed(2)}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="total">total</div>
                <div className="total">{total.toFixed(2)}</div>
              </div>
              {active ? (
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className="review-button  mt-2 btn btn-block"
                  to='/place-order'
                >
                  place order
                </Link>
              ) : (
                <div className="mt-2">
                  <span className="error">
                    please provide delivery details to active this button
                  </span>
                  <button className="review-button disabled  btn btn-block">
                    place order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

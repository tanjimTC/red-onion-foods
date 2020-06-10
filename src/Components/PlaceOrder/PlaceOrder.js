import React from "react";
import "./PlaceOrder.css";
import { useAuth } from "../SignUp/useAuth";
const PlaceOrder = (props) => {
  window.scrollTo(0, 0);
  const auth = useAuth();
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-8 col-xs-6">
          <div className="place-order-left p-4">
            <img
              className="img-fluid p-3"
              src={require("../../Image/ordercomplete.png")}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-xs-6 p-4">
          <div className="place-order-right p-4">
            <img
              className="img-fluid w-25"
              src={require("../../Image/Group 1151.png")}
              alt=""
            />

            <div className="location">
              <p>
                Your location :<br />
                <small>
                  {props.deliveryDetails.place ? (
                    <React.Fragment>
                      {props.deliveryDetails.place}-{props.deliveryDetails.flat}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>loading..</React.Fragment>
                  )}
                </small>{" "}
                <br /> <br />
                Shop address :<br />
                <span>Mars</span>{" "}
                <img
                  className="ml-2 img-fluid"
                  src="https://cdn2.iconfinder.com/data/icons/space-8/512/Mars-32.png"
                  alt=""
                />{" "}
                <br />
                <span role="img" aria-label="label">
                  on our way 🚀
                </span>
              </p>
            </div>
            <h3 className="mt-4 text-left p-0 mb-0 ml-2">09:30</h3>
            <span style={{ color: "#666" }} className="ml-2">
              Estimated delivery time
            </span>
            <div className="container">
              <div className="location d-flex align-items-center row">
                <div className="your-pic col-md-4 col-4">
                  <img
                    className="img-fluid"
                    src={require("../../Image/Group 1152.png")}
                    alt=""
                  />
                </div>
                <div className="your-name col-md-8 col-8">
                  {auth.currentUser ? (
                    <p>
                      {auth.currentUser.name} <br />
                      please wait <br />
                      forever
                      <img
                        className="ml-2 img-fluid"
                        src="https://cdn3.iconfinder.com/data/icons/mathematics-vol-2/512/infinity-32.png"
                        alt=""
                      />
                    </p>
                  ) : (
                    <p>loading name...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

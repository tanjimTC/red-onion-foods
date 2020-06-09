import React from "react";
import "./PlaceOrder.css";
import { useAuth } from "../SignUp/useAuth";
const PlaceOrder = () => {
  const auth = useAuth();
  return (
    <div className="container">
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
              className="img-fluid w-50"
              src={require("../../Image/Group 1151.png")}
              alt=""
            />

            <div className="location">
              <p>
                your location <br />
                <small>107 road 8</small> <br /> <br />
                shop address <br />
                <small>Gulshan 5</small>
              </p>
            </div>
            <h3 className="mt-4 p-0 mb-0 ml-2">09:30</h3>
            <span style={{ color: "#666" }} className="ml-2">
              Estimated delivery time
            </span>
            <div className="container">
              <div className="location d-flex row">
                <div className="your-pic col-md-4">
                  <img
                    className="img-fluid"
                    src={require("../../Image/Group 1152.png")}
                    alt=""
                  />
                </div>
                <div className="your-name col-md-8">
                  {auth.currentUser ? (
                    <p>
                      {auth.currentUser.name} <br />
                      please wait{" "}
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/objects/512/Smiley-16.png"
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

import React from "react";
import { useAuth } from "../SignUp/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const CreditCard = (props) => {
  const auth = useAuth();
  const [orderId, setOrderId] = useState(null);
  const stripePromise = loadStripe(
    "pk_test_51H2WPVJ0iICkOAizoTlJJ4ImEaEVMrGpN8CvR842BS0JoAxJ4v4a0seySHmZBffdQuwNSI5UGZiqcX8CSWFjRfQM00lHcTiPdI"
  );
  const handlePlaceOrder = (payment) => {
    const orderDetail = {
      name: auth.currentUser.name,
      shipment: props.deliveryDetails,
      payment: payment,
      items: props.cart,
    };
    fetch("https://tranquil-ridge-31876.herokuapp.com/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderId(data._id);
      });
  };

  return (
    <div className="hhaa">
      <div style={{ margin: "0px" }} className="row">
        <div className="m-auto w-75">
          <h3 className="text-center mt-3 mb-5">Payment Information</h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm handlePlaceOrder={handlePlaceOrder} />
          </Elements>
          <br />
        </div>
        <div className="mt-2">
          {orderId && (
            <PlaceOrder
              orderId={orderId}
              deliveryDetails={props.deliveryDetails}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import CartDetails from "./Components/CartDetails/CartDetails";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { AuthProvider, PrivateRoute } from "./Components/SignUp/useAuth";
import Checkout from "./Components/Checkout/Checkout";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import CreditCard from "./Components/CreditCard/CreditCard";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
import Inventory from "./Components/Inventory";
function App() {
  const initialState = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialState);
  const [deliveryDetails, setDeliveryDetails] = useState({
    place: null,
    road: null,
    flat: null,
    businessName: null,
    address: null,
  });
  const deliveryDetailsHandler = (data) => {
    setDeliveryDetails(data);
  };
  const handleCart = (food) => {
    const isAddedAlready = cart.find((x) => x.id === food.id);
    const newCart = [...cart, food];
    if (!isAddedAlready) {
      setCart(newCart);
    }
  };
  const removeFromCart = (key, qty) => {
    cart.map((x) => {
      if (x.id === key) {
        x.quantity = qty;
      }
      return x;
    });
    const notZeroQuantity = cart.filter((pd) => pd.quantity > 0);
    setCart(notZeroQuantity);
  };
  const resetCart = () => {
    setCart([]);
  };
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header cart={cart} />
          <Switch>
            <Route exact path="/">
              <Home cart={cart} />
            </Route>
            <Route path="/details/:foodID">
              <Details cart={cart} handleCart={handleCart} />
            </Route>
            <Route path="/cart-details">
              <CartDetails
                resetCart={resetCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <SignIn cart={cart}/>
            </Route>
            <Route path='/inv'>
              <Inventory/>
            </Route>
            <PrivateRoute path="/payment">
              <CreditCard 
                resetCart={resetCart} 
                deliveryDetails={deliveryDetails}
                cart={cart}
              />
            </PrivateRoute>
            <PrivateRoute path="/place-order">
              <PlaceOrder
                deliveryDetails={deliveryDetails}
                deliveryDetailsHandler={deliveryDetailsHandler}
              />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout
                cart={cart}
                deliveryDetails={deliveryDetails}
                deliveryDetailsHandler={deliveryDetailsHandler}
              />
            </PrivateRoute>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path='/terms-condition'>
                <Terms/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

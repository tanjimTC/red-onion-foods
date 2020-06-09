import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import CartDetails from "./Components/CartDetails/CartDetails";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { AuthProvider, PrivateRoute } from "./Components/SignUp/useAuth";
import Checkout from "./Components/Checkout/Checkout";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
function App() {
  const initialState = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialState);

  const handleCart = (food) => {
    const isAddedAlready = cart.find((x) => x.id === food.id);
    const newCart = [...cart, food];
    if (!isAddedAlready) {
      setCart(newCart);
    }
  };
  const removeFromCart = (key, qty) => {
    console.log(cart);
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
              <SignIn />
            </Route>
            <PrivateRoute path='/place-order'>
              <PlaceOrder/>
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout cart={cart} />
            </PrivateRoute>
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

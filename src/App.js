import React,{useState} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import CartDetails from "./Components/CartDetails/CartDetails";
function App() {
  const initialState = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(initialState);

  const handleCart =(food)=>{
    const isAddedAlready = cart.find( x=> x.id === food.id);
    const newCart = [...cart , food];
    if(!isAddedAlready){
      setCart(newCart)
    }
  }
  return (
    <div className="App">
      <Router>
        <Header cart={cart} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:foodID"> 
           <Details handleCart={handleCart}  />
          </Route>
          <Route path='/cart-details'>
            <CartDetails cart={cart} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

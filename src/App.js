import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id" component={Details} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

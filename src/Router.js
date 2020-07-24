import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductItems from "./components/ProductItems";
import About from "./components/About";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import PlaceOrder from "./components/PlaceOrder";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={() => <h2>404 Not Found </h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterFunction;

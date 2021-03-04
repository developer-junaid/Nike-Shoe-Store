import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ProductItems from "./components/ProductItems/ProductItems";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/ordersummary" component={OrderSummary} />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={() => <h2>404 Not Found </h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterFunction;

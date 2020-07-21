import React from "react";
import RouterFunction from "./Router";
import Footer from "./components/Footer";
import "./App.css";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className={'container'}>
      <CartProvider>
        <RouterFunction />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;

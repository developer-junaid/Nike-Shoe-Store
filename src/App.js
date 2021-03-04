import React from "react";
import RouterFunction from "./Router";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { CartProvider } from "./CartContext";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className={"container"}>
      <CartProvider>
        <Provider store={store}>
          <RouterFunction />
          <Footer />
        </Provider>
      </CartProvider>
    </div>
  );
}

export default App;

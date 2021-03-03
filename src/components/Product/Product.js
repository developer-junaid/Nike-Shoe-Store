import React from "react";
import "../../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import cartImage from "../../images/cart1.svg";
import { store, add, selectProducts, setTotalItems } from "../../store";

function Product() {
  // Select Data from redux store
  const products = useSelector(selectProducts);

  const cartProducts = products.filter((product) => product.added);

  store.dispatch(setTotalItems(cartProducts.length));

  return (
    <div>
      <div className="product-container">
        {products.map((product) => {
          // variables
          let id = product.id;
          let title = product.title;
          let imageUrl = product.imageUrl;
          let price = product.price;

          return (
            <div key={id} className="hvr-grow products">
              <h3 className="shoe-name">{title} </h3>
              <h2 className="shoe-price"> ${price} </h2>
              <Link key={id} to={`/product/${id}`}>
                <img
                  className="products-shoe-image"
                  title={title}
                  alt={title}
                  src={imageUrl}
                />
              </Link>
              <br />
              <Tooltip title="Add to cart" aria-label="add to cart">
                <button
                  onClick={() => store.dispatch(add(product))}
                  className="cart-button"
                >
                  <img
                    className="cart-image"
                    src={cartImage}
                    alt="add to cart"
                  />
                </button>
              </Tooltip>
            </div>
          );
        })}

        {/* {Object.keys(Shoes).map((keyName, idx) => {
          const shoe = Shoes[keyName];
          return <Shoe shoe={shoe} key={idx} keyName={keyName} idx={idx} />;
        })} */}
      </div>
      <div className="page-wrapper"></div>
    </div>
  );
}

export default Product;

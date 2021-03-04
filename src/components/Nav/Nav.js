import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import NikeImage from "../../images/nike.svg";
import cartImage2 from "../../images/cart7.svg";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../store";

function Nav() {
  // Use state
  const [homeState, setHomeState] = useState(
    "hvr-underline-from-center nav-link active"
  );
  const [aboutState, setAboutState] = useState(
    "hvr-underline-from-center nav-link"
  );
  const [productState, setProductState] = useState(
    "hvr-underline-from-center nav-link"
  );
  const [cartState, setCartState] = useState(
    "hvr-underline-from-center nav-link"
  );

  // Functions
  // Home
  const setHome = () => {
    setHomeState("hvr-underline-from-center nav-link active");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("hvr-underline-from-center nav-link");
  };

  // About
  const setAbout = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link active");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("hvr-underline-from-center nav-link");
  };

  // Product
  const setProduct = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link active");
    setCartState("hvr-underline-from-center nav-link");
  };

  // Cart
  const setTheCart = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("hvr-underline-from-center nav-link active");
  };

  // Total
  let totalItems = useSelector(selectTotalItems);

  return (
    <div>
      <h1 className="nike-shoes">Nike Shoes</h1>
      <div className="nav-container">
        <nav>
          <h2>
            <img
              className="logo"
              src={NikeImage}
              title="Nike logo"
              alt="Nike Logo"
            />

            <Link className={homeState} to="/" onClick={setHome}>
              {" "}
              Home{" "}
            </Link>
            <Link className={aboutState} to="/about" onClick={setAbout}>
              {" "}
              About{" "}
            </Link>
            <Link className={productState} to="/product" onClick={setProduct}>
              {" "}
              Products{" "}
            </Link>
            {/* Badged */}
            <Badge badgeContent={totalItems} color="primary">
              <Link className={cartState} to="/cart" onClick={setTheCart}>
                {" "}
                <img
                  alt="cart"
                  title="cart"
                  className="nav-cart"
                  src={cartImage2}
                />{" "}
              </Link>
            </Badge>
          </h2>
        </nav>
      </div>
    </div>
  );
}

export default Nav;

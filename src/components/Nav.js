import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NikeImage from '../images/nike.svg'

function Nav() {

  // Use state
  const [homeState, setHomeState] = useState('hvr-underline-from-center nav-link active')
  const [aboutState, setAboutState] = useState('hvr-underline-from-center nav-link')
  const [productState, setProductState] = useState('hvr-underline-from-center nav-link')

  // Functions 
    // Home
    const setHome = ()=> {
      setHomeState('hvr-underline-from-center nav-link active');
      setAboutState('hvr-underline-from-center nav-link');
      setProductState('hvr-underline-from-center nav-link');
    }

    // About
    const setAbout = ()=> {
      setHomeState('hvr-underline-from-center nav-link');
      setAboutState('hvr-underline-from-center nav-link active');
      setProductState('hvr-underline-from-center nav-link');
    }
    
    // Product
    const setProduct = ()=> {
      setHomeState('hvr-underline-from-center nav-link');
      setAboutState('hvr-underline-from-center nav-link');
      setProductState('hvr-underline-from-center nav-link active');
    }




  return (
    <div>
      <h1 className='nike-shoes'>Nike Shoes</h1>
      <div className="nav-container">
        <nav>
          <h2>
            <img className='logo' src={NikeImage} alt="Nike Logo" />
            <Link className={homeState}  to="/" onClick={ setHome }> Home </Link>
            <Link className={aboutState} to="/about" onClick={ setAbout}> About </Link>
            <Link className={productState} to="/product" onClick={ setProduct }> Products </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
}

export default Nav;

import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NikeImage from '../images/nike.svg'

function Nav() {

  // Use state
  const [homeState, setHomeState] = useState('nav-link active')
  const [aboutState, setAboutState] = useState('nav-link')
  const [productState, setProductState] = useState('nav-link')

  // Functions 
    // Home
    const setHome = ()=> {
      setHomeState('nav-link active');
      setAboutState('nav-link');
      setProductState('nav-link');
    }

    // About
    const setAbout = ()=> {
      setHomeState('nav-link');
      setAboutState('nav-link active');
      setProductState('nav-link');
    }
    
    // Product
    const setProduct = ()=> {
      setHomeState('nav-link');
      setAboutState('nav-link');
      setProductState('nav-link active');
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

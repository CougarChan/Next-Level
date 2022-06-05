import React from 'react'
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import M from "materialize-css";








const Header = () => {
  return (

    <nav>
      <div className='nav-wrapper 
'>
        <Link to="/" className='brand-logo right'>
          <h5>NEXT-LEVEL</h5>
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">

          <li className=''>
            <Link to="/login" >
              <p className="left-align">Login</p>
            </Link>
          </li>
          <li className=''>
            <Link to="/signup" >
              <p className="left-align">Sign Up</p>
            </Link>
          </li>
          <li className=''>
            <a href='/' onClick={() => Auth.logout()}>Logout </a>
          </li >
        </ul >
      </div>


    </nav>


  )
};

export default Header;
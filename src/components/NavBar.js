import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =({handleHomePage, handleOrdersPage, logout}) =>{
    return(
      <div className='navbar'>
        <nav className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark'>
          <Link className='navbar-brand' onClick={()=>handleHomePage()}>Checkout Experience</Link>
          <div className="collapse navbar-collapse">
            {/* on the left side of the navbar */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" onClick={()=>handleHomePage()}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={()=>handleOrdersPage()}>View Orders</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
            {/* on the right side of the navbar */}
              <li className='nav-item'>
                <Link className='nav-link' onClick={() => logout()}>Logout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About this app</Link>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    )

}

export default NavBar;
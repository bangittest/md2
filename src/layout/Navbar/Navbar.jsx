import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"

export default function Navbar() {
  const carts=useSelector((cart)=>cart.listCart)

  
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchIconClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleCloseClick = () => {
    setSearchVisible(false);
    setSearchQuery('');
  };



  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <>
    <>
  {/* <div id="preloder">
    <div className="loader" />
  </div> */}
  {/* Offcanvas Menu Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__close">+</div>
    <ul className="offcanvas__widget">
      <li>
        <span className="icon_search search-switch" />
      </li>
      <li>
      <Link to="/cart">
          <span className="icon_heart_alt" />
          <div className="tip">{carts.length}</div>
        </Link>
      </li>
    </ul>
    <div className="offcanvas__logo">
      <Link to="/">
        <img src="img/logo.png" alt="" />
      </Link>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__auth">
      <a href="#">Login</a>
      <a href="#">Register</a>
    </div>
  </div>
  {/* Offcanvas Menu End */}
  {/* Header Section Begin */}
  <header className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-2">
          <div className="header__logo">
          <Link to="/">
              <img src="img/logo.png" alt="" />
              </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <nav className="header__menu">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/list-product">Shop</Link>
              </li>
              <li>
              <Link to="#">Women’s</Link>
              </li>
              <li>
              <Link to="#">Men’s</Link>
              </li>
              <li>
              <Link to="/blog">Blog</Link>
                {/* <ul className="dropdown">
                  <li>
                    <Link to="#">Product Details</Link> 
                  </li>
                  <li>
                  <Link to="#">Shop Cart</Link> 
                  </li>
                  <li>
                  <Link to="#">Check Out</Link> 
                  </li>
                  <li>
                  <Link to="#">Blog Details</Link> 
                  </li>
                </ul> */}
              </li>
              <li>
              <Link to="/about">About</Link>
               
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__right">
            <div className="header__right__auth">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </div>
            <ul className="header__right__widget">
              <li>
                <span  onClick={handleSearchIconClick}  className="icon_search search-switch" />
              </li>
              {searchVisible && (
        <div className="search-bar container " style={{zIndex:"888"}}>
          <input type="text" placeholder="Search..."
           
            onKeyDown={handleKeyDown}
           />
            <button btn btn-primary>Search</button>
            <span className="close-icon" onClick={handleCloseClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
          </span>
        </div>
      )}
              <li>
                <Link to="/cart">
                  <span className="icon_bag_alt" />
                  <div className="tip">{carts.length}</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="canvas__open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
  {/* Header Section End */}
</>

    </>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const carts=useSelector((cart)=>cart.listCart)
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
              <Link to="#">Women’s</Link>
              </li>
              <li>
              <Link to="#">Men’s</Link>
                
              </li>
              <li>
              <Link to="/list-product">Shop</Link>
              </li>
              <li>
              <Link to="#">Page</Link>
                <ul className="dropdown">
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
                </ul>
              </li>
              <li>
              <Link to="/about">Blog</Link>
               
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
                <span className="icon_search search-switch" />
              </li>
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

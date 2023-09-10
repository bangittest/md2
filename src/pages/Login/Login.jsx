import React from 'react'
import'../Login/login.css'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className="main111">
  {/* Sing in  Form */}
  <section className="sign-in">
    <div className="container111">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img src="../images/signin-image.jpg" alt="sing up image" />
          </figure>
          <Link href="#" className="signup-image-link">
            Create an account
          </Link>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Sign up</h2>
          <form method="POST" className="register-form" id="login-form">
            <div className="form-group">
              <label htmlFor="your_name">
                <i className="zmdi zmdi-account material-icons-name" />
              </label>
              <input
                type="text"
                name="your_name"
                id="your_name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="your_pass">
                <i className="zmdi zmdi-lock" />
              </label>
              <input
                type="password"
                name="your_pass"
                id="your_pass"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="agree-term"
              />
              <label htmlFor="remember-me" className="label-agree-term">
                <span>
                  <span />
                </span>
                Remember me
              </label>
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="form-submit"
                defaultValue="Log in"
              />
            </div>
          </form>
          <div className="social-login">
            <span className="social-label">Or login with</span>
            <ul className="socials">
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path></svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg>
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    <Footer/>
    </>
  )
}

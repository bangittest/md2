import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
    <Navbar/>
    <div className="main111">
    <section className="signup">
    <div className="container111">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Sign up</h2>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name" />
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="zmdi zmdi-email" />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">
                <i className="zmdi zmdi-lock" />
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="re-pass">
                <i className="zmdi zmdi-lock-outline" />
              </label>
              <input
                type="password"
                name="re_pass"
                id="re_pass"
                placeholder="Repeat your password"
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="agree-term"
                id="agree-term"
                className="agree-term"
              />
              <label htmlFor="agree-term" className="label-agree-term">
                <span>
                  <span />
                </span>
                I agree all statements in{" "}
                <Link to="/login" className="term-service">
                  .Terms of service
                </Link>
              </label>
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-submit"
                defaultValue="Register"
              />
            </div>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src="images/signup-image.jpg" alt="sing up image" />
          </figure>
          <Link to="#" className="signup-image-link">
            I am already member
          </Link>
        </div>
      </div>
    </div>
  </section>
  </div>
    <Footer/>
    </>
  )
}

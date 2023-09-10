import React from "react";
import { Link } from "react-router-dom";

export default function Categorys() {
  return (
    <>
      {/* Categories Section Begin */}
      <section className="categories" >
        <div className="container-fluid">
          <div className="row">
            
            <div className="">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg
                  >
                    <img  className="categories__item set-bg"
                    data-setbg style={{objectFit:"cover"}} src="img/categories/category-2.jpg" alt="" />
                    <div className="categories__text">
                      <h4>Men’s fashion</h4>
                      <p>358 items</p>
                      <Link to="/list-product">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg
                  >
                    <img  className="categories__item set-bg"
                    data-setbg style={{objectFit:"cover"}} src="img/categories/category-3.jpg" alt="" />
                    <div className="categories__text">
                      <h4>Kid’s fashion</h4>
                      <p>273 items</p>
                      <Link to="/list-product">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg
                  >
                    <img className="categories__item set-bg"
                    data-setbg style={{objectFit:"cover"}} src="img/categories/category-4.jpg" alt="" />
                    <div className="categories__text">
                      <h4>Cosmetics</h4>
                      <p>159 items</p>
                      <Link to="/list-product">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    data-setbg
                  >
                    <img className="categories__item set-bg"
                    data-setbg style={{objectFit:"cover"}} src="img/categories/category-5.jpg" alt="" />
                    <div className="categories__text">
                      <h4>Accessories</h4>
                      <p>792 items</p>
                      <Link to="/list-product">Shop now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section End */}
    </>
  );
}

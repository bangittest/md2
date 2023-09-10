import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import{formatMoney} from "../common/fommat"
import { act_add } from "../actions/cartAction";
import Instagram from "./Instagram";
import Back_To_Top from "../components/base/backtop/Back_To_Top";


export default function ListProduct() {
  const listProduct = useSelector((pro) => pro.listProduct);
  
  const dispatch=useDispatch();
    //ham them san pham vao gio hang
    const handleAddToCart=(product)=>{
        dispatch(act_add(product))//gui thong tin product
        notification.success({
          message: "Thành công",
          description: `${product.product_name} đã được thêm vào giỏ hàng`,
          duration:1.5,
        })
      }

  return (
    <>
      <Navbar />
      <>
        <div className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__links">
                  <Link to="/">
                    <i className="fa fa-home" /> Home
                  </Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Shop Section Begin */}
        <section className="shop spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="shop__sidebar">
                  <div className="sidebar__categories">
                    <div className="section-title">
                      <h4>Categories</h4>
                    </div>
                    <div className="categories__accordion">
                      <div className="accordion" id="accordionExample">
                        <div className="card">
                          <div className="card-heading active">
                            <Link
                              data-toggle="collapse"
                              data-target="#collapseOne"
                            >
                              Women
                            </Link>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <ul>
                                <li>
                                  <Link to="#">Coats</Link>
                                </li>
                                <li>
                                  <Link to="#">Jackets</Link>
                                </li>
                                <li>
                                  <Link to="#">Dresses</Link>
                                </li>
                                <li>
                                  <Link to="#">Shirts</Link>
                                </li>
                                <li>
                                  <Link to="#">T-shirts</Link>
                                </li>
                                <li>
                                  <Link href="#">Jeans</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-heading">
                            <Link
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                            >
                              Men
                            </Link>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <ul>
                                <li>
                                  <Link to="#">Coats</Link>
                                </li>
                                <li>
                                  <Link to="#">Jackets</Link>
                                </li>
                                <li>
                                  <Link to="#">Dresses</Link>
                                </li>
                                <li>
                                  <Link to="#">Shirts</Link>
                                </li>
                                <li>
                                  <Link to="#">T-shirts</Link>
                                </li>
                                <li>
                                  <Link to="#">Jeans</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="row">
                  {listProduct.map((e, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg image-container "
                          data-setbg
                        >
                            <img className="product__item__pic set-bg image-container" style={{objectFit:"cover",borderRadius:"2px"}} src={e.image} alt="" />
                          <div className="label new">New</div>
                          <ul className="product__hover">
                            <li>
                              <Link to={e.image} className=" overlay_0 overlay image-container">
                                <span className="arrow_expand" />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span className="icon_heart_alt" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={()=>handleAddToCart(e)} to="#">
                                <span className="icon_bag_alt" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product__item__text">
                          <h6>
                            <Link to={`/product/${e.product_id}`}>{e.product_name}</Link>
                          </h6>
                          <div className="rating">
                            <i className="fa fa-star" >::</i>
                            <i className="fa fa-star" >::</i>
                            <i className="fa fa-star" >::</i>
                            <i className="fa fa-star" >::</i>
                            <i className="fa fa-star" ></i>
                          </div>
                          <div className="product__price">{formatMoney(e.price)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-lg-12 text-center">
                    {/* <div className="pagination__option"> */}
                      {/* <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                      </a> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    {/* Footer Section Begin */} 
    <Instagram/>
    <Back_To_Top/>
      <Footer />
    </>
  );
}

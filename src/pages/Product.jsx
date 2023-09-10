import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_add } from "../actions/cartAction";
import { notification } from "antd";
import { formatMoney } from "../common/fommat";
import { Link } from "react-router-dom";

export default function Product() {
  const listProduct = useSelector((pro) => pro.listProduct);

  const dispatch = useDispatch();
  //ham them san pham vao gio hang
  const handleAddToCart = (product) => {
    dispatch(act_add(product)); //gui thong tin product
    notification.success({
      message: "Thành công",
      description: `${product.product_name} đã được thêm vào giỏ hàng`,
      duration: 1.5,
    });
  };
  return (
    <>
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>New product</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".women">Women’s</li>
                <li data-filter=".men">Men’s</li>
                <li data-filter=".kid">Kid’s</li>
                <li data-filter=".accessories">Accessories</li>
                <li data-filter=".cosmetic">Cosmetics</li>
              </ul>
            </div>
          </div>
          <div className="row property__gallery">
            {listProduct.map((e, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic"
              >
                <div className="product__item sale">
                  <div
                    className="product__item__pic set-bg "
                    data-setbg={e.image}
                  >
                    <div className="label">Sale</div>
                    <ul className="product__hover">
                      <li>
                        <Link to={e.image} className=" overlay_0 overlay">
                          <span className="arrow_expand" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => handleAddToCart(e)} to="#">
                          <span className="icon_bag_alt" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <Link to={`/product/${e.product_id}`}>
                        {e.product_name}
                      </Link>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star">::</i>
                      <i className="fa fa-star">::</i>
                      <i className="fa fa-star">::</i>
                      <i className="fa fa-star">::</i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">
                      {formatMoney(e.price)}
                      <span>{formatMoney(e.price * (0.2 + 1))}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
}

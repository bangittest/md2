import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Banner/banner.css"
import { Link } from 'react-router-dom';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='slide'>
        <img src="/public/img/banner/banner-2.jpg" />
        <div className="slide-content">
          <h2 className="slide-title">Slider Title 2</h2>
          <p className="slide-description">Slider Description 3</p>
          <Link to="/list-product">Shop now</Link>
        </div>
      </div>
      <div  className='slide'>
        <img src="/public/img/banner/banner-1.jpg" alt="Slide 2" />
        <div className="slide-content">
          <h2 className="slide-title">Slider Title 3</h2>
          <p className="slide-description">Slider Description 5</p>
          <Link to="/list-product">Shop now</Link>
        </div>
      </div>
      <div  className='slide'>
        <img src="/public/img/banner/banner-3.jpg" />
        <div className="slide-content">
          <h2 className="slide-title">The Project Jacket</h2>
          <p className="slide-description">The Chloe Collection</p>
          <Link to="/list-product">Shop now</Link>
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
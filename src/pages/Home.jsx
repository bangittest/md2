import React from 'react'
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer'
import Categorys from './Categorys'
import Product from './Product'
import Banner from './Banner/Banner'
import Trending from './Trending'
import Discount from './Discount'
import Sevice from './Sevice'
import Instagram from './Instagram'
import Back_To_Top from '../components/base/backtop/Back_To_Top'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Categorys/>
    <Product/>
    <Banner/>
    <Trending/>
    <Discount/>
    <Sevice/>
    <Instagram/>
    <Back_To_Top/>
    <Footer/>
    </>
  )
}

import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Categorys from './Categorys'
import Product from './Product'
import Banner from './Banner'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Categorys/>
    <Product/>
    <Banner/>
    <Footer/>
    </>
  )
}

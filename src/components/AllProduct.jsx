import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Popular from './Popular'
import Products from './Products'
import Women from './Women'

const AllProduct = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Products/>
      <Popular />
      <Women/>
      <Footer/>
    </>

  )
}

export default AllProduct
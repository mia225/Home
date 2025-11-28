import React from 'react'
import Hero from '../components/Hero.jsx'
import Header from '../components/Header.jsx'
import ProductGuide from '../components/ProductGuide.jsx'
import ProductList from '../components/ProductList.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <ProductGuide/>
        <ProductList/>
    </div>
  )
}
export default Home
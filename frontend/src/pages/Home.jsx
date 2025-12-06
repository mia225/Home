import React from 'react'
import Hero from '../components/Hero.jsx'
import ProductGuide from '../components/ProductGuide.jsx'
import ProductList from '../components/ProductList.jsx'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ProductGuide/>
        <ProductList/>
    </div>
  )
}
export default Home
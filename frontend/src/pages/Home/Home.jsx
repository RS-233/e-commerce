import React from 'react'
import ImageSlider from '../../Components/Slider/Imageslider'
import Header from '../../Components/Header/Header'
import Brand from '../../Components/Brands/Brand'
import Footer from '../../Components/Footer/Footer'
import Productcategory from '../../Components/ProductCategory/ProductCategory'


const Home = () => {
  return (
    <div>
      <Productcategory/>
        <ImageSlider/>
        <Header/>
        <Brand brandname="Fashion" category="Fashion" link={"/fashion"}/>
        <Brand brandname="Appliances" category="Appliances" link={"/appliances"}/>
        <Brand brandname="Electronics" category="Electronics" link={"/electronics"}/>
        
        <Footer/>
    </div>
  )
}

export default Home
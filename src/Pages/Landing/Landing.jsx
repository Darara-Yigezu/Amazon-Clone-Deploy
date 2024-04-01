import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import CarouselEffect from '../../Components/Carousel/Carousel';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';
import Layout from '../../Components/Layout/Layout';

function Landing() {
  return (
    <Layout>
        <CarouselEffect/>
        <Category/>
        <Product/>
    </Layout>
  )
}
export default Landing;
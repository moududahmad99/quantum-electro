import React from 'react'
import TopBar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import NewArrival from '../../components/newArrival/NewArrival'
import TopFeatured from '../../components/topFeatured/TopFeatured'
import ShopOffer from '../../components/shopOffer/ShopOffer'
import ShopOfferExtension from '../../components/shopOfferExtension/ShopOfferExtension'
import FeaturedCard from '../../components/featuredCard/FeaturedCard'
import FeaturedItems from '../../components/featuredItems/FeaturedItems'
import Spance from '../../components/spance/spance'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
         <TopBar />
        <Navbar />
        <Banner />
        <ShopOffer />
        <NewArrival />
        <TopFeatured />
        <ShopOfferExtension />
        <FeaturedCard />
        <FeaturedItems />
        <Spance />
        <Footer />
    </div>
  )
}

export default Home
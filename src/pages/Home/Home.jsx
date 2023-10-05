import React from 'react'
import TopBar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Spance from '../../components/spance/spance'
import ShopOffer from '../../components/shopOffer/ShopOffer'
import Footer from '../../components/footer/Footer'
import NewArrival from '../../components/newArrival/NewArrival'
import TopFeatured from '../../components/topFeatured/TopFeatured'
import ShopOfferExtension from '../../components/shopOfferExtension/ShopOfferExtension'

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
        <Spance />
        <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import TopBar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Spance from '../../components/spance/spance'
import ShopOffer from '../../components/shopOffer/ShopOffer'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <Banner />
        <ShopOffer />
        <Spance />
        <Footer />
    </div>
  )
}

export default Home
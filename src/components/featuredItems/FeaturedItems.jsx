import React from 'react'
import './FeaturedItems.css'

import Slider from 'react-slick';

import { motion } from 'framer-motion';
import { AiOutlineStar, AiFillStar, AiTwotoneShopping } from 'react-icons/ai'
import { BiSolidStarHalf } from 'react-icons/bi'
import { GoEye } from 'react-icons/go'
import { FiHeart } from 'react-icons/fi'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const FeaturedItems = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }



  return (
    <div>
      <React.Fragment>
        <div id="Grid" className='p-8'>
          <div id='topFeatured' className='my-20'>
            <div className='grid grid-cols-4 gap-4 flex flex-nowrap sm:flex-wrap'>
              <div className='featItems'>
                <picture>
                  <img src="/assets/Headphone.jpg" alt="img" />
                </picture>
                <div className='featItems-inner bg-[#232D3F70] py-2 text-center'>
                  <h5 className='text-white font-normal text-lg'>Headphones</h5>
                  <h2 className='text-white font-medium text-2xl'>Flate Discount</h2>
                </div>
              </div>
              <div className='col-span-3 topFeatRight'>
                <Slider {...settings}>
                  <div className="prodsResInner">
                    <div className="products-card pb-5 mx-3">
                      <picture>
                        <img src="/assets/Headphone1.jpg" alt="Product" />
                      </picture>
                      <div className='new-arrival'>
                        <h6 className='uppercase font-bold'>-19%</h6>
                      </div>
                      <div className='products-desc'>
                        <div className='flex items-center pt-8 pl-5 pb-2'>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><BiSolidStarHalf /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4 className='font-semibold text-lg pl-5 py-1'> Explore Our Premium Headphones</h4>
                        <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                      </div>
                      <div className="products-hoverIcons">

                        <motion.ul
                          initial={{ opacity: 0, y: 80 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 1 }}
                        >
                          <ul className='flex'>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                            <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                          </ul>
                        </motion.ul>
                      </div>
                    </div>
                  </div>

                  <div className="prodsResInner">
                    <div className="products-card pb-5 mx-3">
                      <picture>
                        <img src="/assets/Headphone2.jpg" alt="Product" />
                      </picture>
                      <div className='new-arrival'>
                        <h6 className='uppercase font-bold'>-19%</h6>
                      </div>
                      <div className='products-desc'>
                        <div className='flex items-center pt-8 pl-5 pb-2'>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><BiSolidStarHalf /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4 className='font-semibold text-lg pl-5 py-1'>Upgrade Your Sound Experience</h4>
                        <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                      </div>
                      <div className="products-hoverIcons">

                        <motion.ul
                          initial={{ opacity: 0, y: 80 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 1 }}
                        >
                          <ul className='flex'>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                            <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                          </ul>
                        </motion.ul>
                      </div>
                    </div>
                  </div>

                  <div className="prodsResInner">
                    <div className="products-card pb-5 mx-3">
                      <picture>
                        <img src="/assets/Headphone3.jpg" alt="Product" />
                      </picture>
                      <div className='new-arrival'>
                        <h6 className='uppercase font-bold'>-19%</h6>
                      </div>
                      <div className='products-desc'>
                        <div className='flex items-center pt-8 pl-5 pb-2'>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><BiSolidStarHalf /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4 className='font-semibold text-lg pl-5 py-1'>Immerse Yourself in Audio Excellence</h4>
                        <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                      </div>
                      <div className="products-hoverIcons">

                        <motion.ul
                          initial={{ opacity: 0, y: 80 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 1 }}
                        >
                          <ul className='flex'>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                            <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                          </ul>
                        </motion.ul>
                      </div>
                    </div>
                  </div>

                  <div className="prodsResInner">
                    <div className="products-card pb-5 mx-3">
                      <picture>
                        <img src="/assets/Headphone4.jpg" alt="Product" />
                      </picture>
                      <div className='new-arrival'>
                        <h6 className='uppercase font-bold'>-19%</h6>
                      </div>
                      <div className='products-desc'>
                        <div className='flex items-center pt-8 pl-5 pb-2'>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><BiSolidStarHalf /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4 className='font-semibold text-lg pl-5 py-1'>Next-Level Listening Devices</h4>
                        <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                      </div>
                      <div className="products-hoverIcons">

                        <motion.ul
                          initial={{ opacity: 0, y: 80 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 1 }}
                        >
                          <ul className='flex'>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                            <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                          </ul>
                        </motion.ul>
                      </div>
                    </div>
                  </div>

                  <div className="prodsResInner">
                    <div className="products-card pb-5 mx-3">
                      <picture>
                        <img src="/assets/Headphone5.jpg" alt="Product" />
                      </picture>
                      <div className='new-arrival'>
                        <h6 className='uppercase font-bold'>-19%</h6>
                      </div>
                      <div className='products-desc'>
                        <div className='flex items-center pt-8 pl-5 pb-2'>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><AiFillStar /></i>
                          <i><BiSolidStarHalf /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4 className='font-semibold text-lg pl-5 py-1'>Discover the Latest Headphones</h4>
                        <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                      </div>
                      <div className="products-hoverIcons">

                        <motion.ul
                          initial={{ opacity: 0, y: 80 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 1 }}
                        >
                          <ul className='flex'>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                            <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                            <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                          </ul>
                        </motion.ul>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
          <div id='topFeatured' className='my-20'>
            <div className='grid grid-cols-4 gap-4 flex flex-nowrap sm:flex-wrap'>
              <div className='featItems'>
                <picture>
                  <img src="/assets/Phone.jpg" alt="img" />
                </picture>
                <div className='featItems-inner bg-[#232D3F70] py-2 text-center'>
                  <h5 className='text-white font-normal text-lg'>Phones</h5>
                  <h2 className='text-white font-medium text-2xl'>Flate Discount</h2>
                </div>
              </div>
              <div className='col-span-3 topFeatRight'>
                <Slider {...settings}>
                    <div className="prodsResInner">
                      <div className="products-card pb-5 mx-3">
                        <picture>
                          <img src="/assets/Phone1.jpg" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-19%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'> Explore Our Premium Headphones</h4>
                          <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                        </div>
                        <div className="products-hoverIcons">

                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 1 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>

                    <div className="prodsResInner">
                      <div className="products-card pb-5 mx-3">
                        <picture>
                          <img src="/assets/Phone2.jpg" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-19%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Upgrade Your Sound Experience</h4>
                          <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                        </div>
                        <div className="products-hoverIcons">

                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 1 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>

                    <div className="prodsResInner">
                      <div className="products-card pb-5 mx-3">
                        <picture>
                          <img src="/assets/Phone3.jpg" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-19%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Immerse Yourself in Audio Excellence</h4>
                          <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                        </div>
                        <div className="products-hoverIcons">

                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 1 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>

                    <div className="prodsResInner">
                      <div className="products-card pb-5 mx-3">
                        <picture>
                          <img src="/assets/Phone4.jpg" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-19%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Next-Level Listening Devices</h4>
                          <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                        </div>
                        <div className="products-hoverIcons">

                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 1 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>

                    <div className="prodsResInner">
                      <div className="products-card pb-5 mx-3">
                        <picture>
                          <img src="/assets/Phone5.jpg" alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>-19%</h6>
                        </div>
                        <div className='products-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><AiFillStar /></i>
                            <i><BiSolidStarHalf /></i>
                            <i><AiOutlineStar /></i>
                          </div>
                          <h4 className='font-semibold text-lg pl-5 py-1'>Discover the Latest Headphones</h4>
                          <h3 className='font-bold text-xl pl-5'>$32.00 <span>$46.00</span></h3>
                        </div>
                        <div className="products-hoverIcons">

                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 1 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-2 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-2 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default FeaturedItems
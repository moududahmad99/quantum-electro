import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

import { GiConverseShoe } from 'react-icons/gi'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { motion } from 'framer-motion';

const CustomLeftArrow = ({ onClick }) => (
  <div className="custom-slick-arrow custom-slick-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div className="custom-slick-arrow custom-slick-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />
  };



  return (
    <div className="banner-wrapper">
      <Slider {...settings}>
        <div className="carousel-item1 w-1/2">
          <div className="p-8" id="Grid">
            <div className='flex justify-between items-center bannerHeightResponsive'>
              <div className="text-content">
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1 }}
                >
                  <div className='flex items-center'>
                    <i className='pr-3'><GiConverseShoe /></i>
                    <h5 className='font-semibold'>Sustainable Style Solutions</h5>
                  </div>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: .6 } }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='text-6xl my-4	font-bold pr-4'>Sustainable Fashion for Enthusiasts</h1>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1 }}
                >
                  <a href="##" className='uppercase font-semibold'>Explore Products</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item1 w-1/2">
          <div className="p-8" id="Grid">
            <div className='flex justify-between items-center bannerHeightResponsive'>
              <div className="text-content">
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1 }}
                >
                  <div className='flex items-center'>
                    <i className='pr-3'><GiConverseShoe /></i>
                    <h5 className='font-semibold'>Sustainable Style Solutions</h5>
                  </div>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: .6 } }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='text-6xl my-4	font-bold pr-4'>Sustainable Fashion for Enthusiasts</h1>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1 }}
                >
                  <a href="##" className='uppercase font-semibold'>Explore Products</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

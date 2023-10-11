import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { motion, useAnimation } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';


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

  const [isComponentMounted1, setIsComponentMounted1] = useState(false);

  const [isVisibleSlider1, setIsVisibleSlider1] = useState(false);
  const [isVisibleSlider2, setIsVisibleSlider2] = useState(false);


  useEffect(() => {
    setIsComponentMounted1(true);
  }, []);

  const [isComponentMounted2, setIsComponentMounted2] = useState(false);

  useEffect(() => {
    setIsComponentMounted2(true);
  }, []);

  const controlsH6slide1 = useAnimation();
  const controlsH5slide1 = useAnimation();
  const controlsH1slide1 = useAnimation();
  const controlsBtnslide1 = useAnimation();

  const controlsH6 = useAnimation();
  const controlsH1 = useAnimation();
  const controlsH5 = useAnimation();
  const controlsBtn = useAnimation();

  const onAnimationStart = () => {
    if (isComponentMounted2) {
      controlsH6.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      controlsH5.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      controlsH1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      controlsBtn.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  };


  const onAnimationStart1 = () => {
    if (isComponentMounted1) {
      controlsH6slide1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      controlsH5slide1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      controlsH1slide1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      controlsBtnslide1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }

  const onAnimationEnd1 = () => {
    controlsH6slide1.start({ opacity: 0, y: -60 });
    controlsH1slide1.start({ opacity: 0, x: 160 });
    controlsH5slide1.start({ opacity: 0, x: -160 });
    controlsBtnslide1.start({ opacity: 0, y: -60 });
    setIsVisibleSlider1(false);
  }
  
  // eslint-disable-next-line
  const onVisibilityChangeSlider1 = (visible) => {
    if (visible && !isVisibleSlider1) {
      setIsVisibleSlider1(true);
      onAnimationStart1();
    } else if (!visible && isVisibleSlider1) {
      onAnimationEnd1();
    }
  };

  const onAnimationEnd2 = () => {
    controlsH6.start({ opacity: 0, y: -60 });
    controlsH5.start({ opacity: 0, x: -160 });
    controlsH1.start({ opacity: 0, x: 160 });
    controlsBtn.start({ opacity: 0, y: -60 });
    setIsVisibleSlider2(false);
  };

  const onVisibilityChangeSlider2 = (visible) => {
    if (visible && !isVisibleSlider2) {
      setIsVisibleSlider2(true);
      onAnimationStart();
    } else if (!visible && isVisibleSlider2) {
      onAnimationEnd2();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />
  };

  const isLargeDevice = window.innerWidth <= 991;


  return (
    <div className="banner-wrapper">
      <Slider {...settings}>

        {/* Slider One Start */}

        {isLargeDevice ? (
          <div className="carousel-item1 w-1/2">
            <div className="p-8" id="Grid">
              <div className='flex justify-between items-center bannerHeightResponsive'>
                <div className="text-content">
                  <h6>Seasonal Savings</h6>
                  <h1 className='text-6xl'>Innovative Eco-Tech Choices</h1>
                  <h5 className='font-white text-2xl mb-8'>Wide Range Start from <span className='text-3xl'>79$</span></h5>
                  <a href="##" className='uppercase font-semibold'>View Gadgets</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="carousel-item1 w-1/2">
            <div className="p-8" id="Grid">
              <div className='flex justify-between items-center bannerHeightResponsive'>
                <div className="text-content">

                  <motion.h6
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    Seasonal Savings
                  </motion.h6>

                  <motion.h1 className='text-6xl  my-4'
                    initial={{ x: -170, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}>Innovative Eco-Tech Choices</motion.h1>
                  <motion.h5 className='font-white text-2xl my-8'
                    initial={{ x: 140, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}>Wide Range Start from <span className='text-3xl'>79$</span></motion.h5>

                  <motion.div className='uppercase my-5 font-semibold'
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}>
                    <a href="##">View Gadgets</a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Slider One End */}

        {/* Slider Two Start */}
        {isLargeDevice ? (
          <div className="carousel-item1 w-1/2">
            <div className="p-8" id="Grid">
              <div className='flex justify-between items-center bannerHeightResponsive'>
                <div className="text-content">
                  <h6>Limited-Time Offer</h6>
                  <h1 className='text-6xl'>Ecological Elegance Solutions</h1>
                  <h5 className='font-white text-2xl mb-8'>Wide Range Start from <span className='text-3xl'>15$</span></h5>
                  <a href="##" className='uppercase font-semibold'>Explore Products</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="carousel-item1 w-1/2">
            <div className="p-8" id="Grid">
              <div className='flex justify-between items-center bannerHeightResponsive'>
                <div className="text-content">

                  <VisibilitySensor onChange={onVisibilityChangeSlider2} partialVisibility>
                    <motion.h6
                      initial={{ opacity: 0, y: -60 }}
                      animate={controlsH6}
                      className='font-semibold'
                    >
                      Limited-Time Offer
                    </motion.h6>
                  </VisibilitySensor>

                  {/* <VisibilitySensor onChange={onVisibilityChangeSlider2} partialVisibility> */}
                  <motion.h1
                    initial={{ opacity: 0, x: 160 }}
                    animate={controlsH1}
                    className='text-6xl my-4	font-bold pr-4'
                  >
                    Ecological Elegance Solutions
                  </motion.h1>
                  {/* </VisibilitySensor> */}

                  {/* <VisibilitySensor onChange={onVisibilityChangeSlider2} partialVisibility> */}
                  <motion.h5
                    initial={{ opacity: 0, x: -80 }}
                    animate={controlsH5}
                    className='text-2xl my-4	font-semibold pr-4'
                  >
                    Wide Range Start from <span className='text-5xl'>15$</span>

                  </motion.h5>
                  {/* </VisibilitySensor> */}

                  {/* <VisibilitySensor onChange={onVisibilityChangeSlider2} partialVisibility> */}
                  <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={controlsBtn}
                    className='mt-14'
                  >
                    <a href="##" className='uppercase font-semibold'>Explore Products</a>
                  </motion.div>
                  {/* </VisibilitySensor> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Slider Two End */}

      </Slider>
    </div>
  );
};

export default Banner;
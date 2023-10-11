import React, { useState, useEffect } from 'react'
import './ShopOfferExtension.css'


import { FaLongArrowAltRight } from 'react-icons/fa'

const ShopOfferExtension = () => {

  const storedTargetDate = localStorage.getItem('targetDate');
  const defaultTargetDate = new Date(new Date().getTime() + 600 * 24 * 60 * 60 * 1000);
  const [targetDate, setTargetDate] = useState(new Date(storedTargetDate) || defaultTargetDate);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  function calculateTimeRemaining(target) {
    return Math.max(target - new Date(), 0);
  }

  useEffect(() => {
    if (!storedTargetDate) {
      localStorage.setItem('targetDate', targetDate.toString());
    }

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate, storedTargetDate]);

  // eslint-disable-next-line
  const handleUpdateTargetDate = () => {
    const newTargetDate = new Date(targetDate.getTime() + 24 * 60 * 60 * 1000); // Add 1 day, for example
    setTargetDate(newTargetDate);
    localStorage.setItem('targetDate', newTargetDate.toString());
  };


  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF]">
        <div id="Grid" className='p-8 pt-10'>

          <div id="shopImage" className='flex my-14 gap-4'>
            <div className='w-1/2 shopImage-inner1 rounded '>
              <div className='shopImage-text'>
                <h3 className='text-white text-xl sm:text-2xl md:text-4xl leading-9'>Innovative Electronic Devices</h3>
                <p className='text-white py-3'>40% Discount</p>
                <div className='flex items-center pointer text-white hover:text-red-300'>
                  <a href="##" className='pr-4'>View Collection</a>
                  <i className='text-2xl'><FaLongArrowAltRight /></i>
                </div>

                {/* Countdown */}
                <div className="pt-4">
                  <div className="text-2xl text-white">
                    {`${days}d ${hours}h ${minutes}m ${seconds}s`}
                  </div>
                </div>

              </div>
            </div>
            <div className='w-1/2 shopImage-inner2 rounded'>
              <div className='shopImage-text'>
                <h3 className='text-white text-xl sm:text-2xl md:text-4xl leading-9'>Modern Electronic Devices</h3>
                <p className='text-white py-3'>45% Discount</p>
                <div className='flex items-center pointer text-white hover:text-red-300'>
                  <a href="##" className='pr-4'>View Collection</a>
                  <i className='text-2xl'><FaLongArrowAltRight /></i>
                </div>
                {/* Countdown */}
                <div className="pt-4">
                  <div className="text-2xl text-white">
                    {`${days}d ${hours}h ${minutes}m ${seconds}s`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ShopOfferExtension;
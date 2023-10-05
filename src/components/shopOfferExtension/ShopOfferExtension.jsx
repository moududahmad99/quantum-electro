import React from 'react'
import './ShopOfferExtension.css'

 
import { FaLongArrowAltRight } from 'react-icons/fa'

const ShopOfferExtension = () => {
  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF]">
        <div id="Grid" className='p-8 pt-10'>
 
          <div id="shopImage" className='flex my-14 gap-4'>
            <div className='w-1/2 shopImage-inner1 rounded '>
              <div className='shopImage-text'>
                <h3 className='text-white text-4xl'>Innovative Electronic Devices</h3>
                <p className='text-white py-3'>40% Discount</p>
                <div className='flex items-center pointer text-white hover:text-red-300'>
                  <a href="##" className='pr-4'>View Collection</a>
                  <i className='text-2xl'><FaLongArrowAltRight /></i>
                </div>
              </div>
            </div>
            <div className='w-1/2 shopImage-inner2 rounded'>
              <div className='shopImage-text'>
                <h3 className='text-white text-4xl'>Modern Electronic Devices</h3>
                <p className='text-white py-3'>45% Discount</p>
                <div className='flex items-center pointer text-white hover:text-red-300'>
                  <a href="##" className='pr-4'>View Collection</a>
                  <i className='text-2xl'><FaLongArrowAltRight /></i>
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
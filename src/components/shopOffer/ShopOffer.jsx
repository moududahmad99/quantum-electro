import React from 'react'
import './ShopOffer.css'

import { SlEarphonesAlt } from 'react-icons/sl'
import { MdComputer } from 'react-icons/md'
import { BsPhoneFill, BsFillSpeakerFill } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ShopOffer = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F1EFEF]">
        <div id="Grid" className='p-8 pt-32'>
          <div id="shopOffer" className='w-full flex gap-4'>
            <div className='shopOffer-Card flex w-1/2 md:w-full'>
              <div className="shopOffer-inner items-center p-5 justify-between flex w-1/2 sm:w-full">
                <div>
                  <h3 className='text-2xl font-semibold'>Hassle-free</h3>
                  <p className='text-gray-800'>Global Coverage</p>
                </div>
                <i><SlEarphonesAlt /></i>
              </div>
              <div className="shopOffer-inner items-center p-5 md:ml-5 justify-between flex w-1/2 sm:w-full">
                <div>
                  <h3 className='text-2xl font-semibold'>Global Returns</h3>
                  <p className='text-gray-800'>Trustworthy shopping</p>
                </div>
                <i><MdComputer /></i>
              </div>
            </div>
            <div className='shopOffer-Card flex w-1/2 md:w-full'>
              <div className="shopOffer-inner items-center p-5 justify-between flex w-1/2">
                <div>
                  <h3 className='text-2xl font-semibold'>Always assist</h3>
                  <p className='text-gray-800'>Round-the-clock help</p>
                </div>
                <i><BsPhoneFill /></i>
              </div>
              <div className="shopOffer-inner items-center p-5 md:ml-5  justify-between flex w-1/2">
                <div>
                  <h3 className='text-2xl font-semibold'>Instant Support</h3>
                  <p className='text-gray-800'>Four cards each month</p>
                </div>
                <i><BsFillSpeakerFill /></i>
              </div>
            </div>
          </div>

          <div id="shopImage" className='flex my-14 gap-4'>
            <div className='w-1/2 shopImage-inner1 rounded '>
              <div className='shopImage-text'>
                <h3 className='text-white text-4xl'>Innovative Electronic Devices</h3>
                <p className='text-white py-3'>40% Discount</p>
                <div className='flex items-center pointer text-white'>
                  <a href="##" className='pr-4'>View Collection</a>
                  <i className='text-2xl'><FaLongArrowAltRight /></i>
                </div>
              </div>
            </div>
            <div className='w-1/2 shopImage-inner2 rounded'>
              <div className='shopImage-text'>
                <h3 className='text-white text-4xl'>Modern Electronic Devices</h3>
                <p className='text-white py-3'>45% Discount</p>
                <div className='flex items-center pointer text-white'>
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

export default ShopOffer
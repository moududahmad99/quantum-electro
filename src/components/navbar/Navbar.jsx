import React, { useEffect, useState } from 'react';
import './Navbar.css';

import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoLinkedinSquare } from 'react-icons/bi'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 740) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`bg-[#FFFFFF] navbar ${isSticky ? 'sticky z-[2] top-0 bg-[#FFFFFF] shadow-md text-dark' : ''} ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div id='Grid' className='px-8 py-4'>
        <div className='navbar-wrapper z-[2] items-center flex justify-between items-center'>
          <div className="navbar-inner w-3/12">
            <picture>
              <img src="./assets/new.png" alt="logo" />
            </picture>
          </div>
          <div className="navbar-inner flex justify-center w-5/12">
            <ul className='flex text-center z-[1]'>
              {sidebarOpen && (
                <>
                  <div className="sidebar-logo mb-5 pt-10 flex justify-between items-center px-5">
                    <picture>
                      <img src="../../assets/new.png" alt="logo" />
                    </picture>
                    <div className="close-button" onClick={toggleSidebar}>
                      <i><RxCross2 /></i>
                    </div>
                  </div>
                </>
              )}
              <hr className='mx-5' />
              {sidebarOpen && (
                <div className='sidebar-input flex items-center px-4'>
                  <input type="text" placeholder='Search...' className='sidebar-logo' />
                </div>
              )}
              <li className='pr-8 font-bold'><a href="##">Home</a></li>
              <li className='pr-8 font-bold'><a href="##">About</a></li>
              <li className='pr-8 font-bold'><a href="##">Shop</a></li>
              <li className='pr-8 font-bold'><a href="##">News</a></li>
              <li className='pr-8 font-bold'><a href="##">Pages</a></li>
              <li className='font-bold'><a href="##">Contact</a></li>
              {sidebarOpen && (
                <div className='sidebar-icons items-center px-4'>
                  <div>
                    <hr className='my-4' />
                    <i className='ml-3 flex items-center pb-4 font-medium'><BsSearch /> <p>My Account</p></i>
                    <i className='ml-3 flex items-center pb-4 font-medium'><BiUser /> <p>Wishlist</p> </i>
                    <i className='ml-3 flex items-center pb-4 font-medium'><PiShoppingCartDuotone /><p>Shopping Cart</p></i>
                    <hr className='my-4' />
                    <div className='flex items-center sidebar-social my-10'>
                      <i className='p-3 mr-4'><FaFacebookF /></i>
                      <i className='p-3 mr-4'><FaTwitter /></i>
                      <i className=' p-3 mr-4'><BiLogoLinkedinSquare /></i>
                      <i className='p-3 mr-4'><AiFillInstagram /></i>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className="navbar-innerRight flex justify-end items-center w-4/12">
            <a href="##" className='font-bold px-6 py-2 mr-2 '>GET A QUOTE</a>
            <div className='flex'>
              <i className='ml-4'><BsSearch /></i>
              <i className='ml-4'><BiUser /></i>
              <i className='ml-4'><PiShoppingCartDuotone /></i>
            </div>
            <div className="hamburger-menu" data-toggle="collapse" onClick={toggleSidebar}>
              <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
              <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
              <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
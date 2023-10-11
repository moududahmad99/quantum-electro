import React, { useState } from 'react'
import './Footer.css'

import { TfiLocationPin } from 'react-icons/tfi'
import { LuPhoneCall } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import { HiSpeakerphone } from 'react-icons/hi'
import { FiSend } from 'react-icons/fi'

import { FaFacebookF, FaTwitter, FaInstagram, FaLongArrowAltUp } from 'react-icons/fa';
import { BsDribbble, BsSendFill } from 'react-icons/bs'

const Footer = () => {

	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const handleScroll = () => {
		if (window.scrollY > 200) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	window.addEventListener('scroll', handleScroll);


	return (
		<>
			<div className='bg-[#CD330140]'>
				<div id="Grid" className='footer-topSubscribe p-8 flex justify-between items-center flex-wrap'>
					<div className='flex flex-wrap text-gray items-center'>
						<i className='pr-2 text-3xl'><HiSpeakerphone /> </i>
						<h5 className='font-bold my-2  pr-8 '>Join Us and Subscribe!</h5>
						<p className='my-2'>Get a $20 Coupon for Your First Purchase and Enjoy Free Delivery</p>
					</div>
					<div className='flex items-center'>
						<input className='px-10 bg-[#132043] outline-none text-white py-3' type="email" required />
						<i className='p-4 cursor-pointer border-l bg-[#132043] text-white'><FiSend /></i>
					</div>
				</div>
			</div>
			<div className="bg-[#F1EFEF]">
				<div id="Grid" className='pr-8'>
					<div className="footer-main flex pt-14">
						<div className="footer-mainResponsive1 flex pl-10">
							<div className="w-6/12">
								<div>
									<picture>
										<img src="/assets/logo.png" alt="footer-logo" />
									</picture>
									<p className='py-4 pr-2'>Discover our curated range of cutting-edge electronics to elevate your tech experience.</p>
									<div className='flex items-center my-4'>
										<i className='pr-2'><TfiLocationPin /></i>
										<p>Brooklyn, New York, United States</p>
									</div>
									<div className='flex items-center my-4'>
										<i className='pr-2'><LuPhoneCall /></i>
										<p>+0123-456789</p>
									</div>
									<div className='flex items-center my-4'>
										<i className='pr-2'><MdOutlineMail /></i>
										<p>example@example.com</p>
									</div>
									<div className='flex social my-8'>
										<i className='pr-5 text-xl'><FaFacebookF /></i>
										<i className='pr-5 text-xl'><FaTwitter /></i>
										<i className='pr-5 text-xl'><FaInstagram /></i>
										<i className='text-xl'><BsDribbble /></i>
									</div>
								</div>
							</div>
							<div className="w-4/12">
								<h3 className='mb-6 font-bold text-2xl footer-title'>Company</h3>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> About</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Blog</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> All Products</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Location Map</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> FAQ</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Contact Us</a>
							</div>
						</div>
						<div className="footer-mainResponsive2 width flex pl-10">
							<div className="w-6/12">
								<h3 className='mb-6 font-bold text-2xl footer-title'>Services</h3>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Order Tracing</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Wishlist</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> All Login</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> My Account</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Terms & Condition</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Promotional Offer</a>
							</div>
							<div className="w-6/12">
								<h3 className='mb-6 font-bold text-2xl footer-title'>Customer Care</h3>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span>Login</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span>My Accout</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span>Wish List</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span>Over tracing</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span>Faq</a>
								<a href='##' className='font-normal flex link pb-4'> <span className='pr-2'>\\</span> Contact Us</a>
							</div>
						</div>
						<div className="w-4/12 pl-10 newsLPaddingTopRes">
							<h3 className='mb-6 font-bold text-2xl footer-title'>Newsletter</h3>
							<p className='font-medium text-lg'>Subscribe to our weekly Newsletter and receive updates via email.</p>
							<div className='flex items-center my-4'>
								<input type="text" placeholder='Email*' className='p-4' required />
								<i className='send p-5'><BsSendFill /></i>
							</div>
							<h6 className='text-md font-bold mt-2 mb-4'>We Accept</h6>
							<picture className='paymentResPadding'>
								<img className='paymentResPadding' src="/assets/payment-method.png" alt="" />
							</picture>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#201F29] py-10">
				<div id="Grid" className='px-8'>
					<div className="footer-bottom flex items-center justify-between text-white">
						<h2 className='font-medium'>All Rights Reserved Engineer Hut 2023</h2>
						<div>
							<a className='font-semibold pl-4' href="##">Terms & Conditions</a>
							<a className='font-semibold pl-4' href="##">Claim</a>
							<a className='font-semibold pl-4' href="##">Privacy & Policy</a>
						</div>
					</div>
				</div>
				{/* BactoTop */}
				<div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
					<button className='p-3 scrollToTop' onClick={scrollToTop}>
						<i><FaLongArrowAltUp /></i>
					</button>
				</div>
			</div>
		</>
	)
}

export default Footer;
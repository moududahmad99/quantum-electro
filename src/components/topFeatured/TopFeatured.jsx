import React from 'react'
import './TopFeatured.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopFeatured = () => {

	const settings = {
		dots: true,
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
		<React.Fragment>
			<div id="Grid" className='p-8'>
				<div id='topFeatured' className='my-20'>
					<div className='w-full flex flex-wrap md:flex-nowrap'>
						<div className='topFeatLeft w-1/6 '>
							<h5 className='uppercase text-gray-400'>Top Featured</h5>
							<h3 className='text-2xl capitalize mt-4'>Discover More <span className='text-3xl font-semibold'>Categories</span></h3>
							<p className='text-red-400 lg:mt-20 my-5 cursor-pointer'>View More Categories</p>
						</div>
						<div className='topFeatRight w-5/6 '>
							<Slider {...settings}>
								<div>
									<picture>
										<img src="/assets/topFeatured1.jpg" alt="Slide 1" />
									</picture>
								</div>
								<div>
									<picture>
										<img src="/assets/topFeatured2.jpg" alt="Slide 1" />
									</picture>
								</div>
								<div>
									<picture>
										<img src="/assets/topFeatured3.jpg" alt="Slide 1" />
									</picture>
								</div>
								<div>
									<picture>
										<img src="/assets/topFeatured4.jpg" alt="Slide 1" />
									</picture>
								</div>
								<div>
									<picture>
										<img src="/assets/topFeatured5.jpg" alt="Slide 1" />
									</picture>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default TopFeatured
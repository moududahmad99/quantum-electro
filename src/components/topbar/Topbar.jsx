import React from 'react'
import './Topbar.css'


const TopBar = () => {
	return (
		<div className='bg-[#F2F2F2]'>
			<div id='Grid'>
				<div className="topbar-wrapper py-2 p-8 flex justify-between">
					<div className="topbar-inner flex">
						<div className='flex items-center topbarResponsive pr-10'>
							<p className='font-medium'>Worldwide Free Shipping on Orders Over $1000</p>
						</div>
					</div>
					<div className="topbar-inner">
						<div className="topbar-innerRes flex items-center space-x-4 py-1">
							<ul className='flex flex-wrap'>
								<li><a href="##">Find a Store</a></li>
								<span></span>
								<li className='pl-3'><a href="##">Track Orders</a></li>
								<span></span>
								<li className='pl-3'><a href="##">Credit Cards</a></li>
								<span></span>
								<li className='pl-3'><a href="##">Language</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default TopBar;
// import React from 'react'
// import './NewArrival.css'

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// import { motion } from 'framer-motion';

// import { AiOutlineStar, AiFillStar, AiTwotoneShopping } from 'react-icons/ai'
// import { BiSolidStarHalf } from 'react-icons/bi'
// import { GoEye } from 'react-icons/go'
// import { FiHeart } from 'react-icons/fi'
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


// const NewArrival = () => {
//   return (
//     <React.Fragment>
//       <div id="Grid">
//         <div id="newArrival">
//           <Tabs>
//             <TabList>
//               <div className="newArrival-tabs flex justify-between items-center">
//                 <Tab>
//                   <h1 className='bg-[#04364A] rounded text-white px-5 py-2 mt-5'>New Arrival</h1>
//                 </Tab>
//                 <div className='flex items-center cursor-pointer'>
//                   <p className='pr-3'>Discover All Products</p>
//                   <HiOutlineArrowNarrowRight />
//                 </div>
//               </div>
//             </TabList>
//             <TabPanel>
//               <div className='flex'>
//                 <div className="w-3/12">
//                   <div className="newArrival-card mx-4 my-5 pb-5">
//                     <picture>
//                       <img src="/assets/newArrival.jpg" alt="Product" />
//                     </picture>
//                     <div className='new-arrival'>
//                       <h6 className='uppercase font-bold'>-25%</h6>
//                     </div>
//                     <div className='newArrival-desc'>
//                       <div className='flex items-center pt-8 pl-5 pb-2'>
//                         <i><AiFillStar /></i>
//                         <i><AiFillStar /></i>
//                         <i><AiFillStar /></i>
//                         <i><BiSolidStarHalf /></i>
//                         <i><AiOutlineStar /></i>
//                       </div>
//                       <h4 className='font-semibold text-lg pl-5 py-1'>Black Leather Loafers</h4>
//                       <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
//                     </div>
//                     <div className="newArrival-hoverIcons">

//                       <motion.ul
//                         initial={{ opacity: 0, y: 80 }}
//                         animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
//                         exit={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 1 }}
//                       >
//                         <ul className='flex'>
//                           <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
//                           <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
//                           <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
//                         </ul>
//                       </motion.ul>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-3/12">
//                   <div className="newArrival-card mx-4 my-5 pb-5">
//                     <picture>
//                       <img src="/assets/newArrival.jpg" alt="Product" />
//                     </picture>
//                     <div className='new-arrival'>
//                       <h6 className='uppercase font-bold'>-25%</h6>
//                     </div>
//                     <div className='newArrival-desc'>
//                       <div className='flex items-center pt-8 pl-5 pb-2'>
//                         <i><AiFillStar /></i>
//                         <i><AiFillStar /></i>
//                         <i><AiFillStar /></i>
//                         <i><BiSolidStarHalf /></i>
//                         <i><AiOutlineStar /></i>
//                       </div>
//                       <h4 className='font-semibold text-lg pl-5 py-1'>Black Leather Loafers</h4>
//                       <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
//                     </div>
//                     <div className="newArrival-hoverIcons">

//                       <motion.ul
//                         initial={{ opacity: 0, y: 80 }}
//                         animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
//                         exit={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 1 }}
//                       >
//                         <ul className='flex'>
//                           <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
//                           <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
//                           <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
//                         </ul>
//                       </motion.ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

// export default NewArrival;


import React from 'react';
import './NewArrival.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { motion } from 'framer-motion';

import {
  AiFillStar,
  AiTwotoneShopping,
  AiFillHeart,
} from 'react-icons/ai';
import { GoEye } from 'react-icons/go';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const products = [
  {
    id: 1,
    imageSrc: '/assets/newArrival.jpg',
    discount: '-25%',
    ratings: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: 32.0,
    originalPrice: 46.0,
  },
  {
    id: 2,
    imageSrc: '/assets/newArrival II.jpg',
    discount: '-25%',
    ratings: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: 32.0,
    originalPrice: 46.0,
  },
  {
    id: 3,
    imageSrc: '/assets/newArrival III.jpg',
    discount: '-25%',
    ratings: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: 32.0,
    originalPrice: 46.0,
  },
  {
    id: 4,
    imageSrc: '/assets/newArrival IV.jpg',
    discount: '-25%',
    ratings: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: 32.0,
    originalPrice: 46.0,
  },
  // Add more product objects here if needed
];

const products2 = [
  {
    id: 1,
    imageSrc: '/assets/newArrival III.jpg',
    discount: '-25%',
    ratings: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: 32.0,
    originalPrice: 46.0,
  },
  {
    id: 2,
    imageSrc: '/assets/newArrival IV.jpg',
    discount: '-25%',
    ratings: [1, 2, 3, 4, 5],
    title: 'Black Leather Loafers',
    price: 32.0,
    originalPrice: 46.0,
  },
];

const NewArrival = () => {



  return (
    <React.Fragment>
      <div id="Grid">
        <div id="newArrival">
          <Tabs>
            <TabList>
              <div className="newArrival-tabs px-6 pr-8 flex flex-wrap justify-between items-center">
              <div className='mt-5 '>
                <Tab>
                  <h1 className='bg-[#001524] border rounded text-white px-5 py-3'>New Arrival</h1>
                </Tab>
                <Tab>
                  <h1 className='bg-[#001524] border rounded text-white px-5 py-3'>Coming Soon</h1>
                </Tab>
              </div>
                <div className='flex pt-3 items-center cursor-pointer'>
                  <p className='px-3'>Discover All Products</p>
                  <HiOutlineArrowNarrowRight />
                </div>
              </div>
            </TabList>
            <TabPanel>
              <div className='flex grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4'>
                  {products.map((product) => (
                    <div className="" key={product.id}>
                      <div className="newArrival-card mx-4 my-5 pb-5">
                        <picture>
                          <img src={product.imageSrc} alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>{product.discount}</h6>
                        </div>
                        <div className='newArrival-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            {product.ratings.map((rating, index) => (
                              <i key={index}><AiFillStar /></i>
                            ))}
                          </div>

                          <h4 className='font-semibold text-lg pl-5 py-1'>{product.title}</h4>
                          <h3 className='font-bold text-2xl pl-5'>{`$${product.price}`} <span>{`$${product.originalPrice}`}</span></h3>
                        </div>
                        <div className="newArrival-hoverIcons">
                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: .5 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-3 cursor-pointer rounded-full text-xl'><i><AiFillHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {products2.map((product) => (
                    <div key={product.id}>
                      <div className="newArrival-card mx-4 my-5 pb-5">
                        <picture>
                          <img src={product.imageSrc} alt="Product" />
                        </picture>
                        <div className='new-arrival'>
                          <h6 className='uppercase font-bold'>{product.discount}</h6>
                        </div>
                        <div className='newArrival-desc'>
                          <div className='flex items-center pt-8 pl-5 pb-2'>
                            {product.ratings.map((rating, index) => (
                              <i key={index}><AiFillStar /></i>
                            ))}
                          </div>

                          <h4 className='font-semibold text-lg pl-5 py-1'>{product.title}</h4>
                          <h3 className='font-bold text-2xl pl-5'>{`$${product.price}`} <span>{`$${product.originalPrice}`}</span></h3>
                        </div>
                        <div className="newArrival-hoverIcons">
                          <motion.ul
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: .5 }}
                          >
                            <ul className='flex'>
                              <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                              <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                              <li className='p-3 cursor-pointer rounded-full text-xl'><i><AiFillHeart /></i></li>
                            </ul>
                          </motion.ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NewArrival;

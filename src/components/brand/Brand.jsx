import React from 'react'
import './Brand.css'

const Brand = () => {



  return (
    <React.Fragment>
      <div id="Grid" className='p-8'>
        <div id="brand">
          <div class="grid my-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4">
            <div class="p-4 bg-gray-100">
              <picture>
                <img src="/assets/brand.png" alt="brand" />
              </picture>
            </div>
            <div class="p-4 bg-gray-100">
              <picture>
                <img src="/assets/brand4.png" alt="brand" />
              </picture>
            </div>
            <div class="p-4 bg-gray-100">
              <picture>
                <img src="/assets/brand2.png" alt="brand" />
              </picture>
            </div>
            <div class="p-4 bg-gray-100">
              <picture>
                <img src="/assets/brand3.png" alt="brand" />
              </picture>
            </div>
            <div class="p-4 bg-gray-100">
              <picture>
                <img src="/assets/brand6.png" alt="brand" />
              </picture>
            </div>
            <div class="p-4 bg-gray-100">
              <picture>
                <img src="/assets/brand5.png" alt="brand" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Brand
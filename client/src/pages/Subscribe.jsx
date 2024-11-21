import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Subscribe = () => {

  const {user} = useContext (AppContext) 

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Available Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose Your Plan</h1>

      <div className="flex flex-wrap justify-center gap-6 text-center">
        {
          plans.map((item, index) => (
            <div key={index} className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500">
              <img width={30} src={assets.lock_icon} />
              <p className='mt-3 mb-1 font-semibold'>{ item.id }</p>
              <p className='text-sm'>{ item.desc }</p>
              <p className='mt-6'> <span className='text-2xl font-medium text-blue'>₦{ item.price } </span> / { item.credits } credits</p>
              <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{ user ? 'Buy Now' : 'Get Started'}</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Subscribe
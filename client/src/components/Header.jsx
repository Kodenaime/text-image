import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-lg border border-neutral-500">
            <p>Best way to generate text to image</p> 
            <img src={assets.star_icon} alt="" />
        </div>
        <h1>Convert text to images, in seconds</h1>
    </div>
  )
}

export default Header
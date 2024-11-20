import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logos} width={100} />
        <p className='flex-1 border-l border-gray-500 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Kode-Pictures | All Rights Reserved.</p>
        <div className="flex gap-2.5">
            <img src={assets.facebook_icon} width={35} />
            <img src={assets.twitter_icon} width={35} />
            <img src={assets.instagram_icon} width={35} />
        </div>
    </div>
  )
}

export default Footer
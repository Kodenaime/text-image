import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Generate = () => {

  const {user} = useContext(AppContext)

  const navigate = useNavigate()

  const clickHandler = () => {
        if(user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
  }

  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6'>Want to experience it? Try now</h1>
        
        <button onClick={clickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-lg bg-black text-white m-auto hover:scale-1-5 transition-all duration-500'>Generate images
            <img src={assets.star_group} className='h-6' alt="" />
        </button>
    </div>
  )
}

export default Generate
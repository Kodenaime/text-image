import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)

  const [imageLoaded, setImageLoaded] = useState(false)

  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState('')

  const submitHandler = async (e) => {

  }

  return (
    <motion.form onSubmit={submitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'
    initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity: 1, y:0}} viewport={{once: true}}>
      <div>
        <div className="relative">
            <img src={image} className='max-w-sm rounded' />
            <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 $ {loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading...</p>
      
      </div>

      {
        !imageLoaded &&   <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
            <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder='describe image you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 place-holder' />
              <button type='submit' className='bg-zinc-700 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
        </div>
      }

      {
        imageLoaded &&  <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-lg">
                <p onClick={() => {setImageLoaded(false)}} className='bg-transparent border border-zinc-700 text-black px-8 py-3 rounded-lg cursor-pointer btner-1'>Generate Another</p>
                <a href={image} download className='bg-zinc-700 px-10 py-3 rounded-lg cursor-pointer btner-2'>Download</a>
        </div>

      }

     
    </motion.form>
  )
}

export default Result

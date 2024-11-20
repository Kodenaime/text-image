import React from 'react'
import { assets } from '../assets/assets'

const Describe = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create images with Kode-Pictures</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into  Stunning visuals</p>

        <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
            <img src={assets.sample_img_1} className='w-80 xl:w-94 rounded-lg' />
            <div className="">
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing Kode-Pictures an AI-Powered Text to Image Converter</h2>
                <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life.</p>
                <p className='text-gray-600'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly.Kode-Pictures powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>

    </div>
  )
}

export default Describe
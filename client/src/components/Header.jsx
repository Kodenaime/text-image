import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {user, setShowLogin} = useContext(AppContext)

    const navigate = useNavigate()

    const clickHandler = () => {
        if(user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' 
    initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} >

        <motion.div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-lg border border-neutral-500"
        initial={{opacity:0, y:-20}}  animate={{opacity: 1, y:0}} transition={{delay: 0.4, duration:1}}>
            <p>Kode-Pictures - Best way to generate text to image</p> 
            <img src={assets.star_icon} alt="" />
        </motion.div>
        <h1 className='text-4xl max-w-[300px] sm:text-5xl sm:max-w-[590px] mx-auto mt-10 text-center'>Convert text to <span className='text-blue-600'>images</span> , in seconds.</h1>

        <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with the help of AI. Turn your imagination into visual art in seconds – just type, and create magic.</p>

        <button onClick={clickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex itms-center gap-2 rounded-lg'>
            Generate Images  <img className='h-6' src={assets.star_group} /> 
        </button>

        <div className="flex flex-wrap justify-center mt-16 gap-3">
            {
                Array(6).fill('').map((item, index) => (
                    <img className='rounded hover:scale-106 transition-all duration-400 cursor-pointer max-sm:w-10' src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} key={index} width={70} />
                ) )
            }
        </div>

        <p className='mt-3 text-neutral-600'>Generated images from Kode-Pictures</p>

    </motion.div>
  )
}

export default Header
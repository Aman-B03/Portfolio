import React from 'react'
import Sidebar from './Sidebar'
// import image from '../assets/pp.png'
import image from '../assets/Myphoto.jpg'
import TypingText from './TypingText'

const Home = () => {
  return (
    <div className='flex justify-between '>
      <Sidebar/>
        <span className="about mt-16 text-white flex flex-col gap-12 w-[25vw]"><span className='text-3xl font-semibold'>My Brief Introduction .</span><TypingText/></span>
        <span className="image w-[25vw] mt-16 imgAnimate"><img src={image} alt="" className='w-[50%] rounded-full object-contain'/></span>
    </div>
  )
}

export default Home

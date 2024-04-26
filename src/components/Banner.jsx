import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[24px]'>
                Learn with us.
            </div>
            <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            <div className=' text-[20px] md:text-[50px] md:p-[24px] text-white '>
                Learn    
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={["Web Devlopment","App devlopment","Ethical Hacking"]} 
                typeSpeed={100}
                 backSpeed={50}
                 loop={true}/>
            </div>
            <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
        </div>
    </div>
  )
}

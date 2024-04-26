import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toogle,setToogle]= useState(false)
  return (
    <div className = "bg-[#2699fb] p-4">
        <div className="max-w-[1240px]  items-center py-[12px] flex justify-between mx-auto">
            <div className='text-3xl'>
             Company
            </div>
            {
                !toogle ?
            
            <AiOutlineMenu onClick={()=>setToogle(!toogle)} className='text-white text-2xl md:hidden block '/>
            :
            <AiOutlineClose onClick={()=>setToogle(!toogle)}  className='text-white text-2xl md:hidden block '/>
            }
            <ul className='hidden md:flex text-white gap-10'>
                <li>
                    Home
                </li>
                <li>
                    Company
                </li>
                <li>
                   Resources
                </li>
                <li>
                    About
                </li>
                <li>
                   Contact
                </li>
            </ul>
            {/* Responsive Menu */}
            <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px]  
                 ${toogle ? `left-[0]`:`left-[-100%]` }
                 `}>
                <li className='p-5'>
                    Home
                </li>
                 <li className='p-5'>
                    Company
                </li>
                 <li className='p-5'>
                   Resources
                </li>
                 <li className='p-5'>
                    About
                </li>
                 <li className='p-5'>
                   Contact
                </li>
                </ul>
        </div>
    </div>
  )
}

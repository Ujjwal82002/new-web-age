import React from 'react'
import laptop from '../assets/image/laptop.jpg'

export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto  my-10  md:grid grid-cols-2'>
    <div className='col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt='/' className='inline'/>
    </div>
    <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>
            Development dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
        </p>
        <button className='bg-black inline w-[30%] text-white p-3 rounded'>Get Started</button>
    </div>
    </div>
  )
}

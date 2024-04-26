// import React from 'react'

// export default function Plans() {
//   return (
//     <div className='py-[100px] px-2'>
//         <div className=' max-w-[1240px] mx-auto md:grid grid-cols-3  gap-6'>
//         <div className='shadow-2xl h-[500px] hover:scale-105 duration-500 my-4'>First</div>   
//         <div className='shadow-2xl h-[500px] bg-gray-100 my-4 hover:scale-105 duration-500 '>Second</div>   
//         <div className='shadow-2xl h-[500px] my-4 hover:scale-105 duration-500 '>Third</div>   
//         </div>
//     </div>
//   )
// }
import React from 'react';
import Single from '../assets/image/single.png'
import Double from '../assets/image/double.png'
import Triple from '../assets/image/triple.png'

const Plans = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Devlopment is simply </p>
                        <p className='py-2 border-b mx-8'>Devlopment is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Devlopment is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-2 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Devlopment is simply </p>
                        <p className='py-2 border-b mx-8'>Devlopment is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Devlopment is simply dumm.</p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Devlopment is simply </p>
                        <p className='py-2 border-b mx-8'>Devlopment is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Devlopment is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Plans;

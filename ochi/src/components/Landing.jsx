import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
          <div className='textstructure mt-52 px-20'>
            {["We create", "eye-opening","presentations"].map((item,index)=>{
                return  <div className="masker">
                    <div className='w-fit flex items-center'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1],  duration: 1}} className='w-[8.6vw] h-[5.2vw] relative mt-12 mr-[1vw] -top-[0.7vw] '>
                          <img className='rounded-lg object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAAuwIRWHYOtTjpvnPtXy7Pju3GJBESI-yPa7WDfZdBujT0tE" alt="" />
                        </motion.div> )}
                     <h1 className="flex  items-center uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Test Founders'] font-bold ">
                        {item}
                         </h1>
            </div></div>
            })}
          </div> 
          <div className='border-t-[1px] border-zinc-700 mt-40 flex justify-between items-center py-5 px-20'>
          {["For public and private compnies","From the first pitch to IPO"].map((item)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
          <div className='start flex items-center gap-5'> 
            <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase '>start the project </div>
          <div className='w-10 h-10 border-[2px] border-zinc-500 rounded-full flex justify-between items-center px-3'>
            <span className='rotate-[45deg]'>
            <FaLongArrowAltUp/>
            </span>
             </div>
    </div>
    </div></div>
  )
}


export default Landing
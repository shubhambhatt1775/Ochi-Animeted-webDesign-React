import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  return (
    <div className='w-full h-screen b g-zinc-900 pt-1'>
          <div className='textstructure mt-52 px-20'>
            {["We create", "eye-opening","presentations"].map((item,index)=>{
                return  <div className="masker over bg-red-600">
                    <div className='w-fit flex items-center'>
                        {index === 1 && (<div className='w-[9vw] h-[6vw] relative mx-2 -top-[1vw] bg-red-600'></div> )}
                     <h1 className="flex items-center uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Test Founders'] font-semibold">
                        {item}
                         </h1>
            </div></div>
            })}
          </div> 
          <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
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
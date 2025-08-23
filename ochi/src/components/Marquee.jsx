import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
   
  return (
    <div className='w-full py-20 bg-[#004d40] rounded-tl-3xl rounded-tr-3xl'>
        
        <div className='text border-t-2 border-b-2 border-zinx-300 flex whitespace-nowrap overflow-hidden '>

            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-["Test Founders" font-bold uppercase  pt-10 -mb-10 ]'>We Are Ochi  </motion.h1>
            
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-["Test Founders" font-bold uppercase ml-10 pt-10 -mb-80 ]'>We Are Ochi  </motion.h1>

            
        </div>
    </div>
  )
}
//Test Founders
export default Marquee
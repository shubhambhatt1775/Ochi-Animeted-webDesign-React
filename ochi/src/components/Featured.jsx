import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Power1 } from 'gsap/all';

function Featured() {
const [isHovering,setHovering] = useState(false);
const [a,b] = useState(false);
    // const handleHover=()=>{
    //     alert("hovered");
    // }
   
    return (
        <div data-scroll data-scroll-section className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal"] traking-tight'>Featured Project</h1></div>

            <div className='px-20'>
                <div className="cards w-full flex gap-7 mt-10">

                    <div onMouseEnter={()=> setHovering(true)} onMouseLeave={()=>setHovering(false)} className="relative cardcontainer w-1/2 h-[60vh]">
                        <h1 className='absolute flex left-full overflow-hidden -translate-x-[50%] top-1/2 -translate-y-1/2 text-8xl font-["Test Founders"] font-bold trackig-tight text-[#cdae68] z-[10]'>
                        {"FYDE".split("").map((item,index)=><motion.span initial={{y:"100%"}} 
                        animate={isHovering ? ({y:"0%"}) : ({y:"100%"})} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.06 }}
                        className='inline-block' >{item}</motion.span>)}
                        </h1>

                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover'  src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                        </div>

                    </div>

                    <div onMouseEnter={()=> b(true)} onMouseLeave={()=>b(false)} className="relative cardcontainer w-1/2 h-[60vh] ">
                     <h1 className='absolute flex  w-full right-full -translate-x-[-50%] top-1/2 -translate-y-[50%] text-8xl font-["Test Founders"] font-bold trackig-tight text-[#CDAE68] z-[10] uppercase overflow-hidden' >{"Medallia ".split("").map((item,index)=><motion.span 
                     initial={{y:"100%"}} 
                        animate={a ? ({y:"0%"}) : ({y:"100%"})} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.06 }}
                        className='inline-block' >{item}</motion.span>)}
                     
                     </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Featured
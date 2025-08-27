import React, { useEffect, useState } from 'react'

function Eyes() {
            useState(0);
            const [rotate,setRotate] = useState(0);

            useEffect(() => {
               window.addEventListener('mousemove', (e) => {
                let mouseX = e.clientX;
                let mouseY = e.clientY;

                let deltaX =mouseX - window.innerWidth/2 ;
                let deltaY =mouseY - window.innerHeight/2 ;

                var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
                setRotate(angle-180);
            })})
  return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>


            <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-0%, -0%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  '>
                <div className='w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-zinc-100'></div>
                </div>
                 </div>
            </div>

             <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
               <div style={{transform:`translate(-0%, -0%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  '>
                <div className='w-2 h-2 sm:w-5 sm:h-5 rounded-full bg-zinc-100 '></div>
                </div>
                 </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Eyes
import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100'>
                <div className='flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
                 <div className='w-1/4 h-1/4 rounded-full bg-zinc-100'></div>
                </div>
            </div>
             <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100'>
                <div className='flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
                 <div className='w-1/4 h-1/4 rounded-full bg-zinc-100'></div>
                </div>
             </div>
        </div>
        </div>

    </div>
  )
}

export default Eyes
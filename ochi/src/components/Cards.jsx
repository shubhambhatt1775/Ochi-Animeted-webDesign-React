import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center gap-5 px-20 '>
        <div className='cardcontainer w-full h-[60vh] flex gap-5 px-10'>
            <div className='relative card rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center'>
                <img className=' ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute top-[80%] left-[4%] border-[2px] rounded-3xl px-4 py-1 text-md  text-[#cdea68]'>&copy; 2019-2025</button>
            </div>
             <div className='relative card flex justify-center items-center rounded-xl w-1/2 h-full bg-[#192826]'>
                 <img className=' ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute top-[80%] left-[4%] border-[2px] rounded-3xl px-4 py-1 text-md  text-white'>RATING 5.0 ON CLUTCH</button>
             </div>
            <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex justify-center items-center'>
                 <img className='w-1/4 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute top-[80%] left-[4%] border-[2px] rounded-3xl px-4 py-1 text-md  text-white'>Business Bootcamp Alumni</button>
            </div>
        </div>

    </div>
  )
}

export default Cards
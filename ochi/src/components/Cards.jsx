import React from 'react'

function Cards() {
  return (
    <div className='w-full min-h-screen bg-zinc-100 flex items-center px-6 md:px-20 py-10'>
      <div className='cardcontainer w-full flex flex-col md:flex-row gap-6 md:gap-5'>

        {/* First Card */}
        <div className='relative card rounded-xl w-full md:w-1/2 h-[40vh] md:h-[60vh] bg-[#004d43] flex justify-center items-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo 1" className='w-1/3 md:w-1/4' />
          <button className='absolute bottom-4 left-4 border-2 rounded-3xl px-4 py-1 text-sm md:text-md text-[#cdea68]'>&copy; 2019-2025</button>
        </div>

        {/* Right Section containing 2 stacked cards */}
        <div className='flex flex-col w-full md:w-1/2 gap-6 md:gap-5'>
          {/* Second Card */}
          <div className='relative card rounded-xl w-full h-[30vh] md:h-[29vh] bg-[#192826] flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo 2" className='w-1/3 md:w-1/4' />
            <button className='absolute bottom-4 left-4 border-2 rounded-3xl px-4 py-1 text-sm md:text-md text-white'>RATING 5.0 ON CLUTCH</button>
          </div>

          {/* Third Card */}
          <div className='relative card rounded-xl w-full h-[30vh] md:h-[29vh] bg-[#192826] flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo 3" className='w-1/4 md:w-1/6' />
            <button className='absolute bottom-4 left-4 border-2 rounded-3xl px-4 py-1 text-sm md:text-md text-white'>Business Bootcamp Alumni</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cards

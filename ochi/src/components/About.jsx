import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue Montreal"] text-[3vw] leading-[3vw]'>
            We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.lorem ipsum dolor sit amet

        </h1>
        <div className='w-full flex gap-5 border-t-[1px] border-[#a1b562] pt-10 mt-15'>
            <div className='w-1/2 '>
             <h1 className='text-6xl '>How we can help:</h1>
             <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white uppercase'>Read more
                <div className='w-2 h-2 bg-zinc-100 rounded-full   '></div>
             </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#a1b562]'></div>
        </div>
    </div>
  )
}

export default About

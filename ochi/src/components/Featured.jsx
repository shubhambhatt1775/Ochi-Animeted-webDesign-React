import React, { useState } from 'react'
import { motion } from 'framer-motion';

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [a, b] = useState(false);

  return (
    <div data-scroll data-scroll-section className='w-full py-10 md:py-20'>
      {/* Heading */}
      <div className='w-full px-6 md:px-20 border-b border-zinc-700 pb-10 md:pb-20'>
        <h1 className='text-3xl md:text-6xl lg:text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Project</h1>
      </div>

      {/* Cards Section */}
      <div className='px-6 md:px-20'>
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-7 mt-6 md:mt-10">

          {/* First Card */}
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative cardcontainer w-full md:w-1/2 h-[40vh] md:h-[60vh]"
          >
            <h1 className='absolute flex left-1/2 md:left-full -translate-x-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-["Test Founders"] font-bold tracking-tight text-[#cdae68] z-[10] whitespace-nowrap overflow-hidden'>
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="FYDE" />
            </div>
          </div>

          {/* Second Card */}
          <div
            onMouseEnter={() => b(true)}
            onMouseLeave={() => b(false)}
            className="relative cardcontainer w-full md:w-1/2 h-[40vh] md:h-[60vh]"
          >
            <h1 className='absolute flex w-full left-[75%] md:left-[10%] -translate-x-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-["Test Founders"] font-bold tracking-tight text-[#CDAE68] z-[10] uppercase whitespace-nowrap overflow-hidden'>
              {"Medallia".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={a ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="Medallia" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured

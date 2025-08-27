import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  const lines = ["We create", "eye-opening", "presentations"];

  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      {/* Headline */}
      <div className="textstructure px-6 sm:px-10 md:px-16 lg:px-20 mt-28 sm:mt-36 md:mt-44 lg:mt-52">
        {lines.map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
               <motion.div
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
  className="
    relative mt-3 md:mt-12 mr-[2vw] md:mr-[1vw]
    -top-[1vw] md:-top-[0.7vw]
    
    /* Default (mobile) */
    w-[2.5em] h-[4.em]    

    /* Small screens */
    sm:w-[3em] sm:h-[1em]

    /* Tablets */
    md:w-[3.5em] md:h-[1em]

    /* Laptops → height matches text, width ≈ 2 letters */
    lg:w-[3.5em] md:h-[7em]

    /* XL desktops */
    xl:w-[2.2em] xl:h-[1em]
  "
>
  <img
    className="rounded-lg object-cover w-full h-full"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAAuwIRWHYOtTjpvnPtXy7Pju3GJBESI-yPa7WDfZdBujT0tE"
    alt="decorative"
    loading="lazy"
  />
</motion.div>

              )}

              <h1
                className="
                  flex items-center uppercase tracking-tighter font-['Test Founders'] font-bold
                  text-[12vw] leading-[11vw]     /* mobile */
                  sm:text-[10vw] sm:leading-[9vw] /* small screens */
                  md:text-[7vw] md:leading-[6vw]  /* md+ */
                "
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-700 mt-16 md:mt-40 py-5 px-6 sm:px-10 md:px-16 lg:px-20
                      flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between md:items-center">
        {["For public and private companies", "From the first pitch to IPO"].map((item, i) => (
          <p key={i} className="text-sm md:text-base font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-4 md:gap-5">
          <button className="px-5 py-2 border border-zinc-500 rounded-full font-light text-xs md:text-sm uppercase hover:bg-zinc-100 cursor-pointer transition hover:text-zinc-900">
            start the project
          </button>

          <div className="w-10 h-10 border-2 border-zinc-500 rounded-full flex justify-center items-center hover:bg-zinc-100 cursor-pointer transition hover:text-zinc-900">
            <span className="rotate-[45deg]" aria-hidden>
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

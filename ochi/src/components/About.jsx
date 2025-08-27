import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='font-["Neue Montreal"] 
                   text-[6vw] leading-[7vw] 
                   sm:text-[4vw] sm:leading-[4.5vw] 
                   md:text-[3vw] md:leading-[3vw]'
      >
        We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership. 
        Lorem ipsum dolor sit amet.
      </motion.h1>

      {/* Content Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-5 border-t border-[#a1b562] pt-10 mt-10">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">How we can help:</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-between gap-6 sm:gap-10 
                       px-6 sm:px-10 py-4 sm:py-6 
                       bg-zinc-900 mt-8 sm:mt-10 
                       rounded-full text-white uppercase text-sm sm:text-base"
          >
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-3xl bg-[#a1b562] overflow-hidden"
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="About visual"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;

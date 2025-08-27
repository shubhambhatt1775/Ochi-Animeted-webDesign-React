import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white px-6 md:px-20 py-16 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
        
        {/* Left Section */}
        <div className='md:w-1/2 font-["Test Founders"]'>
          <div className="heading">
            <h1 className="text-[10vw] md:text-[6vw] font-semibold leading-none uppercase">
              Eye-
            </h1>
            <h1 className="text-[10vw] md:text-[6vw] font-semibold leading-none uppercase">
              Opening
            </h1>
          </div>

          {/* Decorative SVG
          <svg
            className="mt-6 md:mt-10 w-12 md:w-20 text-gray-300"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.8393 10.2032C4.22951..." fill="currentColor"></path>
            <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
            <path d="M67.6816 0.172852V6.13439..." fill="currentColor"></path>
            <path d="M31.5648 25.7016C28.5393..." fill="currentColor"></path>
            <path d="M52.4097 10.1387C51.2512..." fill="currentColor"></path>
          </svg> */}
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-[10vw] md:text-[6vw] font-semibold leading-none uppercase">
            Presentation
          </h1>

          <div className="mt-8 space-y-3">
            <a
              href="#"
              className="block text-lg font-light hover:text-blue-400 transition"
            >
              Facebook
            </a>
            <a
              href="#"
              className="block text-lg font-light hover:text-pink-400 transition"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block text-lg font-light hover:text-sky-400 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

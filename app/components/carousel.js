'use client';

import { useState, useEffect,useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const images = [
  '/nailset1.png',
  '/nailset2.png',
  '/nailset3.png',
  '/nailset4.png',
  '/nailset5.png',

]

export default function Carousel() {
  const [selectedImg,setSelectedImg] = useState(null);
  const carouselRef = useRef(null)
  const [constraint,setConstraint] = useState((-300 * (images.length - 4))
  )

  useEffect(()=>
  {
    const updateConstraint = () =>
    {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setConstraint(-400 * (images.length - 1)); // Smaller constraint for mobile
      } else {
        setConstraint(-350 * (images.length - 1)); // Larger constraint for desktop
      }
    };
    updateConstraint();
    window.addEventListener("resize", updateConstraint);
    return () => window.removeEventListener("resize", updateConstraint);
  }, [images.length]);


  const scrollLeft = () => {
    if(carouselRef.current)
    {
      carouselRef.current.scrollBy({left:-300, behavior:"smooth"})
    }
  }

  const scrollRight = () => {
    if(carouselRef.current)
    {
      carouselRef.current.scrollBy({left:300, behavior:"smooth"})
    }
  }

  return (
    <div className="relative w-11/12 mx-auto overflow-hidden pt-4  px-4  ">
      {/* Title */}
      <div className='text-black py-4 relative '>
        <h1 className='text-black font-extrabold text-4xl  leading tight '>SHOWCASE</h1>
        <p className='-mt-2'><a className='underline' href="https://www.instagram.com/nailsx.kv/">
        More at @nailsx.kv
          </a></p>

      </div>
      {/* Carousel */}
      <motion.div 
        className="flex gap-4 w-screen  " 
        ref={carouselRef}
        drag="x"
        // dragConstraints={{ left: -420 * (images.length -1), right: 0 }}
        dragConstraints={{ left: constraint, right: 0 }}
      >
        {images.map((src, index) => (
          <motion.div key={index} className="flex-none w-11/12 lg:w-min  cursor-pointer" whileTap={{ scale: 0.95 }}>
            <div


            className='w-full h-128 lg:h-128 lg:w-128 relative overflow-hidden my-4 ' //my-4 if you change this val change the transform value for the buttons since they effect one another
            >
              <Image
                src={src}
                alt="carousel image"
                height={0}
                width={600}
                //  layout="fill"
                className="bg-cover object-cover w-full h-full"
                onClick={() => setSelectedImg(src)}
              />

            </div>
            
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Buttons */}
      {/* <button onClick={scrollLeft} className="absolute  top-1/2 translate-y-8   bg-white p-2 rounded-full shadow-md">◀</button>
      <button onClick={scrollRight} className="absolute right-0 top-1/2 translate-y-8  bg-white p-2 rounded-full shadow-md">▶</button> */}

      {/* Enlarged Image Modal */}
      {selectedImg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setSelectedImg(null)}>
          <Image src={selectedImg} alt="enlarged" width={600} height={400} className="rounded-lg" />
          <button></button>
        </div>
      )}
    </div>
  );
}

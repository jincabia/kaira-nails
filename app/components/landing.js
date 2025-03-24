'use client'
import Image from 'next/image'

export default function Landing() {
  return (
    <main>
      {/* Mobile View (Single Image with Overlay & Centered Text) */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Image */}
          <Image
            src="/nailset10.png"
            alt="Nail Set 1"
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center z-10">
            <div>
              <h1 className="text-white text-2xl font-bold text-center pt-24  items-center justify-center ">
                CERTIFIED + HOME BASED
              </h1>
              <h1 className="text-white text-2xl font-bold text-center  items-center justify-center ">
                YYC
              </h1>

            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Larger View (2 Images) */}
      <div className="hidden md:flex">
        {/* First Image */}
        <div className="relative w-1/2">
          <Image
            src="/nailset10.png"
            alt="Nail Set 1"
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-white text-2xl font-bold text-center">
              Luxury Nails
            </h1>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative w-1/2">
          <Image
            src="/nailset9.png"
            alt="Nail Set 2"
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-white text-2xl font-bold text-center">
              Elegant Styles
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

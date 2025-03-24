'use client'
import Image from 'next/image'

export default function Landing() {
  return (
    <main>
      {/* Mobile View (Single Image with Overlay & Centered Text) */}
      <div className="block md:hidden">
        <div className="relative w-full h-screen">
          {/* Image */}
          <Image
            src="/nailset10.PNG"
            alt="Nail Set 10"
            fill
            className="object-cover"
            priority
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h1 className="text-white text-2xl font-bold">
                CERTIFIED + HOME BASED
              </h1>
              <h1 className="text-white text-2xl font-bold">
                YYC
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Larger View (2 Images) */}
      <div className="hidden md:flex h-screen">
        {/* First Image */}
        <div className="relative w-1/2 h-full">
          <Image
            src="/nailset10.png"
            alt="Nail Set 10"
            fill
            className="object-cover"
            priority
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-2xl font-bold text-center">
              Luxury Nails
            </h1>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative w-1/2 h-full">
          <Image
            src="/nailset9.png"
            alt="Nail Set 2"
            fill
            className="object-cover"
            priority
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-2xl font-bold text-center">
              Elegant Styles
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

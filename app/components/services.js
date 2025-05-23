'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'GEL-X',
    price: '$60',
    image: '/nailset1.png',
    disclaimer:true,
    addOns: [
      { name: 'French Tips', price: '$15' },
      { name: 'Airbrush', price: '$12' },
      { name: 'Chrome', price: '$10' },
      { name: 'Art', price: '$2' }
    ]
  },
  {
    title: 'REMOVALS',
    price: '$10-$20',
    image: '/nailset8.PNG',
    disclaimer:'',
    addOns: [
      { name: 'Gel-x (Returning Customer)', price: '$10' },
      { name: 'Gel-x', price: '$15' },
      { name: 'Foreign Gel-x', price: '$20' },
      { name: 'Acrylic Gel', price: '$20' }
    ]
  }
]

export default function Services() {
  const [expanded, setExpanded] = useState({})

  const toggleExpand = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <div className="p-6 mx-auto text-black max-w-4xl ">
      <h1 className="font-bold text-3xl sm:text-4xl pb-4">MY SERVICES</h1>

      {services.map((service) => (
        <div key={service.title} className="bg-[#FFF8F0] p-4 rounded-lg shadow-md mb-4">
          {/* Service Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-lg">{service.title}</h1>
              <p className="text-gray-700 font-semibold">{service.price}</p>
            </div>
            <Image src={service.image} width={80} height={80} alt={`${service.title} Example`} />
          </div>

          {/* Expandable Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={expanded[service.title] ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gray-200 mt-3"
          >

            {service.disclaimer && 
                    <a href="https://www.instagram.com/nailsx.kv/">
                      <h2 className="font-bold text-md pt-3 uppercase">
                        ADD-ONS ~ Please ask for a quote
                      </h2>
                      
                      <p className='-mt-2 underline'>
                        @nailsx.kv
                      </p>
                    </a>
            }
            
            <ul className="mt-2">
              {service.addOns.map((addOn, index) => (
                <div key={index}>

                  


                  <li  className="list-disc list-inside text-gray-800">

                    

                    

                    {addOn.name}  +{addOn.price}
                  </li>
                </div>
              ))}
            </ul>
          </motion.div>

          {/* Toggle Button */}
          <div className={`flex justify-center  ${expanded[service.title] ? '' : 'border-t-2 border-black/5'}`}>
            <Image
              src="/dropdown.svg"
              width={40}
              height={40}
              alt="Drop Down Button"
              className={`cursor-pointer transform transition-transform ${
                expanded[service.title] ? 'rotate-180' : ''
              }`}
              onClick={() => toggleExpand(service.title)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

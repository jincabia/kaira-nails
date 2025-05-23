'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const policies = [
  {
    title: 'BOOKING POLICY',
    image: '/nailset14.png',
    desc: [
      'All bookings are made through DM on Instagram.',
      'Cancellation within 48hours of your appointment, will result in a forfeited deposit.',
      '$10 late fee.',
      'Appointment will be cancelled after the 15 minute grace period.',
    ]
   
  },
  {
    title: 'DEPOSIT POLICY',
    image: '/nailset20.PNG',
    desc: [
      '$15 deposit is required (e-transfer)',
      'Deposit must be sent at the time of booking to secure spot',
      'Deposits are non-refundable after the 48 hour mark.',
      'No Deposiot = No appointment!!',
    ]
    
  }
]

export default function Policies() {
  
  

  return (
    <div className="p-6 mx-auto text-black max-w-4xl ">
      <h1 className="font-bold text-3xl sm:text-4xl pb-4">POLICIES</h1>

      {policies.map((policy) => (
        <div key={policy.title} className="bg-[#FFF8F0] p-4 rounded-lg shadow-md mb-4">
          {/* policy Header */}
          <div className=" justify-between items-center">
            <div>
              <h1 className="font-bold text-lg">{policy.title}</h1>
            </div>
            <div className="">
              {policy.desc.map((item, index) => (
                <li key={index} className="text-gray-700 py-2 list-none  ">
                  {item}
                </li>
              ))}
            </div>
          </div>

          
        </div>
      ))}
    </div>
  )
}

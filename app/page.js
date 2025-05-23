'use client'
import { useState, useEffect } from 'react';

import Image from 'next/image'
import Header from './components/header';
import Landing from './components/landing';
import Carousel from './components/carousel';
import Services from './components/services';
import BookNow from './components/booknow';

import Policies from './components/policies';
export default function Home() {

  // const [schedules, setSchedules] = useState([]);

  // useEffect(() => {
  //   fetch('/api/schedules')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('Schedules:', data);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching schedules:', err);
  //     });
  // }, []);
  

  return (
    <main
      className="min-h-screen"
      style={
        { backgroundColor: "#F2D3DE",
         fontFamily: "var(--font-cormorant-garamond)" }
            } // Light Cream
    >
      <Header />
      <Landing/>
      <div className='bg-[#F2D3DE] pb-20'>
        {/* <Carousel/> */}
        <Carousel/>
      </div>
      <div>
        <Services/>
      </div>
      {/* <BookNow/> */}
      {/* <Schedules/> */}
      <Policies/>
    </main>
  );
}

// Book now for availability
// Primary	Soft Pink	#FF93AC
// Background	Light Cream	#FFF8F0
// Surface	Warm White	#FDFDFD
// Text Primary	Charcoal Gray	#333333
// Text Secondary	Soft Warm Gray	#666666
// Accent	Blush Rose	#FFB6C1
// Support (borders, dividers)	Light Beige	#E8D5C4
// Interactive (buttons, links hover)	Warm Coral	#FF647F

// Coramount Garamound for Headers, Titles 
// Lora for body text
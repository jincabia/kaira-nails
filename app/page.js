import Image from 'next/image'
import Header from './components/header';
import Landing from './components/landing';
import Carousel from './components/carousel';
import Services from './components/services';
export default function Home() {
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
      <div className='bg-[#F2D3DE]'>
        {/* <Carousel/> */}
        <Carousel/>
      </div>
      <div>
        {/* <Services/> */}
      </div>
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
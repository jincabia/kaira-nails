import Image from 'next/image'
import Header from './components/header';
import Landing from './components/landing';
export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={
        { backgroundColor: "#FFC1EF",
         fontFamily: "var(--font-cormorant-garamond)" }
            } // Light Cream
    >
      <Header />
      <Landing/>
      <div
        className="p-8 rounded-2xl shadow-lg text-center"
        style={{ backgroundColor: "#FDFDFD", color: "#333333" }} // Warm White surface & Charcoal Gray text
      >
        <h1 className="text-3xl font-bold mb-4" style={{ }}>
          Welcome to Our Salon & Bakery
        </h1>
        <p className="text-lg mb-6" style={{ color: "#666666" }}> 
          Indulge in beauty and sweetness all in one place.
        </p>
        <button
          className="px-6 py-3 rounded-lg font-semibold transition-all bg-[#FF647F] text-[#FDFDFD] border-2 border-[#E8D5C4] hover:bg-[#FF93AC]"
        >
          Book an Appointment
        </button>
        <Image
      src="/nailset4-removebg-preview.png"
      width={200}
      height={200}
      alt="Picture of the author"
    />
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
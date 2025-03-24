import Image from 'next/image'

export default function Header() {
  return (
    <main
      className="min-x-screen py-4 text-black"
      style={{ backgroundColor: "#FFC1EF", fontFamily: "var(--font-cormorant-garamond)" }}
    >
      <div className='flex justify-center items-center text-center h-full '>
        <h1 className='text-2xl font-extrabold uppercase'>nailsx.kv</h1>
      
      </div>  
    </main>
  );
}

'use client'
import Image from "next/image"
 import { ImStarFull } from "react-icons/im";

const Hero = () => {
  return (
    <main className="w-full h-full md:h-[500px] flex-col md:flex md:flex-row justify-between items-start bg-[#F2F0F1] ">
   {/* left div start */}
   <div className="w-full pl-3 md:w-[500px] mt-3 md:mt-10 md:ml-10">
      <h1 className="text-2xl md:text-5xl font-extrabold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className="text-sm md:mt-3 ">
             Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
             style.
           </p>
           <button className="bg-[#000000] mt-4 rounded-[16px] py-2 px-8 text-sm text-white ">Shop Now</button>
      </div>
   {/* left div end */}

   {/* Right div start */}
<div className="relative">
  <Image  src='/Rectangle 2 (2).png' alt='img' className="w-[500px] mr-[15px]" width={200} height={200}/>
     <ImStarFull  size={50}  className="absolute  md:w-[200px] w-[60px] text-[#000000] md:top-[50px] md:right-[30px] right-[50px] top-[10px]"/> 
     <ImStarFull  size={50}  className="absolute md:w-[200px] w-[50px] text-[#000000] top-[100px] left-[10px] md:top-[300px] md:left-[-100px]"/> 
</div>
   {/* Right div end */}
    </main>
  )
}

export default Hero


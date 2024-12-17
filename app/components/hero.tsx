
 import { ImStarFull } from "react-icons/im";


// const Hero = () => {
//   return (
    
//     <div className="relative mt-[40px] bg-[#F2F0F1] max-w-[1240px] h-[663px] m-auto flex flex-row justify-between items-center">
// <div className="w-[400px] p-2 ">
//     <h1 className="font-bold text-4xl font-serif text-[#000000] leading-normal">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
//     <p className="bg-gray-100  leading-normal font-serif  text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
//     <button className="mt-[20px] font-bold text-xl font-serif text-[#ffffff] bg-[#000000] w-[210px] h-[52px] rounded-full">Shop Now</button>
//     </div>
// <div className="relative bg-red-600  flex flex-row w-[800px] justify-between items-center">
// <Image  src='/Rectangle 2 (2).png' alt='img'  width={700} height={400} className="w-[700px] h-[400px] p-3"/>
//  <ImStarFull  size={30}  className="absolute text-[#000000] "/> 
//  </div>
//     </div>
//   )
//  }

//  export default Hero


/////


const Hero = () => {
  return (

    <div className="relative bg-[#F2F0F1]">
    <div   className="p-3 " 
    style={{
      backgroundImage: "url('/Rectangle 2 (2).png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "1000px",
      height: "580px",
    }}>
      
      <ImStarFull size={30} className="absolute text-[#000000] ml-[600px] mt-[150px]"/> 
      <ImStarFull size={60} className="absolute text-[#000000] ml-[1100px] mt-[100px]"/> 
      <div className="w-[400px] p-2 mt-[100px] ml-[20px] ">
     <h1 className="font-bold text-4xl font-serif text-[#000000] leading-normal">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p className="bg-gray-100  leading-normal font-serif  text-sm w-[545px]  h-[33px] p-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <button className="mt-[40px] font-bold text-xl font-serif text-[#ffffff] bg-[#000000] w-[210px] h-[52px] rounded-full">Shop Now</button>
    </div>
 
 
    </div>
    </div>
  )
}

export default Hero


/////
// import React from 'react'

// const Hero = () => {
//   return (
//     <div className="">



//       <div className="relative bg-red-600 md:flex-col-reverse  flex flex-row w-[1170px] justify-between items-center">

//       <div className="w-[400px] p-2 absolute ">
//      <h1 className="font-bold text-4xl font-serif text-[#000000] leading-normal">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
//      <p className="bg-gray-100  leading-normal font-serif  text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
//      <button className="mt-[20px] font-bold text-xl font-serif text-[#ffffff] bg-[#000000] w-[210px] h-[52px] rounded-full">Shop Now</button>
//      </div>


//  <Image  src='/Rectangle 2 (2).png' alt='img'  width={900} height={800} className="w-[1170px] h-[500px] p-3"/>
//   <ImStarFull  size={30}  className="absolute text-[#000000] "/> 
//  </div>


//     </div>
//   )
// }

// export default Hero

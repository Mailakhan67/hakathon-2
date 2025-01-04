import { FaPlus } from "react-icons/fa6";
// import { ImCross } from "react-icons/im";

// const Navbar = () => {
//   return (
//     <div className="flex flex-row bg-[#000000] h-[38px] items-center justify-between px-4 sm:px-8">
//       {/* Left Text */}
//       <div className="flex-1 text-[#ffffff] text-center text-sm sm:text-base flex justify-center items-center">
//         Sign up and get 20% off to your first order
//         <span className="relative group cursor-pointer text-sm sm:text-lg ml-2 leading-normal">
//           Sign Up Now
//           <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//         </span>
//       </div>

//       {/* Right Icon */}
//       <div className="flex-shrink-0 text-[#ffffff] flex items-center justify-end">
//         <ImCross size={15} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from 'react'

const Navbar = () => {
  return (
    <main className=" bg-[#000] w-full h-[38px] flex  justify-center items-center relative">
<div className="flex justify-center items-center">
  <h3 className="text-white text-xs sm:text-sm "> Sign up and get 20% off to your first order.</h3>
  <button className="text-white ml-3 text-xs sm:text-sm">  Sign Up Now</button>
</div>
<FaPlus className="text-white absolute hidden sm:block right-[50px]  "/>
    </main>
  )
}

export default Navbar

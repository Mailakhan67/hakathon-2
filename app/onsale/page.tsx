import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { LiaSlidersHSolid } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import Image from "next/image";

import { FaStarHalf } from "react-icons/fa";


import { FaStar } from "react-icons/fa";


const page = () => {
  return (
    <div className='mt-[50px] lg:max-w-[1240px]  sm:m-auto'>

<div className="flex flex-row gap-x-[10px] ml-[5px]">
    <Link href={'/'} className="text-gray-600 hover:text-black text-lg font-serif">Home</Link>
    <Link href={'/'}><IoChevronForwardOutline size={20} className="text-gray-600 hover:text-black font-serif"/></Link>
    <Link href={'/'} className="text-gray-600 hover:text-black text-lg font-serif">On Sale</Link>
</div>

<div className=" lg:flex lg:flex-row lg:justify-between lg:items-start sm:items-center sm:flex sm:flex-col ">

{/* Left side section start max-h-[1220px] */}
<div className="w-[295px] h-full rounded-md p-3  mt-[30px] border border-gray-300">
  <div className="m-auto ">
{/* first div start */}
<div className="w-[247px] p-3 h-[27px] mt-[5px] flex flex-row justify-between items-center  m-auto">
<div className="font-bold font-serif text-2xl text-[#000000]">Filters </div>
<span><LiaSlidersHSolid size={30} className="text-gray-600 text-xl transform rotate-90"/></span>
</div>
<div className="w-[247px]  border-t-2 mt-[14px] bg-gray-400 ml-[11px]"></div>

{/* first div end */}

{/* 2nd div start */}
<div className="w-[247px] h-[160px] gap-y-[15px] py-3 flex flex-col ml-[11px] mt-[13px]">
  {/* 1 */}
  <div className="flex flex-row w-[247px] text-xl h-[16px] justify-between items-center text-gray-500 p-[3px]">
    <span className="">T-shirts</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
  </div>
 {/* 2 */}
 <div className="flex flex-row w-[247px] text-xl h-[16px] justify-between items-center  text-gray-500 p-[3px]">
    <span className="">Shorts</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
  </div>

   {/* 3 */}
 <div className="flex flex-row w-[247px] text-xl h-[16px] justify-between items-center  text-gray-500 p-[3px]">
    <span className="">Shirts</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
  </div>

   {/* 4 */}
 <div className="flex flex-row w-[247px] text-xl h-[16px] justify-between items-center text-gray-500 p-[3px]">
    <span className="">Hoodie</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
  </div>

   {/* 5 */}
 <div className="flex flex-row w-[247px] text-xl h-[16px] justify-between items-center  text-gray-500 p-[3px]">
    <span className="">Jeans</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
  </div>
</div>
{/* 2nd div end */}


<div className="w-[247px]  border-t-2 mt-[14px] bg-gray-400 ml-[11px]"></div>

{/* 3rd div start */}
<div className="w-[247px] h-[90px]  flex flex-col ml-[11px] mt-[13px]">
  {/* 1 */}
<div className="w-[247px] p-3 h-[27px] mt-[5px] flex flex-row justify-between items-center ">
<div className="font-bold font-serif text-xl text-[#000000]">Price </div>
<span><IoIosArrowUp size={25}/></span>
</div>

{/* 2 */}
<div className="w-[247px] h-[20px] relative">
  <div className="w-[247px] h-[8px]  mt-[8px] border-t-2 relative">
    <div className="w-[150.29px] h-[6px] ml-[15px] bg-black flex flex-row justify-between items-center absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
      <span className="w-[20px] h-[20px] rounded-full bg-black"></span>
      <span className="w-[20px] h-[20px] rounded-full bg-black"></span>
    </div>

<div className="w-[170px]  flex flex-row justify-between m-auto  text-xl mt-[8px]">
  <span className=" text-xl ">$50</span>
  <span className=" text-xl   ml-[15px]">$200</span>
</div>

  </div>
</div>
<div className="w-[247px]  border-t-2 mt-[48px] bg-gray-400 ml-[11px]"></div>

{/* 2 end*/}
</div>
{/*3rd  div end */}

{/* 4th  div start */}
<div className="w-[247px] h-[130px] ml-[10px]  mt-[19px]">

<div className="w-[247px] p-3 h-[27px] mt-[5px] flex flex-row justify-between items-center ">
<div className="font-bold font-serif text-xl text-[#000000]">Colors </div>
<span><IoIosArrowUp size={25}/></span>
</div>

<div className="w-[247px] grid grid-cols-5  mt-[8px] gap-y-[10px]">
  <div className="w-[37px] h-[37px] rounded-full bg-green-600 border border-gray-200"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#F50606] border border-gray-200"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border border-gray-200"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border border-gray-200"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5] border border-gray-200"></div>

  <div className="w-[37px] h-[37px] rounded-full bg-[#063AF5] border border-gray-200 flex flex-row justify-between items-center"><IoIosCheckmark size={30} className="text-white"/></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border border-gray-200"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4] border border-gray-200"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#FFFFFF] border border-gray-300"></div>
  <div className="w-[37px] h-[37px] rounded-full bg-[#000000] border border-gray-200"></div>
 
</div>

<div className="w-[247px]  border-t-2 mt-[30px] bg-gray-400 ml-[8px]"></div>
</div>
{/* 4th  div end */}

{/* 5th  div start */}
<div className=" w-[247px] mt-[26px] h-[274px]">
<div className="w-[247px] p-3 h-[27px] mt-[5px] flex flex-row justify-between items-center ">
<div className="font-bold font-serif text-xl text-[#000000]">Size</div>
<span><IoIosArrowUp size={25}/></span>
</div>


<div className="w-[247px] mt-[12px] h-[227px]">
  {/* 1 */}
  <div className="flex flex-row mt-[10px] gap-x-[6px]">
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">XX-Small</span>
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">X-Small</span>
  </div>
   {/* 1 */}

     {/* 2*/}
  <div className="flex flex-row mt-[10px] gap-x-[6px]">
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">Smal</span>
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">Medium</span>
  </div>
   {/* 2 */}
    {/* 3*/}
  <div className="flex flex-row mt-[10px] gap-x-[6px]">
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">Large</span>
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">X-Large</span>
  </div>
   {/* 3 */}
       {/* 4*/}
  <div className="flex flex-row mt-[10px] gap-x-[6px]">
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">XX-Large</span>
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">3X-Large</span>
  </div>
   {/* 4 */}
        {/* 4*/}
  <div className="flex flex-row mt-[10px] gap-x-[6px]">
    <span className="w-[88px] h-[39px] p-[2px] rounded-full hover:text-white hover:bg-black bg-[#F0F0F0] flex flex-col justify-center items-center">4X-Large</span>
    </div>
   {/* 4 */}
</div>

</div>
{/* 5th  div end */}
<div className="w-[247px]  border-t-2 mt-[30px] bg-gray-400 ml-[8px]"></div>

{/* 6th  div start */}
<div className="w-[247px] mt-[16px]  h-[171px] ml-[8px]">
<div className="w-[247px] p-3 h-[27px] mt-[5px] flex flex-row justify-between items-center ">
<div className="font-bold font-serif text-xl text-[#000000]">Dress Style</div>
<span><IoIosArrowUp size={25}/></span>
</div>


<div className="w-[247px] p-3 h-[124px]  mt-[8px] flex flex-col gap-y-[13px]">
  {/* 1 */}
<div className="w-[238px] h-[16px] flex flex-row text-xl  justify-between items-center mr-[6px] text-gray-500 p-[3px] ">
    <span className="">Shorts</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
</div>
{/* 1 end */}

  {/* 2 */}
  <div className="w-[238px] h-[16px] flex flex-row text-xl  justify-between items-center mr-[6px] text-gray-500 p-[3px]">
    <span className="">Formal</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
</div>
{/* 2 end */}
  {/* 3 */}
  <div className="w-[238px] h-[16px] flex flex-row text-xl  justify-between items-center mr-[6px] text-gray-500 p-[3px] ">
    <span className="">Party</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
</div>
{/* 3 end */}
  {/* 4 */}
  <div className="w-[238px] h-[16px] flex flex-row text-xl  justify-between items-center mr-[6px] text-gray-500 p-[3px] ">
    <span className="">Gym</span>
    <span className=""><IoChevronForwardOutline size={20} className=""/></span>
</div>
{/* 4 end */}
</div>
</div>
{/* 6th  div end */}

<div className="w-[247px] h-[48px]"><button className="w-[247px] h-[48px] rounded-full text-[#ffffff] bg-black">Apply Filter</button></div>


</div>

</div>
{/* Left side section end */}

{/* Right side section start */}
<div className="lg:w-[920px] sm:mt-[45px] lg:mt-0 h-full">
  <h1 className="text-2xl font-serif font-bold  ">Casual</h1>

{/* carts start */}
<div className="lg:w-[930px] sm:w-[450px] sm:mt-[25px] lg:mt-0 lg:gap-y-[0px] sm:gap-y-[50px] sm:grid  sm:grid-cols-2  h-full lg:grid  lg:grid-cols-3 sm:justify-between sm:items-center">

{/* 2nd cart start */}
<div className="lg:w-[295px] sm:w-[200px] lg:h-[444px] sm:h-[300px] lg:flex lg:flex-col mt-[33px] sm:m-auto">
<div className="lg:w-[295px] sm:w-[200px] lg:h-[298px] rounded-md ">
<Image  src='/cart-img-3.png' alt=''  width={285} height={290} className="p-3 rounded-md"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Gradient Graphic T-shirt</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">3.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$145
</h1>
</div>
</div>
{/* 2nd cart end */}

{/* 3rd cart start w-1240px] */}
<div  className="lg:w-[295px] sm:w-[200px] lg:h-[444px] sm:h-[300px] flex flex-col mt-[33px]  sm:m-auto">
<div className="lg:w-[295px] sm:w-[200px] h-[298px] rounded-md">
<Image  src='/cart-section-2.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Polo With Tipping Details</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">4.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$180 
</h1>
</div>
</div>
{/* 3rd cart end */}

{/* 4th cart start */}
<div className="lg:w-[295px]  sm:w-[200px] sm:h-[300px] lg:h-[444px] flex flex-col mt-[33px]  sm:m-auto">
<div className="sm:w-[200px] lg:w-[295px] h-[298px] rounded-md">
<Image  src='/cart-sec2-img3.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Black Striped T-shirt</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">5.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$120 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$150</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-30%</span>
</h1>
</div>
</div>
{/* 4th cart end */}



{/* 5th cart start */}
<div className="lg:w-[295px]  sm:w-[200px]  lg:h-[444px] sm:h-[300px] flex flex-col mt-[33px]  sm:m-auto">
<div className="lg:w-[295px] sm:w-[200px] h-[298px] rounded-md">
<Image  src='/cart-img-1.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Skinny Fit Jeans</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">5.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$120 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$150</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-30%</span>
</h1>
</div>
</div>
{/* 5th cart end */}
 

 {/* 6rd cart start */}
<div  className="lg:w-[295px]  sm:w-[200px] sm:h-[300px] lg:h-[444px] flex flex-col mt-[6px]  sm:m-auto">
<div className="lg:w-[295px] sm:w-[200px]  h-[298px] rounded-md">
<Image  src='/new-arrival-3.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Checkered Shirts</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">4.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$180 
</h1>
</div>
</div>
{/* 6rd cart end */}
 {/* 7th cart start */}
<div className="lg:w-[295px]  sm:w-[200px]  lg:h-[444px] sm:h-[300px] flex flex-col mt-[6px]  sm:m-auto">
<div className="lg:w-[295px] sm:w-[200px]  h-[298px] rounded-md">
<Image  src='/new-arrival-4.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Sleeve Striped T-shirt</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">5.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$120 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$150</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-30%</span>
</h1>
</div>
</div>
{/* 7th cart end */}

 {/* 8th cart start */}
 <div className="lg:w-[295px]  sm:w-[200px]  lg:h-[444px] sm:h-[300px] flex flex-col mt-[6px]  sm:m-auto">
<div className="lg:w-[295px]  sm:w-[200px] h-[298px] rounded-md">
<Image  src='/top-selling-1.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Vertical Striped Shirt</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">5.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$120 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$150</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-30%</span>
</h1>
</div>
</div>
{/* 8th cart end */}
 {/* 9rd cart start */}
 <div  className="lg:w-[295px]  sm:w-[200px]  lg:h-[444px] sm:h-[300px] flex flex-col mt-[6px]  sm:m-auto">
<div className="lg:w-[295px]  sm:w-[200px] h-[298px] rounded-md">
<Image  src='/top-selling-2.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Courage Graphis T-shirts</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">4.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$180 
</h1>
</div>
</div>
{/* 9rd cart end */}
 {/* 10rd cart start */}
 <div  className="lg:w-[295px]  sm:w-[200px]  lg:h-[444px] sm:h-[300px] flex flex-col mt-[6px]  sm:m-auto">
<div className="lg:w-[295px]  sm:w-[200px] h-[298px] rounded-md">
<Image  src='/top-selling-3.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Loose Fit Bermuda Shorts</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">4.5/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$180 
</h1>
</div>
</div>
{/* 10rd cart end */}

</div>


{/* carts end */}








</div>
{/*  Right side section end */}
</div>
    </div >
  )
}

export default page

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const Header2 = () => {
  return (
    <div className="w-full mt-[80px]">
        <h1 className="leading-normal font-serif font-bold text-3xl text-center text-[#000000]">TOP SELLING</h1>
      <div className="sm:ml-[20px] lg:max-w-[1240px] lg:grid  lg:grid-cols-4  lg:justify-evenly sm:grid  sm:grid-cols-2  sm:justify-evenly m-auto">

{/* first cart start */}
<div className="w-[295px] h-[444px] flex flex-col mt-[33px]">
<div className="w-[295px] h-[298px] rounded-md">
<Image  src='/top-selling-1.png' alt=''  width={295} height={298} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Vertical Striped Shirt</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">5.0/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$212 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$232</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-20%</span></h1>
</div>
</div>
{/* first cart end */}

{/* 2nd cart start */}
<div className="w-[295px] h-[444px] flex flex-col mt-[33px]">
<div className="w-[295px] h-[298px] rounded-md">
<Image  src='/top-selling-2.png' alt=''  width={295} height={298} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Courage Graphic T-shirt</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
   
    <span className="text-gray-600 ">4.0/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$145 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$260</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-20%</span>
</h1>
</div>
</div>
{/* 2nd cart end */}


{/*3rd cart start */}
<div className="w-[295px] h-[444px] flex flex-col mt-[33px]">
<div className="w-[295px] h-[298px] rounded-md">
<Image  src='/top-selling-3.png' alt=''  width={295} height={298} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Loose Fit Bermuda Shorts</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
   
    <span className="text-gray-600 ">3.0/5</span>
</p>
<h1 className="w-[55px] h-[32px] font-bold font serif leading-normal">$80</h1>
</div>
</div>
{/* 3rd cart end */}


{/* 4th cart start */}
<div className="w-[295px] h-[444px] flex flex-col mt-[33px]">
<div className="w-[295px] h-[298px] rounded-md">
<Image  src='/top-selling-4.png' alt=''  width={295} height={258} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">T-shirt With Tape Details</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStarHalf className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">4.5/5</span>
</p>


<h1 className="whitespace-nowrap w-[100px] h-[32px] font-bold font serif leading-normal">$210 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$160</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-30%</span></h1>
</div>
</div>
{/* 4th cart end */}
<button className="w-[218px] h-[52px] rounded-full border-2 border-gray-400 text-center  sm:mr-[0px] lg:mr-[0px] sm:ml-[180px] lg:ml-[500px] text-[#000000]">View All</button>
</div>
      </div>
  )
}

export default Header2

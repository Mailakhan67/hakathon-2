
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Page = () => {
  return (
    <div className="mt-[50px]">
      <div className="lg:w-[1190px] lg:h-[500px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-x-[20px] m-auto md:flex md:flex-col md:justify-between md:items-center">
        {/* left side section start */}
        <div className=" lg:w-[590px] flex flex-row justify-center items-center lg:h-[550px]">
          <div className="flex flex-col justify-center items-center">
          <Image  src='/product-img.png' alt='img'  width={152} height={167} className="w-[152px] h-[167px] p-3 "/>
            <Image src="/pro (2).png" alt="img" width={152} height={167} className="w-[152px] h-[167px] p-3" />
            <Image src="/pro (3).png" alt="img" width={152} height={167} className="w-[152px] h-[167px] p-3" />
          </div>
          <div className="w-[444px] h-[500px]">
            <Image src="/pro (1).png" alt="img" width={444} height={500} className="w-[444px] h-[500px] p-3" />
          </div>
        </div>
        {/* left side section end */}

        {/* right side section start */}
        <div className="lg:w-[500px] lg:h-[490px] mt-[10px] flex flex-col p-3 md:mt-[9px]">
          <h1 className="text-[#000000] font-bold font-serif text-3xl ">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex flex-row gap-x-[6px] p-3"><IoStarSharp size={25} className="text-yellow-600"/><IoStarSharp  size={25} className="text-yellow-600"/><IoStarSharp  size={25} className="text-yellow-600"/><IoStarSharp  size={25} className="text-yellow-600"/><FaStarHalf  size={25} className="text-yellow-600"/>
        <span className="text-gray-600 font-bold font-serif ">4.5/5</span> 
        </div>

        <h1 className="mt-[6px] text-[#000000] font-bold font-serif text-lg p-3">$260<span className="ml-[8px] text-gray-600 font-bold font-serif "></span> 
        <span className="text-red-500 w-[72px] h-[34px] rounded-full bg-red-100 ml-[15px]">-40%</span>
        </h1>
        <p className="lg:w-[490px] lg:h-[33px] text-gray-600 mt-[10px] p-3">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        


        <div className="flex flex-col mt-[25px] p-3">
          <div className="text-gray-600">Select Colors</div>
          <div className="lg:w-[143px] lg:h-[37px] flex flex-row gap-x-[10px] mt-[6px]"><TiTick className="text-white rounded-full lg:w-[37px] lg:h-[37px] bg-[#4F4631]"/> <TiTick className=" rounded-full lg:w-[37px] lg:h-[37px] bg-[#314F4A] text-[#314F4A]"/><TiTick className=" rounded-full lg:w-[37px] lg:h-[37px] bg-[#31344F] text-[#31344F]"/></div>
          
        </div>

        <div className="flex flex-col mt-[10px]  p-3">
          <div className="text-gray-600">Choose Size</div>
          <div className="lg:w-[420px] lg:h-[46px] flex flex-row gap-x-[10px] mt-[6px]"><span className="lg:w-[86px] lg:h-[46px] text-gray-500 rounded-lg bg-[#F0F0F0] flex justify-center items-center sm:p-2">Small</span><span className="lg:w-[86px] lg:h-[46px] text-gray-500 rounded-lg bg-[#F0F0F0] flex justify-center items-center">Medium</span><span className="lg:w-[86px] lg:h-[46px] text-gray-500 rounded-lg bg-[#000000] flex justify-center items-center">Large</span><span className="lg:w-[86px] lg:h-[46px] text-gray-500 rounded-lg bg-[#F0F0F0] flex justify-center items-center">X-Large</span></div>
      <div className="mt-[20px] flex flex-row ">
      <h1 className="w-[126px] p-2  h-[44px] bg-[#F0F0F0] rounded-full flex flex-row justify-center items-center">
<span className="w-[20px] h-[20px] text-[#000000]">-</span>
<span className="w-[20px] h-[20px] text-[#000000]">1</span>
<span className="w-[20px] h-[20px] text-[#000000]">+</span>
</h1>
<div className="ml-[9px]  rounded-full w-[400px] h-[52px] bg-[#000000] text-[#ffffff] flex justify-center items-center">Add to Cart</div>
      </div>
        </div>

{/*  */}

   



{/*  */}

        </div>
        {/* right side section end */}

        <div>
 
        </div>
       </div>

       {/* cart section start */}
<div className="mt-[50px]">
  <h1 className="font-bold font-serif text-3xl ml-[20px]">All Reviews</h1>
<div className=" lg:grid lg:grid-cols-2 gap-y-[18px] sm:grid sm:grid-cols-1 sm:m-auto m-auto  lg:justify-center lg:w-[990px] lg:h-[500px] mt-[60px]">
  
               {/* first card start */}
<div className="w-[400px] h-[240px] border md:mt-[13px] border-gray-300 rounded-md flex flex-row lg:justify-center lg:items-center sm:m-auto sm::justify-center sm:items-center">
    
    <div  className="w-[366px] h-[161.58px] flex flex-col justify-center p-[15px]">
   <p className=" w-[330px] flex justify-end"><HiOutlineDotsHorizontal size={16} className="text-gray-500"/></p> 
<p className="flex flex-row gap-[5px]"> 
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
</p>
<h1 className="mt-[5px] text-[#000000] whitespace-nowrap text-lg font-bold font-serif flex items-center">
  Samantha.D
  <IoMdCheckmarkCircle className="text-green-400 ml-2" />
</h1>
<p className="text-gray-400 w-[336px] h-[88px] mt-[5px] ">I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
</div>
</div>
{/* first card end */}

  {/* 2nd card start */}
  <div className="w-[400px] h-[240px] border border-gray-300 sm:m-auto sm::justify-center sm:items-center rounded-md flex flex-row justify-center items-center">
    
    <div  className="w-[366px] h-[161.58px] flex flex-col justify-center p-[15px]">
    <p className=" w-[330px] flex justify-end"><HiOutlineDotsHorizontal size={16} className="text-gray-500"/></p> 
<p className="flex flex-row gap-[5px]"> 
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
</p>
<h1 className="mt-[5px] text-[#000000] whitespace-nowrap text-lg font-bold font-serif flex items-center">
  AlexM.
  <IoMdCheckmarkCircle className="text-green-400 ml-2" />
</h1>
<p className="text-gray-400 w-[336px] h-[88px] mt-[5px] ">I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
</div>
</div>
{/* 2nd card end */}


  {/* 3rd card start */}
  <div className="w-[400px] h-[240px] sm:m-auto sm::justify-center sm:items-center border border-gray-300 rounded-md flex flex-row justify-center items-center">
    
    <div  className="w-[366px] h-[161.58px] flex flex-col justify-center p-[15px]">
    <p className=" w-[330px] flex justify-end"><HiOutlineDotsHorizontal size={16} className="text-gray-500"/></p> 
<p className="flex flex-row gap-[5px]"> 
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
</p>
<h1 className="mt-[5px] text-[#000000] whitespace-nowrap text-lg font-bold font-serif flex items-center">
  Ethan R.
  <IoMdCheckmarkCircle className="text-green-400 ml-2" />
</h1>
<p className="text-gray-400 w-[336px] h-[88px] mt-[5px] ">I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
</div>
</div>
{/* 3rd card end */}


  {/* 4th card start */}
  <div className="w-[400px] sm:m-auto sm::justify-center sm:items-center h-[240px] border border-gray-300 rounded-md flex flex-row justify-center items-center">
    
    <div  className="w-[366px] h-[161.58px] flex flex-col justify-center p-[15px]">
    <p className=" w-[330px] flex justify-end"><HiOutlineDotsHorizontal size={16} className="text-gray-500"/></p> 
<p className="flex flex-row gap-[5px]"> 
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
</p>
<h1 className="mt-[5px] text-[#000000] whitespace-nowrap text-lg font-bold font-serif flex items-center">
  Olivia P.
  <IoMdCheckmarkCircle className="text-green-400 ml-2" />
</h1>
<p className="text-gray-400 w-[336px] h-[88px] mt-[5px] ">I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
</div>
</div>
{/* 4th card end */}


  {/* 5th card start */}
  <div className="w-[400px] h-[240px] sm:m-auto sm::justify-center sm:items-center border border-gray-300 rounded-md flex flex-row justify-center items-center">
    
    <div  className="w-[366px] h-[161.58px] flex flex-col justify-center p-[15px]">
    <p className=" w-[330px] flex justify-end"><HiOutlineDotsHorizontal size={16} className="text-gray-500"/></p> 
<p className="flex flex-row gap-[5px]"> 
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
</p>
<h1 className="mt-[5px] text-[#000000] whitespace-nowrap text-lg font-bold font-serif flex items-center">
  Liam K.
  <IoMdCheckmarkCircle className="text-green-400 ml-2" />
</h1>
<p className="text-gray-400 w-[336px] h-[88px] mt-[5px] ">I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
</div>
</div>
{/* 5th card end */}


  {/* 6th card start */}
  <div className="w-[400px] h-[240px] sm:m-auto sm::justify-center sm:items-center border border-gray-300 rounded-md flex flex-row justify-center items-center">
    
    <div  className="w-[366px] h-[161.58px] flex flex-col justify-center p-[15px]">
    <p className=" w-[330px] flex justify-end"><HiOutlineDotsHorizontal size={16} className="text-gray-500"/></p> 
<p className="flex flex-row gap-[5px]"> 
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
</p>
<h1 className="mt-[5px] text-[#000000] whitespace-nowrap text-lg font-bold font-serif flex items-center">
  Ava H
  <IoMdCheckmarkCircle className="text-green-400 ml-2" />
</h1>
<p className="text-gray-400 w-[336px] h-[88px] mt-[5px] ">I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
</div>
</div>
{/* 6th card end */}
<div className="lg:flex lg:justify-center w-[930px]  mt-[18px] lg:items-center md:ml-[136px] lg:ml-[20px] sm:ml-[180px]"><button className="border border-gray-200 md:ml-[136px] bg-[#ffffff] w-[230px] h-[52px] rounded-full" >Load More Reviews</button></div>
  </div>
  </div>




{/* cart section2 start */}
<div className="lg:mt-[420px] md:mt-[120px] sm:mt-[50px]">
  <h1 className="text-3xl font-bold font-serif text-[#000000] ml-[30px]">You Might Also Like</h1>
  <div className="lg:grid lg:grid-cols-4 m-auto sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 sm:justify-center sm:m-auto sm:items-center md:ml-[110px] md:justify-between md:items-center md:gap-y-[20px] lg:w-[1200px]  lg:justify-between lg:h-[500px] gap-x-[20px] ">

{/* 1st cart start */}
<div className="w-1240px] h-[444px] flex flex-col  sm:m-auto mt-[33px]">
<div className="w-[295px] h-[298px] rounded-md">
<Image  src='/cart-sect2-img2.png' alt=''  width={285} height={290} className="p-3"/>
</div>
<div className="flex flex-col ml-[10px]">
<h2 className="text-[#000000] text-sm font-serif w-[295px]">Polo With Contrast Trims</h2>
<p className="flex flex-row gap-[5px]">
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <FaStar className="w-[18.49px] h-[18.49px] text-yellow-500"/>
    <span className="text-gray-600 ">4.0/5</span>
</p>
<h1 className="w-[55px] whitespace-nowrap h-[32px] font-bold font serif leading-normal">$212 <span className="w-[55px] h-[32px] font-bold font serif leading-normal text-gray-500">$242</span>
<span className="w-[58px] h-[28px] text-red-500 bg-red-100 leading-normal font-serif text-sm rounded-full ml-[5px]">-20%</span>
</h1>
</div>
</div>
{/* 1st cart end */}

{/* 2nd cart start */}
<div className="w-1240px] h-[444px] flex flex-col mt-[33px]  sm:m-auto">
<div className="w-[295px] h-[298px] rounded-md">
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

{/* 3rd cart start */}
<div className="w-1240px] h-[444px] flex flex-col mt-[33px]  sm:m-auto">
<div className="w-[295px] h-[298px] rounded-md">
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
<div className="w-1240px] h-[444px] flex flex-col mt-[33px]  sm:m-auto">
<div className="w-[295px] h-[298px] rounded-md">
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
  </div>
</div>
{/* cart section2 end */}


    </div>
  );
};

export default Page;

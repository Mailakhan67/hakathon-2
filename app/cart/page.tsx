import Image from "next/image"
import { RiDeleteBinFill } from "react-icons/ri";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Page = () => {
  return (
    <div className="mt-[60px] m-auto mr-[20px] ml-[20px] justify-center items-center">
      <h1 className="font-bold font serif text-4xl  ">YOUR CART</h1>


<div className="sm:flex sm:flex-col sm:justify-center sm:items-center  bg-[#ffffff] m-auto mt-[10px] lg:flex lg:flex-row  lg:justify-center lg:items-center justify-center gap-[15px] items-center  md:flex md:flex-col  md:justify-center md:items-center">


    {/* left side section start */}
    <div className="lg:w-[715px] sm:w-[600px]  sm:h-[420px] lg:h-[508px] border border-gray-300 bg-[#ffffff] rounded-md lg:flex lg:flex-col  justify-center items-center gap-y-[50px]">

<div className="w-[667px] h-[124px] md:w-[580px] flex flex-row p-3">

<div className="w-[124px] h-[124px] "><Image  src='/cart-img-3.png' alt='img'  width={124} height={124} className="p-3"/></div>

{/* 1st */}
<div className="w-[527px] sm:w-[450px] h-[124px]  flex flex-row bg-[#ffffff] justify-between shadow-lg shadow-gray-100">

<div className="w-[227px] h-[118px]  flex flex-col p-3 ">
    <h3 className=" ">Gradient Graphic T-shirt</h3>
    <p>size : <span className="text-gray-400">Large</span></p>
    <p>color : <span className="text-gray-400">White</span></p>
    <h2 className="text-lg text-[#000000]">$145</h2>
</div>

<div className="w-[225px] h-[124px] bg-[#ffffff] flex items-center justify-end">
    <div className="flex flex-col justify-end ">
    <RiDeleteBinFill className="text-red-500 w-[24px] h-[24px] ml-[100px]  "/>
<h1 className="w-[126px] p-2 mt-[50px] h-[44px]  bg-[#F0F0F0] rounded-full flex flex-row justify-center items-center">
<span className="w-[20px] h-[20px] text-[#000000]">-</span>
<span className="w-[20px] h-[20px] text-[#000000]">1</span>
<span className="w-[20px] h-[20px] text-[#000000]">+</span>
</h1>
    </div>
</div>
</div>

{/* 1st */}

</div>
<div className="w-[667px] md:w-[580px] h-[124px] flex flex-row p-3">

<div className="w-[124px] h-[124px] "><Image  src='/cart-img-2.png' alt=''  width={124} height={124} className="p-3"/></div>

{/* 2nd */}
<div className="w-[527px] sm:w-[450px] h-[124px] flex flex-row bg-[#ffffff] shadow-lg shadow-gray-100 justify-between">

<div className="w-[227px] h-[118px] flex flex-col p-3 ">
    <h3 className=" ">Checkered Shirt</h3>
    <p>size : <span className="text-gray-400">Medium</span></p>
    <p>color : <span className="text-gray-400">Red</span></p>
    <h2 className="text-lg text-[#000000]">$180</h2>
</div>

<div className="w-[225px] h-[124px] bg-[#ffffff] flex items-center justify-end">
    <div className="flex flex-col justify-end ">
    <RiDeleteBinFill className="text-red-500 w-[24px] h-[24px] ml-[100px]"/>
<h1 className="w-[126px] p-2 mt-[50px] h-[44px] bg-[#F0F0F0] rounded-full flex flex-row justify-center items-center">
<span className="w-[20px] h-[20px] text-[#000000]">-</span>
<span className="w-[20px] h-[20px] text-[#000000]">1</span>
<span className="w-[20px] h-[20px] text-[#000000]">+</span>
</h1>
    </div>

</div>
</div>
{/* 2nd  */}
</div>



<div className="w-[667px] md:w-[580px] h-[124px] flex flex-row p-3">

<div className="w-[124px] h-[124px]"><Image  src='/cart-img-1.png' alt=''  width={124} height={124} className="p-3"/></div>

{/* 3rd */}
<div className="w-[550px] sm:w-[450px] h-[124px] flex flex-row bg-[#ffffff] shadow-lg shadow-gray-100 justify-between ">

<div className="w-[227px] h-[118px] flex flex-col p-3 ">
    <h3 className=" ">Skinny Fit Jeans</h3>
    <p>size : <span className="text-gray-400">Large</span></p>
    <p>color : <span className="text-gray-400">blue</span></p>
    <h2 className="text-lg text-[#000000]">$240</h2>
</div>

<div className="w-[225px] h-[124px] bg-[#ffffff] flex items-center justify-end">
    <div className="flex flex-col justify-end ">
    <RiDeleteBinFill className="text-red-500 w-[24px] h-[24px] ml-[100px]"/>
<h1 className="w-[126px] p-2 mt-[50px] h-[44px] bg-[#F0F0F0] rounded-full flex flex-row justify-center items-center">
<span className="w-[20px] h-[20px] text-[#000000]">-</span>
<span className="w-[20px] h-[20px] text-[#000000]">1</span>
<span className="w-[20px] h-[20px] text-[#000000]">+</span>
</h1>
    </div>

</div>
</div>
{/* 3rd */}

</div>
    </div>
    {/* left side section end */}

  {/* right side section start */}
    <div className="w-[505px] h-[458px] bg-[#ffffff] gap-y-[20px] flex flex-col border  border-gray-300 md:mt-[10px] rounded-md mb-[50px]">

<div className="text-start"> <h1 className="text-[#000000] text-xl font-serif font-bold p-2">Order Summary</h1></div>
<div className="flex flex justify-center items-center  ">
<div className="w-[457px] h-[193px]  bg-[#ffffff] flex flex-col p-10 gap-y-[5px] mt-[10px] ">

<div className=" flex flex-row justify-between items-center"><span className="text-gray-400">Subtotal</span><span className="text-[#000000] font-serif font-bold">$565</span></div>
<div className=" flex flex-row justify-between items-center"><span className="text-gray-400 leading-normal">Discount(-20%)</span><span className="text-red-500 font-serif font-bold">-$113</span></div>
<div className=" flex flex-row justify-between items-center"><span className="text-gray-400 leading-normal">Delivery Fee</span><span className="text-[#000000] font-serif font-bold">$15</span></div>
<div className="w-[390px] h-[0px] border border-gray-200 flex flex-row justify-between items-center mt-[8px]"></div>
<div className=" flex flex-row justify-between items-center mt-[6px]"><span className="text-gray-400 text-lg text-[#000000]">Total</span><span className="text-[#000000] text-lg font-serif text-lg font-bold">$467</span></div>
</div>
</div>

<div className="flex flex-col justify-center items-center">
<div className="w-[457px] h-[48px] flex flex-row justify-between items-center gap-x-[10px]">
<input type="text" placeholder=" Add Preme Code" className="w-[326px] h-[48px] bg-[#F0F0F0] rounded-full"/>
<button className="w-[119px] h-[48px] text-[#ffffff] bg-[#000000] rounded-full">Apply</button>
</div>
<button className="flex items-center justify-center mt-[40px] w-[457px] h-[60px] rounded-full text-white bg-[#000000] text-lg">Go To Checkout  <AiOutlineArrowRight className="ml-2" /></button>

    </div>
    </div>
      {/* left side section end */}

</div>
<div className="h-[50px]"></div>
    </div>
  )
}

export default Page

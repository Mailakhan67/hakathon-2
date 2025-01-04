
// import Image from "next/image";

// const Header3 = () => {
//   return (
//     <div className=" max-w-[1239px] h-[866px] bg-gray-100 mx-auto rounded-lg shadow-md p-6 mt-[60px]">
//       <h2 className="text-center text-2xl font-bold mb-6">BROWSE BY DRESS STYLE</h2>

// <div className="flex flex-col justify-evenly items-center ">
//     {/* div on start */}
// <div className="lg:flex lg:flex-row lg:gap-[30px]  ">
// <div className="relative bg-white ">
// <p className="absolute bottom-2 left-2 text-black  bg-white px-2 py-1 rounded text-2xl font-bold">
//    Casual
//  </p>
// <Image
//    src="/image 11.png"
//    alt="Casual"

//    width={407}
//    height={289}
//    className="rounded-md"/>
// </div>

// <div className="relative bg-white ">
// <p className="absolute bottom-2 left-2 text-black  bg-white px-2 py-1 rounded text-2xl font-bold">
//    Formal
//  </p>
// <Image
//    src="/image 13.png"
//    alt="Casual"

//    width={684}
//    height={289}
//    className="rounded-md"/>
// </div>

// </div>
//  {/* div one end */}

//  {/* div 2 start */}
// <div className=" lg:flex lg:flex-row lg:gap-[30px] mt-[30px]">
// <div className="relative bg-white ">
// <p className="absolute bottom-2 left-2 text-black  bg-white px-2 py-1 rounded text-2xl font-bold">
//    Party
//  </p>
// <Image
//    src="/image 12.png"
//    alt="Casual"

//    width={684}
//    height={289}
//    className="rounded-lg"/>
 
// </div>

// <div className="relative bg-white ">
// <p className="absolute bottom-2 left-2 text-black bg-white px-2 py-1 rounded text-2xl font-bold">
//    GYM
//  </p>
//  <Image
//    src="/image 14.png"
//    alt="Casual"

//    width={407}
//    height={289}
//  className="rounded-md"/>
//  </div>
// </div>
// {/* div 2 end */}
// </div>

//     </div>
//   );
// };

// export default Header3;

 /////////////////////////////////
 import Image from "next/image";

const Header3 = () => {
  return (
    <div className="max-w-[1239px] sm:max-w-[90%] h-auto bg-gray-100 mx-auto rounded-lg shadow-md p-6 mt-[60px]">
      <h2 className="text-center text-2xl font-bold mb-6">BROWSE BY DRESS STYLE</h2>

      <div className="flex flex-col justify-evenly items-center">
        {/* div on start */}
        <div className="flex flex-col lg:flex-row lg:gap-[30px] items-center">
          <div className="relative bg-white mb-4 lg:mb-0">
            <p className="absolute bottom-2 left-2 text-black bg-white px-2 py-1 rounded text-2xl font-bold">
              Casual
            </p>
            <Image
              src="/image 11.png"
              alt="Casual"
              width={407}
              height={289}
              className="rounded-lg  lg:w-[407px]  lg:h-[289px]  sm:w-[300px]  sm:h-auto"
            />
          </div>

          <div className="relative bg-white mb-4 lg:mb-0">
            <p className="absolute bottom-2 left-2 text-black bg-white px-2 py-1 rounded text-2xl font-bold">
              Formal
            </p>
            <Image
              src="/image 13.png"
              alt="Formal"
              width={684}
              height={289}
              className="rounded-lg lg:w-[684px]  lg:h-[289px] sm:w-[300px] sm:h-auto"
            />
          </div>
        </div>
        {/* div one end */}

        {/* div 2 start */}
        <div className="flex flex-col lg:flex-row lg:gap-[30px] items-center mt-[30px]">
          <div className="relative bg-white mb-4 lg:mb-0">
            <p className="absolute bottom-2 left-2 text-black bg-white px-2 py-1 rounded text-2xl font-bold">
              Party
            </p>
            <Image
              src="/image 12.png"
              alt="Party"
              width={684}
              height={289}
              className="rounded-lg lg:w-[684px]  lg:h-[289px] sm:w-[300px] sm:h-auto"
            />
          </div>

          <div className="relative bg-white">
            <p className="absolute bottom-2 left-2 text-black bg-white px-2 py-1 rounded text-2xl font-bold">
              GYM
            </p>
            <Image
              src="/image 14.png"
              alt="Gym"
              width={407}
              height={289}
              className="rounded-lg lg:w-[407px]  lg:h-[289px] sm:w-[300px] sm:h-auto"
            />
          </div>
        </div>
        {/* div 2 end */}
      </div>
    </div>
  );
};

export default Header3;



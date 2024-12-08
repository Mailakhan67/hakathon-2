import Image from "next/image"
import { ImStarFull } from "react-icons/im";


const Hero = () => {
  return (
    <div className="bg-[#F2F0F1]">
    <div className="mt-[40px] bg-[#F2F0F1] max-w-[1240px] h-[663px] m-auto flex flex-row justify-between items-center">
      
<div className="w-[400px] p-2">
    <h1 className="font-bold text-4xl font-serif text-[#000000] leading-normal">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p className="bg-gray-100  leading-normal font-serif  text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <button className="mt-[20px] font-bold text-xl font-serif text-[#ffffff] bg-[#000000] w-[210px] h-[52px] rounded-full">Shop Now</button>
    </div>
<div className="flex flex-row w-[600px] h-[400px]"><ImStarFull size={30} className="text-[#000000] mt-[100px]"/>
<Image  src='/Rectangle 2 (2).png' alt=''  width={600} height={500} className="w-[600px] h-[500px] p-3"/>
<ImStarFull  size={50}  className="text-[#000000]"/>
</div>

    </div>

    </div>
  )
}

export default Hero

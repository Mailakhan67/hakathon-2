'use client'
import Link from "next/link";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi"; 
import { useState } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-[40px]">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[60px] px-4">
      
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

       
        <h1 className="font-bold text-2xl text-[#000000]">SHOP.CO</h1>

     
        <div className="flex md:hidden gap-3">
          <FiSearch size={20} className="text-gray-700" />
          <FiShoppingCart size={20} className="text-gray-700" /> 
          <FaRegUserCircle size={20} className="text-gray-700" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-gray-400 flex gap-6">
            <Link href={""} className="flex items-center ">
              Shop <RiArrowDropDownLine className="ml-1" />
            </Link>
            <Link href={""}>On Sale</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={"product"}>Brands</Link>
          </div>

          <div className="flex items-center w-[300px] bg-[#F0F0F0] rounded-lg">
            <FiSearch className="text-gray-500 ml-3" size={20} />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full h-full bg-transparent outline-none px-3 text-gray-700"
            />
          </div>

          <div className="flex gap-3">
          <Link href="/cart">  <FiShoppingCart size={25} /></Link>
           <FaRegUserCircle size={25} />
          </div>
        </div>
      </div>

      
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-red-400 px-4 py-2`}
      >
        <Link href={""} className="block py-2 border-b border-gray-300">
          Shop
        </Link>
        <Link href={""} className="block py-2 border-b border-gray-300">
          On Sale
        </Link>
        <Link href={""} className="block py-2 border-b border-gray-300">
          New Arrivals
        </Link>
        <Link href={""} className="block py-2 border-b border-gray-300">
          Brands
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;

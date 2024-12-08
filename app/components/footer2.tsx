import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";


const Footer2 = () => {
    return (
      <div className="">
        <div className="h-[499px] bg-[#F0F0F0] flex flex-row items-center gap-x-10 px-10">
  
          {/* Div 1 */}
          <div className="flex flex-col w-[200px]">
            <h1 className="font-bold font-serif text-[#000000] leading-normal text-lg">
              Stylish Clothing
            </h1>
            <p className="text-gray-600 mt-2">
              We have clothes that suit your style and that you are proud to wear. From women to men.
            </p>
            <div className="flex flex-row gap-4 mt-4">
              <AiFillTwitterCircle size={25} />
              <FaFacebook size={25} />
              <BsInstagram size={25} />
              <FaGithub size={25} />
            </div>
          </div>
  
          {/* Div 2 */}
          <div className="flex flex-col w-[200px]">
            <h2 className="leading-normal text-lg font-serif">COMPANY</h2>
            <p className="mt-2">About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
  
          {/* Div 3 */}
          <div className="flex flex-col w-[200px]">
            <h2 className="leading-normal text-lg font-serif">Help</h2>
            <p className="mt-2">Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
  
          {/* Div 4 */}
          <div className="flex flex-col w-[200px]">
            <h2 className="leading-normal text-lg font-serif">FAQ</h2>
            <p className="mt-2">Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
  
          {/* Div 5 */}
          <div className="flex flex-col w-[200px]">
            <h2 className="leading-normal text-lg font-serif">RESOURCES</h2>
            <p className="mt-2">Free Books</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>YouTube Playlist</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer2;
  
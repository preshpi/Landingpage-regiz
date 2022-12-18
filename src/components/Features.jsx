import React from "react";
import { MdStarRate } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { HiDocumentSearch } from "react-icons/hi";
import { MdBusiness } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { TbBadge } from "react-icons/tb";
import { AiFillGift } from "react-icons/ai";
import { RiWallet3Fill } from "react-icons/ri";
import { AiOutlineWechat } from "react-icons/ai";

function Features() {
  return (
    <div
      name="feature"
      className="pt-5  bg-[#fff] dark:bg-[#070909]  p-12 mt-24"
    >
      <h1 className="lg:text-5xl text-3xl text-center mt-3 pt-5 text-black font-bold tracking-wide mb-5 dark:text-white">
        FEATURES
      </h1>
      <div className="lg:m-5 m-10 mt-5">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-[20px] place-items-center justify-center"
          data-aos="fade-up"
        >
          <div className="grid px-6 py-6 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] place-items-center  lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <MdStarRate className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Minting
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <GoVerified className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Verification
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <TbBadge className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Originality Badge
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <HiDocumentSearch className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document/asset Lookup
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center text-white">
              <ImCancelCircle className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 fill-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Blacklisting
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <MdBusiness className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Business suite
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <RiWallet3Fill className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Wallet
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <AiFillGift className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Social Marketplace
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-52 lg:w-[500px] m-10 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 dark:bg-[#02383C] bg-gray-200 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <AiOutlineWechat className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <h1 className="dark:text-white text-black items-center text-2xl text-center mt-3">
                24/hrs support
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

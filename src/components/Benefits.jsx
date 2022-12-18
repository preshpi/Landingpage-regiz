import React from 'react'
import { GiCheckMark } from 'react-icons/gi';
function Benefits() {
  return (
    <div name='benefit' className=" dark:bg-[#0C1017]  bg-gray-100 dark:text-[#fff] pt-5 lg:h-[600px] h-full mt-24 justify-center place-items-center">
      <h1 className="lg:text-5xl text-3xl text-center mt-3 text-black font-bold tracking-wide mb-5 dark:text-[#fff] pt-8">BENEFITS</h1>

      <div className=" font-[poppins] " data-aos="fade-up">
        <div className="lg:m-10 m-5 lg:flex place-items-center items-center justify-center margin-auto xl:gap-20 lg:gap-10">

            <div className="gap-5">
              <div className="flex md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:md:text-5xl lg:text-5xl  text-2xl rounded-lg  bg-[#02383C]"/>
                </div> 
                <div className="grid">
                  <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">Decentralized database</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Be in charge of your Documents/decide whom to share it with.</p>
                </div>
              </div>

              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>

                <div className="grid">
                 <h3 className="text-black dark:text-[#fff] mt-3 text-xl tracking-wide text-start font-bold">Security</h3>
                 <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Built on Block-chain Technology</p>
                </div>
              </div>

              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>

                <div className="grid">
                  <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">True Digital Copy</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Verified true digital copy of uploaded document with a badge.</p>
                </div>
              </div>

              

              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>
                <div className="grid">
                  <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">Third-party Access</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Give access to people to confirm the Genuity of your documents.</p>
                </div>
              </div>

            </div>

            <div className="gap-5">
              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>
                <div className="grid">
                  <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">Third-party Control</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Control Third-party access with via App.</p>
                </div>
              </div>

              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>
                <div className="grid">
                  <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">Accessibility</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Instant access to document on the move. </p>
                </div>
              </div>

              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>
                <div className="grid">
                  <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">Acceptability</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Digital copies are acceptable and valid globally.</p>
                </div>
              </div>

              <div className="flex md:grid-cols-2 mt-5">
                <div className="flex items-center justify-center">
                  <GiCheckMark className="text-white hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 md:text-5xl lg:text-5xl text-2xl rounded-lg  bg-[#02383C]"/>
                </div>
                <div className="grid">
                  <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">Global Search</h3>
                  <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">Documents are Searchable and verifiable globally</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
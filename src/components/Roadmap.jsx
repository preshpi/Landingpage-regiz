import React from 'react'

function Roadmap() {
  return (
    <div name='roadmap' className="text-white pt-5 dark:lg:pt-20 mt-24 dark:bg-[#0C1017] bg-[#F3F4F6]">
    <h1 className="text-5xl text-center mt-3 dark:text-white text-black font-bold tracking-wide mb-5 p-5">Roadmap</h1>
    <p className="text-gray-500 text-xl leading-5 text-center font-[poppins] p-5">Project roadmap for the year 2022/23</p>
    <div className="grid place-items-center justify-center items-center">
    <div className="grid place-items-center justify-center items-center m-5 bg-gray-100 rounded-lg dark:bg-[#0C1017] w-[1500px]">
    <div className="container  m-10 rounded-lg grid place-items-center items-center justify-center lg:w-[1000px] dark:bg-[#0C1017] ">
      <div className="timeline">
        <ul className="m-20"> 
          <li data-aos="fade-left">
            <div className="">
              <h3 className="dark:text-white text-black date">Q4 - 2022</h3>
              <div className="dark:bg-[#000] bg-[#1e1f22] timeline-content rounded-lg  lg:w-96 m-5 p-5">
              <h1 className="font-bold">New website</h1>
              <p className="text-gray-300 text-2xl">Launch of website/branding for product</p>
              <p className="text-gray-300 text-2xl">Publicity and Engagement.</p>
              <p className="text-gray-300 text-2xl">Q&A</p>
              </div>
            </div>
          </li>
          <li data-aos="fade-right">
            <div>
              <h3 className="dark:text-white  text-black date">Q1 - 2023</h3>
              <div className="dark:bg-[#000] bg-[#1e1f22] timeline-content rounded-lg lg:w-96 m-5 p-5">
                <h1 className="font-bold">Token Sale</h1>
                <p className="text-gray-300 text-2xl mb-2">Seed & Private sale, see Tokenomics</p>
                <h1 className="font-bold">PancakeSwap Listing</h1>
                <p className="text-gray-300 text-2xl mb-1">15% of the total supply will be added as liquidity</p>
                <h1 className="font-bold">Listing on Coingec</h1>
                <h1 className="font-bold">PListing on Coinmarketcapng</h1>
                <h1 className="font-bold">Closed beta group</h1>
                <h1 className="font-bold">Early testers for the app</h1>
              </div>
            </div>
          </li>
          <li data-aos="fade-left">
            <div>
              <h3 className="dark:text-white text-black date">Q3 - 2023</h3>
              <div className="dark:bg-[#000] bg-[#1e1f22] timeline-content rounded-lg  lg:w-96 m-5 p-5">
                <h1 className="font-bold">Market campaign</h1>
                <p  className="text-gray-300 text-2xl">We will start our marketing listing</p>
                <h1 className="font-bold">Contract Audit</h1>
                <p  className="text-gray-300 text-2xl">Our contract will get audited by TBD</p>
                <h1 className="font-bold">Multi-network profiles</h1>
                <p  className="text-gray-300 text-2xl">Track on ETH & BSC Networks</p>
                <h1 className="font-bold">Buyback integration</h1>
                <p  className="text-gray-300 text-2xl">Reward for regiscoin</p>
                <h1 className="font-bold">Learning Pad</h1>
                <p  className="text-gray-300 text-2xl">Community learning center for cryptocurrencies and tokens</p>
              </div>
            </div>
          </li>
          <li data-aos="fade-right">
            <div  className="timeline-content">
              <h3 className="dark:text-white text-black date">Q3 -2023</h3>
              <div className="dark:bg-[#000] bg-[#1e1f22] timeline-content rounded-lg  lg:w-96 m-5 p-5">
                <h1 className="font-bold">UX/UI Review</h1>
                <p  className="text-gray-300 text-2xl">Refinement of user experience</p>
                <h1 className="font-bold">All core concept features</h1>
                <p  className="text-gray-300 text-2xl">Regiz proof of concept</p>
                <h1 className="font-bold">Verification Protocol</h1>
                <p  className="text-gray-300 text-2xl">Refine Verification Analysis</p>
                <h1 className="font-bold">Multi-document Support</h1>
                <p  className="text-gray-300 text-2xl">Add support for multipage document</p>
                <h1 className="font-bold">Add verification partners </h1>
                <p  className="text-gray-300 text-2xl">Partnership with issuing organizations 	</p>
                <h1 className="font-bold">Basic demo</h1>
                <p  className="text-gray-300 text-2xl">Provide a public demo so you can test regiz Dapp</p>
                <h1 className="font-bold">Price Alerts</h1>
                <p  className="text-gray-300 text-2xl">Get alerts on events for your tracked coins</p>
                <h1 className="font-bold">Release 0.1</h1>
                <p  className="text-gray-300 text-2xl">The BETA version of our app goes public.</p>
              </div>
            </div>
          </li>
          <li data-aos="fade-left">
            <div className="timeline-content">
              <h3 className="dark:text-white text-black date">Q4 - 2023</h3>
              <div className="dark:bg-[#000] bg-[#1e1f22] timeline-content rounded-lg  lg:w-96 m-5 p-5">
                <h1 className="font-bold">Launch Dapp</h1>
                <p  className="text-gray-300 text-2xl">launch on App Store and Play store </p>
                <p  className="text-gray-300 text-2xl">Marketing</p>
                <p  className="text-gray-300 text-2xl">Addition of issuing organization</p>
                <p  className="text-gray-300 text-2xl">Additional Features</p>
                <p  className="text-gray-300 text-2xl">Launch Nft Market place </p>
                <h1 className="font-bold">GET STARTED</h1>
                <p  className="text-gray-300 text-2xl">Token pre-sale</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Roadmap
import React from "react";

function Roadmap() {
  return (
    <div
      name="roadmap"
      className="text-white pt-5 dark:lg:pt-20 mt-24 dark:bg-[#0C1017] bg-[#F3F4F6]"
    >
      <h1 className="text-5xl text-center mt-3 dark:text-white font-bold tracking-wide mb-5 p-5">
        Roadmap
      </h1>
      <p className="text-gray-500 text-xl leading-5 text-center font-[poppins] p-5">
        Project roadmap for the year 2022/23
      </p>

      <div class="roadmap">
        <div class="roadmap__milestone w-[300px] lg:w-[500px] bg-[#02383C] dark:bg-white">
          <div class="roadmap__milestone-description">
             <h3 className="text-end text-white dark:text-black date">Q4 - 2022</h3> 
            <div className="text-white dark:text-black text-start">
              <h1 className="font-bold text-xl mt-5">New website</h1>
              <p className="text-x text-white dark:text-[#111] mt-3 font-[poppins]">Launch of website/branding for product</p>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">Publicity and Engagement.</p>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">Q&A</p>
            </div>
          </div>
        </div>
        <div class="roadmap__timeline">
          <div class="roadmap__timeline-marker"></div>
          <div class="roadmap__timeline-arrow"></div>
        </div>

        <div class="roadmap__milestone w-[300px] lg:w-[500px] bg-[#02383C] dark:bg-white">
          <div class="roadmap__milestone-description">
            <h3 className="text-end text-white dark:text-black date">Q1 - 2023</h3>
            <div className="text-white dark:text-black text-start">
              <h1 className="font-bold text-xl mt-5">Token Sale</h1>
              <p className="text-x mb-2 font-[poppins] text-white dark:text-[#111]">
                Seed & Private sale, see Tokenomics
              </p>
              <h1 className="font-bold text-xl">PancakeSwap Listing</h1>
              <p className="text-x mb-1 font-[poppins] text-white dark:text-[#111]">
                15% of the total supply will be added as liquidity
              </p>
              <h1 className="font-bold text-xl mt-3">Listing on Coingecko</h1>
              <h1 className="font-bold text-xl mt-3">Listing on Coinmarketcap</h1>
              <h1 className="font-bold text-xl mt-3">Closed beta group</h1>
              <h1 className="text-x font-[poppins] text-white dark:text-[#111]">Early testers for the app</h1>
            </div>
          </div>
        </div>
        <div class="roadmap__timeline ">
          <div class="roadmap__timeline-marker"></div>
          <div class="roadmap__timeline-arrow"></div>
        </div>

        <div class="roadmap__milestone w-[300px] lg:w-[500px] bg-[#02383C] dark:bg-white">
          <div class="roadmap__milestone-description">
            <h3 className="text-end text-white dark:text-black date">Q2 - 2023</h3>
            <div className="text-white dark:text-black text-start mt-5">
              <h1 className="font-bold text-xl">Market campaign</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">
                We will start our marketing listing
              </p>
              <h1 className="font-bold text-xl mt-3">Contract Audit</h1>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Our contract will get audited by TBD
              </p>
              <h1 className="font-bold text-xl mt-3">Multi-network profiles</h1>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Track on ETH & BSC Networks
              </p>
              <h1 className="font-bold text-xl mt-3">Buyback integration</h1>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">Reward for regiscoin</p>
              <h1 className="font-bold mt-3 text-xl">Learning Pad</h1>
              <p className="text-white dark:text-[#111] font-[poppins] text-x">
                Community learning center for cryptocurrencies and tokens
              </p>
            </div>
          </div>
        </div>
        <div class="roadmap__timeline">
          <div class="roadmap__timeline-marker"></div>
          <div class="roadmap__timeline-arrow"></div>
        </div>

        <div class="roadmap__milestone w-[300px] lg:w-[500px] bg-[#02383C] dark:bg-white">
          <div class="roadmap__milestone-description">
            <h3 className="text-end text-white dark:text-black date">Q3 -2023</h3>
            <div className="text-white dark:text-black text-start mt-5">
              <h1 className="font-bold text-xl">UX/UI Review</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">Refinement of user experience</p>
              <h1 className="font-bold text-xl mt-3">All core concept features</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">Regiz proof of concept</p>
              <h1 className="font-bold text-xl mt-3">Verification Protocol</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">Refine Verification Analysis</p>
              <h1 className="font-bold text-xl mt-3">Multi-document Support</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">Add support for multipage document</p>
              <h1 className="font-bold text-xl mt-3">Add verification partners </h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">
                Partnership with issuing organizations{" "}
              </p>
              <h1 className="font-bold mt-3 text-2zl">Basic demo</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">
                Provide a public demo so you can test regiz Dapp
              </p>
              <h1 className="font-bold mt-3 text-xl">Price Alerts</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">
                Get alerts on events for your tracked coins
              </p>
              <h1 className="font-bold mt-3 text-xl">Release 0.1</h1>
              <p className="text-x text-white dark:text-[#111] font-[poppins]">
                The BETA version of our app goes public.
              </p>
            </div>
          </div>
        </div>

        <div class="roadmap__timeline">
          <div class="roadmap__timeline-marker"></div>
          <div class="roadmap__timeline-arrow"></div>
        </div>

       <div class="roadmap__milestone w-[300px] lg:w-[500px] bg-[#02383C] dark:bg-white">
          <div class="roadmap__milestone-description">
            <h3 className="text-end text-white dark:text-black date">Q4 - 2023</h3>
            <div className="text-white dark:text-black mt-5">
              <h1 className="font-bold text-xl">Launch Dapp</h1>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                launch on App Store and Play store{" "}
              </p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">Marketing</p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Addition of issuing organization
              </p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">Additional Features</p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">Launch Nft Market place </p>
              <h1 className="font-bold text-xl mt-3">GET STARTED</h1>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">Token pre-sale</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Roadmap;

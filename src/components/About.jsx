import React from 'react'

function About() {
  return (
    <div name='about' className="pt-[70px] dark:bg-[#0C1017] bg-white">
    <h1 className="lg:text-5xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide mb-5 pt-5">About Regiz</h1>
    
    <div className="dark:text-gray-300 about-text text-black">
     
      <div className="box place-items-center lg:text-start text-center justify-center items-center  lg:w-[950px] md:w-[500px] w-[300px]  m-10">
      <input type="checkbox" id="check"/>

      {/* Wording spacing in small screen */}

      <p className="sm:text-[14px] text-[16px] lg:text-[1rem] md:text-[1rem] mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word word-about w-[300px] lg:w-full md:w-[600px]">
       Regiz is a Generation Alpha Digital documentation
       technology (DOCUTECH) project that focuses on the authentication, verification, and digitization 
       of documents so that they can be electronically stored more compactly and securely. 
       <p>
       It may be educational certificates or professional certifications, computerized receipts,
       work identification cards, or any suitable documents.</p>
      </p>

       <div className="content">
        <p className="sm:text-[14px] text-[16px] lg:text-[1rem] md:text-[1rem] mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word word-about w-[300px] lg:w-full md:w-[600px]">
        The Document would be snapped and uploaded on the Regiz platform in selected 
        formats e.g pdf. Every document that is uploaded will be minted upon and given a 
        unique identification code, which will automatically make it a certified digital copy;
        Thereby eradicating fake or in-genuine digital copies of a document.         
        </p>

        <p className="sm:text-[14px] text-[16px] lg:text-[1rem] md:text-[1rem] mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word word-about w-[300px] lg:w-full md:w-[600px]">
        A verification and validation process will be applied to all certificate issued by institutions and organizations that are registered with the government.
        <p> With the owner's permission, third parties can also check up on these documents for confirmation purposes 
        (using the Regiz app). This allows anyone to verify its legitimacy globally.</p>
        </p>
        <p className="sm:text-[14px] text-[16px] lg:text-[1rem] md:text-[1rem] mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word word-about w-[300px] lg:w-full md:w-[600px]">
        Regiz will be a decentralized application based on blockchain technology where users 
        will have control over their data much like they do over their money.
        </p>

        <p className="sm:text-[14px] text-[16px] lg:text-[1rem] md:text-[1rem] mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word word-about w-[300px] lg:w-full md:w-[500px]">
        These documents will then become digital assets with monetary value.
        </p>
       
      </div> 

      <label for="check" className="px-3 py-3 rounded-full text-white  bg-[#02383C] hover:animate-bounce">READ MORE</label>
      </div> 
    </div> 

  </div>
  )
}

export default About
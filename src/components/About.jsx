import React from 'react'

function About() {
  return (
    <div name='about' className="pt-[70px] dark:bg-[#0C1017] bg-gray-50">
    <h1 className="lg:text-5xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide mb-5 pt-5">About Regiz</h1>
    
    <div className="dark:text-gray-300 about-text text-black">
     
      <div className="box place-items-center lg:text-start text-center justify-center items-center  lg:w-[800px] md:w-[500px] w-[300px]  m-10">
      <input type="checkbox" id="check"/>

      {/* Wording spacing in small screen */}

      <p className="text-xl mt-3 lg:leading-10 lg:tracking-wider leading-9 break-word lg:words">
       Regiz is a Generation Alpha Digital documentation
       technology project that focuses on the authentication, verification, and digitization 
       of documents so that they can be electronically stored more compactly and securely. 
       It may be educational certificates or professional certifications, computerized receipts,
       work identification cards, or any suitable documents.
      </p>

       <div className="content">
        <p className="text-xl mt-3 lg:leading-10 lg:tracking-wider tracking-wide leading-9 words">
        The Document would be snapped and uploaded on the Regiz platform in selected 
        formats e.g pdf. Every document that is uploaded will be minted upon and given a 
        unique identification code. which will automatically make it a certified digital copy, 
        thereby eradicating fake or in-genuine digital copies of a document.         
        </p>

        <p className="text-xl mt-3 lg:leading-10 lg:tracking-wider tracking-wide leading-9 words">
        A verification and validation process will be applied to all certificates issued by institutions and organizations that are registered with the government.
        With the owner's permission, third parties can also check up on these documents for confirmation purposes 
        (using the Regiz app). This allows anyone to verify its legitimacy globally.
        </p>
        <p className="text-xl mt-3 lg:leading-10 lg:tracking-wider tracking-wide leading-9 words">
        Regiz will be a decentralized application based on blockchain technology where users 
        will have control over their data much like they do over their money.
        </p>

        <p className="text-xl mt-3 leading-8 tracking-wide">
        These documents will then become digital assets with monetary value.
        </p>
       
      </div> 

      <label for="check" className="px-3 py-3 rounded-full text-white  hover:text-black bg-[#66CC7B] hover:animate-bounce dark:text-black">READ MORE</label>
      </div> 
    </div> 

  </div>
  )
}

export default About
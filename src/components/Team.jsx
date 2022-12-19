import React from 'react'

function Team() {
  return (
    <div name='team' className="pt-5 dark:lg:pt-20 lg:h-[500px] md:h-full mt-24">
    <h1 className="lg:text-5xl text-3xl text-center  dark:text-white text-black font-bold tracking-wide mt-5">Team</h1>
    <div className="grid lg:grid-cols-4 font-[poppins] text-white m-10  justify-center items-center text-center gap-3">
    
        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
              <div className="px-4">
                  <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1667291688/businessman-310819_1280_zdunp4.png" alt="profileimage" className="shadow rounded-full max-w-full h-auto align-middle w-[130px] h-[130px] hover:w-[132px] hover:h-[132px" id="profile_img"/>
              </div>
          </div>
          <h1 className="font-bold text-black dark:text-white">Ogunnaike Wahab B</h1>
          <p className="text-gray-500 text-sm leading-5">CEO</p>
        </div>

        <div className="p-3" data-aos="fade-up">
            <div className="flex flex-wrap justify-center mt-8">
                <div className="px-4">
                    <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1667291795/businessman-avatar-profile-vector-260nw-249652369_e9glpa.jpg" alt="profileimage" className="shadow rounded-full max-w-full h-auto align-middle w-[130px] h-[130px] hover:w-[132px] hover:h-[132px]" id="profile_img"/>
                </div>
            </div>
            <h1 className="font-bold text-black dark:text-white">Akanji Oluwaleke J</h1>
            <p className="text-gray-500 text-sm leading-5">CTO	</p>
          
        </div>

        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
              <div className="px-4">
                  <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1667292288/avatar-woman_k2wgke.png" alt="profileimage" className="shadow rounded-full max-w-full h-auto align-middle w-[130px] h-[130px] hover:w-[132px] hover:h-[132px" id="profile_img"/>
              </div>
          </div>
          <h1 className="font-bold text-black dark:text-white">Egwuenu Precious </h1>
          <p className="text-gray-500 text-sm leading-5">Frontend developer</p>
        </div>

        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
              <div className="px-4">
                  <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1667291795/businessman-avatar-profile-vector-260nw-249652369_e9glpa.jpg" alt="profileimage" className="shadow rounded-full max-w-full h-auto align-middle w-[130px] h-[130px] hover:w-[132px] hover:h-[132px" id="profile_img"/>
              </div>
          </div>
          <h1 className="font-bold text-black dark:text-white">John Abraham</h1>
          <p className="text-gray-500 text-sm leading-5">Frontend Developer</p>
        </div>
    </div>
    </div>
  )
}

export default Team
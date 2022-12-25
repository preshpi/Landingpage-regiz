import React, { useState } from "react";
import Swal from "sweetalert2";
import FooterContact from './FooterContact'
import { HiMail, HiPhone } from "react-icons/hi";

function Contactus() {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");
  const [error, setError] = useState(false);
  const [emailMessage, setEmailmessage] = useState("");
  const [disable, setDisable] = useState(0);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9,_%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setEmailmessage("");
    } else if (!regEx.test(email) && email !== "") {
      setEmailmessage("Email not valid!");
    } else {
      setEmailmessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      check.length === 0
    ) {
      Swal.fire("Opps!", "Your form has not been completed!", "error");
      setError(true);
    } else {
      Swal.fire("Good Job!", "Your form has been submitted!", "success");
    }

    if (check.length === 0) {
      setError(true);

      Swal.fire("Opps!", "Your form has not been completed!", "error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex place-items-center items-center justify-center lg:mt-[8%] font-[poppins]">
        <div className="grid lg:grid-cols-2 gap-8 mb-[100px]">
          <div className="dark:text-[#FFFFFF] text-black md:w-[500px] lg:w-[500px] p-5 place-items-center items-center justify-center lg:mt-0 mt-24">
            <h2 className="font-bolder text-4xl">Get in touch</h2>

            <p className="lg:w-[400px] mt-[30px] leading-8 text-xl">
              Use our contact form for all information requests or contact us
              directly using the contact information below.
            </p>

            <div>
              <p className="lg:w-[500px] mt-[30px] leading-8 text-xl">
                Feel free to get in touch with us via email or phone
              </p>
              <hr className="border-1 border-[#02383C] lg:w-[450px] md:w-[500px]  w-[343px] mt-[30px]" />

              <div className="flex gap-[50px] mt-8 place-items-center items-center">
                <HiMail className="text-5xl fill-[#02383C]" />
                <div className="flex flex-col gap-5">
                  <p className="font-bold text-xl">Reach out to us</p>
                  <p>Reqiz@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-[50px] mt-8 place-items-center items-center">
                <HiPhone className="text-5xl fill-[#02383C]" />
                <div className="flex flex-col gap-5">
                  <p className="font-bold text-xl">Phone</p>
                  <p>Reqiz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <form
              onSubmit={handleSubmit}
              className="  bg-gray-200 rounded-[30px] flex justify-center items-center place-items-center  lg:mt-0 mt-32"
            >
              <div className="lg:w-[490px] md:w-[600px] w-[350px] h-auto place-items-center items-center justify-center flex flex-col">
                <h3 className="text-3xl font-[800px] text-center px-5 py-5 mt-5">
                  Get started
                </h3>

                <div>
                  <label for="first_name" className="name">
                    Name
                  </label>{" "}
                  <br />
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    className={
                      error && firstName.length <= 0
                        ? "errorname mt-3 w-[300px] lg:w-[448px] md:w-[500px] px-4 py-4 rounded-[15px] focus:outline-none border border-[#F83F23]"
                        : "inputname mt-3  w-[300px]  lg:w-[448px]  md:w-[500px]  px-4 py-4 rounded-[15px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]"
                    }
                    id="first_name"
                    type="text"
                    placeholder="Enter your last name"
                  />
                  {error && firstName.length <= 0 ? (
                    <p class="text-red-500 mt-2">Please enter your firstname</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mt-3">
                  <label className="name" for="email">
                    Email
                  </label>
                  <br />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className={
                      error && email.length <= 0
                        ? "errorname mt-3 w-[300px]  md:w-[500px]  lg:w-[448px] px-4 py-4 rounded-[15px] focus:outline-none border border-[#F83F23]"
                        : "inputname mt-3  w-[300px]  md:w-[500px] lg:w-[448px] px-4 py-4 rounded-[15px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]"
                    }
                    id="email"
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                  />
                  <p className="text-red-500 mt-2">{emailMessage}</p>
                  {error && email.length <= 0 ? (
                    <p class="text-red-500 mt-2">Please enter your email</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mt-3">
                  <label className="name" for="message">
                    Message
                  </label>
                  <br />
                  <textarea
                    rows="4"
                    cols="50"
                    onChange={(e) => setMessage(e.target.value)}
                    className={
                      error && message.length <= 0
                        ? "errormessage mt-3 w-[300px]  md:w-[500px] lg:w-[448px] px-4 py-4 rounded-[15px] focus:outline-none border border-[#F83F23]"
                        : "messageinput mt-3  w-[300px]  md:w-[500px] lg:w-[448px] px-4 py-4 rounded-[15px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]"
                    }
                    id="message"
                    type="text"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                  ></textarea>
                  {error && message.length <= 0 ? (
                    <p class="text-red-500 mt-2">Please enter a message</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mt-3">
                  <div className="flex">
                    <input
                      onChange={(e) => setCheck(e.target.value)}
                      type="checkbox"
                      id="text"
                      className="checkbox mx-2 mt-3 ring-opacity-25  focus:ring-2 ring-[#84CAFF] focus:border-[#84CAFF] border border-[#D0D5DD] focus:outline-none w-5"
                    />
                    <label for="text-2xl lg:w-[688px] w-[311px]">
                      I accept the Terms of services
                    </label>
                  </div>
                  {error && check.length <= 0 ? (
                    <p class="text-red-500 mt-2 mx-2">
                      Please check the box to proceed!
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mt-3 mb-[50px]">
                  <button
                    id="btn__submit"
                    type="submit"
                    onClick={emailValidation}
                    className="mt-3 w-[300px]  bg-[#02383C] hover:bg-[#164043] ring-opacity-25  focus:ring-4 ring-[#02383C] text-[#FFFF] rounded-[10px] px-5 py-5 lg:w-[448px]"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <FooterContact />
      </div>
    </div>
  );
}
export default Contactus;
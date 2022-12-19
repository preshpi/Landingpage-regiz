import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Contactus() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [check, setCheck] = useState('');
  const [error, setError] = useState(false);
  const [emailMessage, setEmailmessage] = useState('');
  const [disable, setDisable] = useState(0);

  const handleOnChange=(e)=> {
    setEmail(e.target.value);
  }

  const emailValidation=()=> {
    const regEx = /[a-zA-Z0-9,_%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regEx.test(email)){
      setEmailmessage("")
    }else if(!regEx.test(email) && email !== '') {   
      setEmailmessage("Email not valid!")
    }else{
      setEmailmessage("");

    }
  }

  const handleSubmit=(e) => {
    e.preventDefault();
    if(firstName.length===0||lastName.length===0||email.length===0||message.length===0||check.length===0){

    Swal.fire(
      'Opps!',
      'Your form has not been completed!',
      'error'
    )
      setError(true)
    }else{
      Swal.fire(
        'Good Job!',
        'Your form has been submitted!',
        'success' 
        )
    }

    if(check.length===0){
      setError(true)
      
    Swal.fire(
      'Opps!',
      'Your form has not been completed!',
      'error'
    )
    }


  }


  return (
    <div className="grid lg:place-items-center h-screen items-center justify-center">
      <div className="m-5 grid lg:grid-cols-2">  
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis quam commodi tempore quos, rem ratione esse quia a deserunt.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 w-[700px]  bg-gray-200">

          {/* <div className="grid lg:grid-cols-2 lg:gap-5">
            <div>
              <label for="first_name" className="name">First name</label>
              <input onChange={e=>setFirstname(e.target.value)}  className={error&& firstName.length<=0 ? 'errorname mt-3 w-[343px] lg:w-[348px] focus:outline-none border border-[#F83F23]' : 'inputname mt-3  w-[343px] lg:w-[348px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]' } id="first_name" type="text" placeholder='Enter your last name'/>
              {error&& firstName.length<=0 ? <p class="hint2 mt-2">Please enter your firstname</p> : ""}
            </div>

            <div>
              <label for="last_name" className="name">Last name</label>
              <input onChange={e=>setLastname(e.target.value)}  className={error&& lastName.length<=0 ? 'errorname mt-3 w-[343px] lg:w-[348px] focus:outline-none border border-[#F83F23]' : 'inputname mt-3  w-[343px] lg:w-[348px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]' } id="last_name" type="text" placeholder='Enter your last name'/>
              {error&& lastName.length<=0 ? <p class="hint2 mt-2">Please enter your lastname</p> : ""}
            </div>
          </div>

          <div className="mt-3">
            <label className="name" for="email">Email</label>
            <input onChange={e=>setEmail(e.target.value)}  className={error&& email.length<=0 ? 'errorname mt-3 w-[343px] lg:w-[720px] focus:outline-none border border-[#F83F23]' : 'inputname mt-3  w-[343px] lg:w-[720px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]' } id="email" type="email" placeholder="yourname@email.com" value={email}/>
            <p className="hint2 mt-2">{emailMessage}</p>
            {error&& email.length<=0 ? <p class="hint2 mt-2">Please enter your email</p> : ""}
          </div>

          <div className="mt-3">
            <label className="name" for="message">Message</label>
            <textarea onChange={e=>setMessage(e.target.value)}  className={error&& message.length<=0 ? 'errormessage mt-3 w-[343px] lg:w-[720px] focus:outline-none border border-[#F83F23]' : 'messageinput mt-3  w-[343px] lg:w-[720px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]' } id="message" type="text" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            {error&& message.length<=0 ?  <p class="hint2 mt-2">Please enter a message</p> : ""}
          </div>

          <div className="mt-3">
            <div className="flex">
            <input onChange={e=>setCheck(e.target.value)} type="checkbox" id="text" className="checkbox mx-2 mb-3 ring-opacity-25  focus:ring-2 ring-[#84CAFF] focus:border-[#84CAFF] border border-[#D0D5DD] focus:outline-none"/>
            <label  for="text lg:w-[688px] w-[311px]">You agree to providing your data to Precious Egwuenu who may contact you.</label>
            </div>       
            {error&& check.length<=0 ?  <p class="hint2 mt-2 mx-2">Please check the box to proceed!</p> : ""}
          </div>

          <div>
              <button id="btn__submit" type="submit"  onClick={emailValidation}  className="mt-3 w-[343px] lg:w-[720px] bg-[#1570EF] hover:bg-[#84CAFF] ring-opacity-25  focus:ring-4 ring-[#1570EF] text-[#FFFF]">Send message</button>
          </div> */}


          </form>    
      </div>


    </div>
  )
}

export default Contactus
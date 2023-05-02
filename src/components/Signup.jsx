


import React from 'react'
import { useState,useNavigate } from 'react';
import axios from 'axios';

const Signup = () => {

  
  const [firstname,setFirstname]=useState('');
  const [lastname ,setLastname]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  
  
  async function submit(e){
    e.preventDefault();
  
    try{
      await axios.post("http://localhost:8080/signup",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist"){
          alert("user already exists")
        }
        else if(res.data=="notexist")
        {
          history("/",{state:{id:email}})
        }
          
        
      })
    }
    catch(err){
      console.log(err);
    }
  }




  return (
    
    <body className="antialiased bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-500 via-gray-900 to-black">
      <div className="container px-6 mx-auto">
        <div
          className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
        >
          <div className="flex flex-col w-full">
            <div>
              <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">Client Area</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Control and monitor your website data from dashboard.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left ">
                SignUp
              </h2>
              <form action="post" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label for="username" className="text-gray-500 mb-2"
                  >First Name</label>

                  <input
                    type="text"
                    id="username"
                    onChange={(e)=>{setFirstname(e.target.value)}}
                    placeholder="Enter Your First Name"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label for="username" className="text-gray-500 mb-2"
                  >Last Name</label>

                  <input
                    type="text"
                    id="username"
                    onChange={(e)=>{setLastname(e.target.value)}}
                    placeholder="Please enter your Last Name"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label for="password" className="text-gray-500 mb-2"
                  >Email</label>
                  
                  <input
                    type="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    id="email"
                    placeholder="Please Enter Your Email"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:shadow-lg"
                  />
                </div>

                <div id="input" className="flex flex-col w-full my-5">
                  <label for="password" className="text-gray-500 mb-2"
                  >Password</label>
                  
                  <input
                    type="password"
                    id="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="Please enter your password"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:shadow-lg"
                  />
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    onClick={submit}
                    className="w-full py-4 bg-slate-700 rounded-lg text-white"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold">SignUp</div>
                    </div>
                  </button>
                  
                  <div className="flex justify-evenly mt-5">
                    <a
                      href="/"
                      className="w-full text-center font-medium text-gray-500"
                    >Recover password!</a
                    >
                    <a
                      href="/login"
                      className="w-full text-center font-medium text-gray-500">
                   
                    SingIn!</a>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Signup;



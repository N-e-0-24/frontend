


import React, {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate,Link} from "react-router-dom"


const Login = () => {

const history =useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


async function submit(e){
  e.preventDefault();

  try{
    await axios.post("http://localhost:8080/login",{
      email,password
    })
    .then(res=>{
      if(res.data=="exist"){
        history("/",{state:{id:email}})
      }
      else if(res.data=="notexist"){
      alert("user have not signed up")
      }
      
    })
    .catch(e=>{
      console.log(e);
    })
  }
  catch(e){
    console.log(e);
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
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                SignIn
              </h2>
              <form action="post" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label for="username" className="text-gray-500 mb-2"
                  >Username</label>

                  <input
                    type="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    id="username"
                    placeholder="Please enter your email or username"
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
                      <div className="font-bold">SignIn</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="transition duration-200 border border-gray-700 text-black w-full py-4 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block mt-4"
                  >
                    <div className="flex items-center justify-center">
                      <div className="mr-2">
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z"></path> </g></svg>

                      </div>
                      <div className="font-bold font-google">Continue with Google</div>
                    </div>
                  </button>
                  <div className="flex justify-evenly mt-5">
                    <a
                      href="/"
                      className="w-full text-center font-medium text-gray-500"
                    >Recover password!</a
                    >
                    <a
                      href="/signup"
                      className="w-full text-center font-medium text-gray-500"
                      
                    >Singup!</a
                    >
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

export default Login;


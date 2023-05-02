import React,{useEffect} from 'react'
import {robo} from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Caraousel = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
          easing: 'ease',
        });
      }, []);
      

  return (
    <div>
      <div className="py-8 bg-white">
        <div className="w-5/6 max-w-5xl mx-auto">
            <h2 className="pt-8 text-3xl text-center leading-tight font-bold text-gray-900 xs:text-4xl sm:text-5xl">
                Here's what our customers are saying
                </h2>
                <p className="mt-6 text-base font-body text-gray-800 sm:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            <div className="pt-16 md:pb-8 flex flex-col items-center sm:flex-row sm:justify-around">
                <div className="w-64 mb-12 sm:mb-0 bg-white border border-gray-400 p-6 rounded transform transition ease-in hover:scale-110 duration-200 aos-init aos-animate" data-aos="flip-right">
                    <p className="text-xl md:text-2xl leading-8 text-gray-700">
                        <svg aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="quote-left" 
                        className="svg-inline--fa fa-quote-left fa-w-16 text-purple-600 m-2" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"><path 
                        fillRule="currentColor" 
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 
                        48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7
                         24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                        </path>
                        </svg>
                        This is an amazing product! I am blown away by the number of features and the customer service. Highly recommend.
                        </p>
                        <div className="flex items-center">
                            <img height="80" width="80" src={robo} alt="testimonial-avatar-1" className="flex-shrink-0 h-20 w-20 rounded-full my-6 object-cover"/>
                            <div className="flex flex-col ml-4">
                                <h2 className="text-lg leading-6 font-bold text-gray-900">John Doe
                                </h2>
                                <p className="leading-6 font-body text-gray-800">
                                    CTO, Tesla
                                </p>
                                </div>
                                </div>
                                </div>
                                <div className="w-64 mb-12 sm:mb-0 bg-white border border-gray-400 p-6 rounded transform transition ease-in hover:scale-110 duration-200 aos-init aos-animate" data-aos="flip-right">
                    <p className="text-xl md:text-2xl leading-8 text-gray-700">
                        <svg aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="quote-left" 
                        className="svg-inline--fa fa-quote-left fa-w-16 text-purple-600 m-2" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"><path 
                        fillRule="currentColor" 
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 
                        48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7
                         24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                        </path>
                        </svg>
                        This is an amazing product! I am blown away by the number of features and the customer service. Highly recommend.
                        </p>
                        <div className="flex items-center">
                            <img height="80" width="80" src={robo} alt="testimonial-avatar-1" className="flex-shrink-0 h-20 w-20 rounded-full my-6 object-cover"/>
                            <div className="flex flex-col ml-4">
                                <h2 className="text-lg leading-6 font-bold text-gray-900">John Doe
                                </h2>
                                <p className="leading-6 font-body text-gray-800">
                                    CTO, Tesla
                                </p>
                                </div>
                                </div>
                                </div>
                               
            <div className="w-64 mb-12 sm:mb-0 bg-white border border-gray-400 p-6 rounded transform transition ease-in hover:scale-110 duration-200 aos-init" 
                   data-Aos="flip-right">
                <p className="text-xl md:text-2xl leading-8 text-gray-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" 
                    className="svg-inline--fa fa-quote-left fa-w-16 text-purple-600 m-2" 
                    role="img" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512">
                    <path fillRule="currentColor"
                     d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 
                     48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0
                      26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                      >
                    </path>
                    </svg>What can I say? You absolutely have to try this thing otherwise you're going to miss out. I promise you won't regret it.
                    </p>
                    <div className="flex items-center">
                        <img height="80" width="80" src={robo} alt="testimonial-avatar-1" className="flex-shrink-0 h-20 w-20 rounded-full my-6 object-cover"/>
                        <div className="flex flex-col ml-4">
                            <h2 className="text-lg leading-6 font-bold text-gray-900">Rita Doe
                            </h2>
                            <p className="leading-6 font-body text-gray-800">COO, SolarCity
                            </p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
    </div>
  )
}

export default Caraousel

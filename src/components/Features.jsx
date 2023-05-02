import React from 'react';

import {robo,uv,mist} from "../assets";

const Features = () => {
  return (
    <div>
      <div class="py-8 lg:py-16 bg-purple-100">
        <h3 class="text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Benefits</h3>
        <div class="container mx-auto">\
        <div class="flex flex-col md:flex-row py-12 lg:py-16">
            <div class="w-full md:w-1/2 p-4 md:p-0 md:pt-12 aos-init aos-animate" data-aos="fade-right">
                <h3 class="text-2xl md:text-3xl text-center md:text-justify font-bold tracking-wide leading-tight pb-6">Explain Benefit #1</h3>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
                <div class="w-full md:w-1/2 aos-init aos-animate" data-aos="fade-left">
                    <img height="32" width="32" class="mx-auto pt-8 sm:pt-0 object-contain px-4 w-5/6 md:w-9/12 " src={uv} alt="benefit-preview"/>
                    </div></div>
                    <div class="flex flex-col-reverse md:flex-row py-12">
                        <div class="w-full md:w-1/2 aos-init" data-aos="fade-right">
                            <img height="32" width="32" class="mx-auto pt-8 sm:pt-0 object-contain px-4 w-5/6 md:w-9/12" src={robo} alt="benefit-preview"/></div>
                            <div class="w-full md:w-1/2 p-4 md:p-0 md:pt-12 aos-init" data-aos="fade-left">
                                <h3 class="text-2xl md:text-3xl text-center md:text-justify font-bold tracking-wide leading-tight pb-6">Explain Benefit #2
                                </h3>
                                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                </p>
                                </div>
                                </div>
                                <div class="flex flex-col md:flex-row py-12 lg:py-16">
                                    <div class="w-full md:w-1/2 p-4 md:p-0 md:pt-12 aos-init" data-aos="fade-right">
                                        <h3 class="text-2xl md:text-3xl text-center md:text-justify font-bold tracking-wide leading-tight pb-6">Explain Benefit #3</h3>
                                        <p class="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                        </p>
                                        </div>
                                        <div class="w-full md:w-1/2 aos-init" data-aos="fade-left">
                                            <img height="32" width="32" class="mx-auto pt-8 sm:pt-0 object-contain px-4 w-5/6 md:w-9/12" src={mist} alt="benefit-preview"/>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
    </div>
  )
}

export default Features

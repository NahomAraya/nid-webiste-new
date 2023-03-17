import React, {useState} from "react";
import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations"

import faqIcon from "../../../../assets/6-01.svg";


const FaqTitle =() => {
    const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
    return(
        <>
           <div className="p-6  flex justify-center items-center px-40 pt-20 gap-10">
            <div className="flex flex-col ">
               <h1 className="mb-1 w-full text-4xl font-semibold text-MetallicBlue md:text-4xl font-barlow">Frequently Asked Questions</h1>
            
               <div className="relative w-full">
               <hr className="absolute  w-full border-b-1 mb-10  border-gray-500"/>
               <hr className="absolute left-0 w-[20%] border-b-4 mb-10  border-green"/>
               </div>
              
               <p className='mt-2 text-base text-left text-black font-medium font-poppins'>The Fayda IDMS is the central Foundational ID Management 
                    system that integrates with many other external Identification 
                    System (ABIS) alternatives, and card printing services.</p>

              <div className="flex mt-4 gap-10 ">

              <div className={`${activeButtonIndex === 0 ? " bg-lightblue text-MetallicBlue  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] " : " bg-MetallicBlue text-green " }  flex gap-6 place-items-center rounded-xl p-8 px-12 text-center hover:cursor-pointer hover:scale-110  transition-all ease-out duration-300  `} onClick={() =>  {setActiveButtonIndex(0);}}>
                <div className="absolute right-0 w-0 h-0  group-hover:w-full group-hover:h-full  transition-all ease-out duration-300  bg-lightblue flex flex-col justify-start items-start rounded-xl"> </div>
                    <Animate.FadeUp>
                    <img src={faqIcon} alt="vision Icon" className="relative w-40 rounded-full border-white  border-2 p-0.5"></img>  
                    </Animate.FadeUp>
                    <div className="flex flex-col">
                        <Animate.FadeUp>
                        <h5 class="mb-2 text-2xl font-bold text-left transition-all duration-300 ease-out  font-barlow  relative">FAQs</h5>
                        </Animate.FadeUp>
                        <Animate.FadeUp>
                        <p class="text-left text-sm text-white font-poppins font-medium  relative">
                        Lorem ipsuit. Delectus vuasi issimos tempore deleni at quis corrupti
                        aliquid consequatur eaque dolore eum adipisci.
                        </p>
                        </Animate.FadeUp>
                    </div>
                   
            </div>
            <div className={`${activeButtonIndex === 1 ? " bg-lightblue text-MetallicBlue  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] " : " bg-MetallicBlue text-green " }  flex gap-6 place-items-center rounded-xl p-8 px-12 text-center hover:cursor-pointer hover:scale-110  transition-all ease-out duration-300  `} onClick={() =>  {setActiveButtonIndex(1);}}>
                <div className="absolute left-0  w-0 h-0  group-hover:w-full group-hover:h-full  transition-all ease-out duration-300  bg-lightblue flex flex-col justify-start items-start rounded-xl"> </div>
                    <Animate.FadeUp>
                    <img src={faqIcon} alt="vision Icon" className="relative w-40 rounded-full border-white  border-2 p-0.5"></img>  
                    </Animate.FadeUp>
                    <div className="flex flex-col">
                        <Animate.FadeUp>
                        <h5 class="mb-2 text-2xl font-bold text-left  transition-all duration-300 ease-out cursor-pointer font-barlow  relative">Pre-Reg FAQs</h5>
                        </Animate.FadeUp>
                        <Animate.FadeUp>
                        <p class="text-left text-sm text-white font-poppins font-medium  relative">
                        Lorem ipsuit. Delectus vuasi issimos tempore deleni at quis corrupti
                        aliquid consequatur eaque dolore eum adipisci.
                        </p>
                        </Animate.FadeUp>
                    </div>
                   
            </div>
          
      
              </div>
               
            </div>
            <div class="bg-[#f3b32b] w-[40%] place-items-center rounded-xl px-10 p-4 shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)]">
                   
                   
                        <Animate.FadeUp>
                        <h5 className="mb-2 text-2xl font-bold text-left font-barlow p-2">Popular Questions</h5>
                        </Animate.FadeUp>
                        <Animate.FadeUp>
                            <ul className="gap-4 place-items-center">
                                <li class="text-left text-base text-gray-500 font-poppins font-light underline underline-offset-4 p-2">
                                What is Fayda?
                                </li>
                                <li class="text-left text-gray-500  text-base font-poppins font-light underline underline-offset-4 p-2">
                               How Can I Get Fayda?
                                </li>
                                <li class="text-left text-gray-500  text-base font-poppins font-light p-2">
                                Where Are You Located?
                                </li>
                                <li class="text-left text-gray-500  text-base font-poppins font-light p-2">
                                How Can I Get Fayda ID? 
                                </li>
                            </ul>
                      
                        </Animate.FadeUp>
                 
            </div>
            
             
             
           </div>
        </>
    )

}
export default FaqTitle;
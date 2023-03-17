import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';
import regIcon from "../../../../assets/2-01.svg";
import callIcon from "../../../../assets/3-01.svg";
import credIcon from "../../../../assets/5-01.svg";
import preRegIcon from "../../../../assets/6-01.svg";
import {FaRegEdit } from 'react-icons/fa';
import { FaArtstation} from 'react-icons/fa';
import {BiSearchAlt } from 'react-icons/bi';
import {FaCanadianMapleLeaf} from 'react-icons/fa'
import { FaRegCommentAlt} from 'react-icons/fa'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useMediaQuery } from "react-responsive";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Hero from '../hero/hero';

const Principleabout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
<Hero/>

{/* for  large device */}
    <div className='hidden xl:inline'>        
<div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
    
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-3">
    
      <div class="  md:w-1/2 xl:w-2/5 p-4  ">

               
           <div className="flex gap-2 mb-10 text-sm leading-tight text-left">
          
           
                    <div className="w-28 ">
                      <div
                       
                        className="p-2 border-2 rounded-full border-green xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          <BiSearchAlt className='text-4xl text-green' />
                      </div>
                    </div>
               
                    <p className="text-justify text-black font-poppins ">
                    <p className='text-2xl font-semibold'>Vision</p>
                      This stage require physical appearance of the applicant of
                      at registration station A ll inputs nad biometric data
                      will be taken
                    </p>
            </div>
         
            <div className="flex gap-4 mb-10 text-sm leading-tight text-left">
           
                    <div className="w-28">
                      <div
                      
                        className="p-2 border-2 rounded-full border-green xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          < FaArtstation className='text-4xl text-green' />
                        </div>
                    </div>
                    <p className="text-justify text-block font-poppins ">
                    <h1 className='text-2xl font-semibold'>Mission</h1>
                      This stage require physical appearance of the applicant of
                      at registration station A ll inputs nad biometric data
                      will be taken
                    </p>
            </div>

         
            <div className="flex gap-2 text-sm leading-tight text-left ">
           
                    <div className="w-28 ">
                      <div
                     
                         className="p-2 border-2 rounded-full border-green xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          <FaCanadianMapleLeaf className='text-4xl text-green' />
                      </div>
                    </div>
                    <p className="text-justify text-black font-poppins ">
                    <p className='text-2xl font-semibold'> Vaules</p>
                      This stage require physical appearance of the applicant of
                      at registration station A ll inputs nad biometric data
                      will be taken
                    </p>
            </div>
      </div>

        

        <div class=" xl:w-1/4 p-2 mt-10">
    
    <a href="" class=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
  
    <div class=" overflow-hidden">
   
  
      <div className="flex justify-start mb-5 text-4xl text-start">
        
          <h1 className="pl-8 mb-0 font-semibold font-barlow text-MetallicBlue ">
            NID    <div className='text-4xl font-light text-MetallicBlue '><h2 className=''>Principles</h2></div>
          </h1>
          <div className='ml-12'><FaRegEdit className='text-7xl text-MetallicBlue' /></div>
          
        </div>
       
        
    </div>
   
   <div>
   <p className="text-justify text-black  font-poppins pl-7 pr-7 mb-7">
                  This stage require physical appearance of the applicant of
                  at registration station All inputs nad biometric data
                  will be taken
                  
     </p>
   
     <div>
    
     </div>
  
     <div className='flex justify-start ml-10'>
  <button className="p-4 py-3 pt-2 mb-5 font-bold text-white rounded  bg-green hover:bg-blue-700 px-7 border-green">
  Read More
</button>
  </div>


   </div>
    
  </a>
  
  </div>
  


      <div class=" xl:w-1/4 p-2 mt-10 ">
    
    <a href="" class=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
  
    <div class=" overflow-hidden">
   
    <div className="flex justify-start text-4xl text-start">
  
          <h1 className="mb-0 font-semibold  font-barlow text-MetallicBlue p-7">
            FAQS
            
          </h1>
          <div className='ml-20'><FaRegCommentAlt className='text-7xl text-MetallicBlue' /></div>
        </div>
        
    </div>
   
   <div>
   <p className="text-justify text-black  font-poppins pl-7 pr-7 mb-7">
                  This stage require physical appearance of the applicant of
                  at registration station All inputs nad biometric data
                  will be taken
     </p>
   
     <div>
    
     </div>
  
     <div className='flex justify-start ml-10'>
  <button className="p-4 py-3 pt-2 mb-5 font-bold text-white rounded  bg-green hover:bg-blue-700 px-7 border-green">
  Read More
</button>
  </div>

  
   </div>
    
  </a>
  
  </div>
  

    </div>
  </div>
</div>


</div>


{/* for small device */}
<div class="grid grid-cols-1 hidden max-xl:inline">
  <div class="col-span-2">
    <div
      data-te-spy="scroll"
      data-te-target="#scrollspy1"
      data-te-offset="200"
      class="relative h-48 overflow-auto">
      <section id="example-1">
      <div class="  md:w-1/2 xl:w-2/5 p-4  ">

               
           <div className="flex gap-2 mb-10 text-sm leading-tight text-left">
          
           
                    <div className="w-28 ">
                      <div
                       
                        className="p-2 border-2 rounded-full border-green xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          <BiSearchAlt className='text-4xl text-green' />
                      </div>
                    </div>
               
                    <p className="text-justify text-black font-poppins ">
                    <p className='text-2xl font-semibold'>Vision</p>
                      This stage require physical appearance of the applicant of
                      at registration station A ll inputs nad biometric data
                      will be taken
                    </p>
            </div>
         
            <div className="flex gap-4 mb-10 text-sm leading-tight text-left">
           
                    <div className="w-28">
                      <div
                      
                        className="p-2 border-2 rounded-full border-green xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          < FaArtstation className='text-4xl text-green' />
                        </div>
                    </div>
                    <p className="text-justify text-block font-poppins ">
                    <h1 className='text-2xl font-semibold'>Mission</h1>
                      This stage require physical appearance of the applicant of
                      at registration station A ll inputs nad biometric data
                      will be taken
                    </p>
            </div>

         
            <div className="flex gap-2 text-sm leading-tight text-left ">
           
                    <div className="w-28 ">
                      <div
                     
                         className="p-2 border-2 rounded-full border-green xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          <FaCanadianMapleLeaf className='text-4xl text-green' />
                      </div>
                    </div>
                    <p className="text-justify text-black font-poppins ">
                    <p className='text-2xl font-semibold'> Vaules</p>
                      This stage require physical appearance of the applicant of
                      at registration station A ll inputs nad biometric data
                      will be taken
                    </p>
            </div>
      </div>

        
      </section>
      <section id="example-2">
      <div class=" xl:w-1/4 p-2 mt-10">
    
    <a href="" class=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
  
    <div class=" overflow-hidden">
   
  
      <div className="flex justify-start mb-5 text-4xl text-start">
        
          <h1 className="pl-8 mb-0 font-semibold font-barlow text-MetallicBlue ">
            NID    <div className='text-4xl font-light text-MetallicBlue '><h2 className=''>Principles</h2></div>
          </h1>
          <div className='ml-12'><FaRegEdit className='text-7xl text-MetallicBlue' /></div>
          
        </div>
       
        
    </div>
   
   <div>
   <p className="text-justify text-black  font-poppins pl-7 pr-7 mb-7">
                  This stage require physical appearance of the applicant of
                  at registration station All inputs nad biometric data
                  will be taken
                  
     </p>
   
     <div>
    
     </div>
  
     <div className='flex justify-start ml-10'>
  <button className="p-4 py-3 pt-2 mb-5 font-bold text-white rounded  bg-green hover:bg-blue-700 px-7 border-green">
  Read More
</button>
  </div>


   </div>
    
  </a>
  
  </div>
  <div class=" xl:w-1/4 p-2 mt-10 ">
    
    <a href="" class=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
  
    <div class=" overflow-hidden">
   
    <div className="flex justify-start text-4xl text-start">
  
          <h1 className="mb-0 font-semibold  font-barlow text-MetallicBlue p-7">
            FAQS
            
          </h1>
          <div className='ml-20'><FaRegCommentAlt className='text-7xl text-MetallicBlue' /></div>
        </div>
        
    </div>
   
   <div>
   <p className="text-justify text-black  font-poppins pl-7 pr-7 mb-7">
                  This stage require physical appearance of the applicant of
                  at registration station All inputs nad biometric data
                  will be taken
     </p>
   
     <div>
    
     </div>
  
     <div className='flex justify-start ml-10'>
  <button className="p-4 py-3 pt-2 mb-5 font-bold text-white rounded  bg-green hover:bg-blue-700 px-7 border-green">
  Read More
</button>
  </div>

  
   </div>
    
  </a>
  
  </div>
  
      </section>
     
    </div>
  </div>

  <div>

  
  </div>
</div>



</>
  )
}

export default Principleabout;

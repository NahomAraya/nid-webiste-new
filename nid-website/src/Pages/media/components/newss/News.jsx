import React, {useEffect, useState} from "react";
//import './news.css';
import Iframe from 'react-iframe';
import { useMediaQuery } from 'react-responsive';
import i18next from "i18next";
import TextLoop from "react-text-loop";


const News = ({list}) => {
   
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    
      return(
        <>
       
        {/* flex flex-col items-center w-full h-full pb-20 scale-90 pt-14 md:scale-100 font-barlow */}
        {list?
        <div className="w-full pt-16 mb-20 px-28">
            
    

           <div className="flex gap-3 ">

            
            <div className="relative flex items-center justify-center basis-[50%]  transition-all duration-700 ease-in-out transform scale-100 hover:scale-95 rounded-md  ">
              <img className="absolute object-cover w-full h-full transition-all duration-500 ease-in-out transform scale-100 rounded-md hover:scale-100 hover:cursor-pointer" src={`http://196.189.124.207:8000${list.data[0].image}`} alt={list.data[0].image}/>
              <div className="absolute bottom-0 left-0 right-0 px-10 py-2 text-base bg-news-gradient from-green font-poppins">                
                    <h1 className="mb-3 text-lg text-white whitespace-nowrap"><span className="px-5 py-1 border-t-2 border-b-2 border-l-2 border-r-2 border-white rounded-sm">Trending</span></h1>
                    <div className="flex">
                    <div class=" h-6  bg-[#21cfac] w-1 mr-2 my-3"></div>
                        <p class=" mt-2 text-lg text-white font-medium font-barlow ">{i18next.language == "en" && list.data[0].sub_title}
                        {i18next.language == "amh" && list.data[0].sub_title_amh}
                        </p>
                    </div>  
                </div>.
            </div>


            <div className="flex flex-col gap-2 basis-[50%]">
{/* one slightly bigger news */}
                <div className="relative transition-all duration-700 ease-in-out transform scale-100 rounded-md hover:scale-95 ">
                                <img className="object-cover w-full h-full rounded-md hover:cursor-pointer" src={`http://196.189.124.207:8000${list.data[1].image}`}  alt={list.data[1].image}/>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-news-gradient">
                        <div className="flex">
                        <div class="h-6  bg-[#21cfac] w-1 mr-2 mt-3"></div>
                            <p class="mt-2 text-lg text-white font-barlow">{i18next.language == "en" && list.data[1].sub_title}
                        {i18next.language == "amh" && list.data[1].sub_title_amh}</p>
                        </div>  
                    </div>
                </div> 


{/* Two small news */}
                <div className="flex gap-2 ">
                    
                <div className="relative basis-[50%] transition-all duration-700 ease-in-out transform scale-100 hover:scale-95">
                    <img className="object-cover w-full h-full rounded-md hover:cursor-pointer"  src={`http://196.189.124.207:8000${list.data[2].image}`}  alt={list.data[2].image}/>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-news-gradient">
              
                 
                        <div className="flex">
                        <div class="h-10  bg-[#21cfac] w-1 mr-2 mt-3"></div>

                            <p class="mt-2 text-base text-white font-barlow">
                            {i18next.language == "en" && list.data[2].sub_title}
                        {i18next.language == "amh" && list.data[2].sub_title_amh}
                            </p>
                        </div>  
                    </div>
                </div>

                <div className="relative basis-[50%] transition-all duration-700 ease-in-out transform scale-100 hover:scale-95">
                    <img className="object-cover w-full h-full rounded-md hover:cursor-pointer"  src={`http://196.189.124.207:8000${list.data[3].image}`}  alt={list.data[3].image}/>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-news-gradient">
              
                 
                        <div className="flex">
                        <div class="h-10  bg-[#21cfac] w-1 mr-2 mt-3"></div>

                            <p class="mt-2 text-base text-white font-barlow">
                            {i18next.language == "en" && list.data[3].sub_title}
                        {i18next.language == "amh" && list.data[3].sub_title_amh}
                            </p>
                        </div>  
                    </div>
                </div>


                </div>

                
                
           
            </div>

           </div>
       
                   

        </div>:
        <></>
}
        </>
    );
}
export default News;
import React , {useEffect, useState }from "react";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import './news.css';
import { useMediaQuery } from 'react-responsive'
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const News = ({list}) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const dispatch = useDispatch();
  

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
  
   
  
        return(
            <>
            {list?
                <div className="w-full px-20 pt-16 mb-20">
                <h1 className="mb-1 text-4xl font-bold text-MetallicBlue md:text-4xl font-barlow">{t("latest-updates")}</h1>
             
                <hr className="w-[20%] border-b-4 mb-10  border-green"/>
 
                <div className="flex gap-3 ">
 
                 
                 <div className="relative flex items-center justify-center basis-[50%] transition-all duration-700 ease-in-out transform scale-100 hover:scale-95">
                 {/* <Iframe url="https://www.sdrive.app/embed/1ptBQD"
                     width="100%"
                     height="100%"
                     id=""
                     className=""
                     display="block"
                 position="relative"/> */}
                   <img className="absolute object-cover w-full h-full transition-all duration-500 ease-in-out transform scale-100 hover:scale-100 hover:cursor-pointer" src={`http://196.189.124.207:8000${list.data[0].image}`} alt={list.data[0].image}/>
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
 
 
                 <div className="flex flex-col gap-2 basis-[50%] ">
                     <div className="relative transition-all duration-700 ease-in-out transform scale-100 hover:scale-95">
                             {/* <Iframe url="https://www.sdrive.app/embed/1ptBQD"
                                 width="100%"
                                 height="300px"
                                 id=""
                                 className=""
                                 display="block"
                                 position="relative"/> */}
                                     <img className="object-cover w-full h-full hover:cursor-pointer" src={`http://196.189.124.207:8000${list.data[1].image}`}  alt={list.data[1].image}/>
                             <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-news-gradient">
                     
                   
                      
                             <div className="flex">
                             <div class="h-6  bg-[#21cfac] w-1 mr-2 mt-3"></div>
                                 <p class="mt-2 text-lg text-white font-barlow">{i18next.language == "en" && list.data[1].sub_title}
                             {i18next.language == "amh" && list.data[1].sub_title_amh}</p>
                             </div>  
                         </div>
                     </div> 
 
 
 
                     <div className="flex gap-2 ">
                     <div className="relative basis-[50%] transition-all duration-700 ease-in-out transform scale-100 hover:scale-95">
                         {/* <Iframe url="https://www.sdrive.app/embed/1ptBQD"
                             width="100%"
                             height="300px"
                             id=""
                             className=""
                             display="block"
                             position="relative"/> */}
                         <img className="object-cover w-full h-full hover:cursor-pointer"  src={`http://196.189.124.207:8000${list.data[2].image}`}  alt={list.data[2].image}/>
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
 
 
 
 
                     <div className="relative basis-[50%]  transition-all duration-700 ease-in-out transform scale-100 hover:scale-95">
 {/*                     
                         <Iframe url="https://www.sdrive.app/embed/1ptBQD"
                             width="100%"
                             height="300px"
                             id=""
                             className="blur-lg"
                             display="block"
                             position="relative"/> */}
                         {/* <div className="w-full h-[90%]  bg-MetallicBlue blur-xl"></div> */}
                           
                         {/* <img className="" src={require('../../../../assets/news1.jpg')}  alt="news3"/> */}
                             <div className="absolute top-0 bottom-0 left-0 right-0 px-4 py-2 bg-news-gradient " onClick={()=>navigate("/media")}>
                            <p class=" text-center  align-middle items-center pt-16 text-2xl text-white font-barlow font-semibold hover:cursor-pointer hover:-translate-y-1 transform transition duration-500 hover:scale-110">{t("learn-more")} </p>
                      
                             <div className="flex">
                             {/* <div class="h-[40px]  bg-[#21cfac] w-[5px] mr-2"></div> */}
 
                                 {/* <p class="mt-2 text-xl text-white">Load More</p> */}
                             </div>  
                         </div>
                     </div>
                     learn-more"
                     </div>
                     
                
                 </div>
 
                </div>
            
                        
 
             </div>:
             <>
             </>
            
        }
            {/* flex flex-col items-center w-full h-full pb-20 scale-90 pt-14 md:scale-100 font-barlow */}
        
            </>
        );
}
export default News;
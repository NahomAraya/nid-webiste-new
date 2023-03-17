import React, { useEffect, useMemo, useState } from "react";
import checkIcon from "../../../../assets/8-01-Checklist.svg";
import Svg1 from "../../../../assets/6-01.svg";
import CardSlider from "../cardSlider/CardSlider";
import { useMediaQuery } from "react-responsive";



import { Animate } from "../../../../hooks/animations";

import { useTranslation } from "react-i18next";



// const useFetching = (someFetchActionCreator) => {
//   const dispatch = useDispatch();
//   console.log("Dispatching....")
//   useEffect(() => {
//     dispatch(someFetchActionCreator());
//   }, [dispatch])
// }

const About = ({list}) => {
  const {t} = useTranslation()


  // useMemo
  // (
  //   dispatch(getAboutList()),
  //   [dispatch]
  // );
 
   
 
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });


 
 
  
 

  return (
    
    <>
  
  
    <div className="flex flex-col items-center justify-center w-full h-full pb-2 scale-90 md:pb-0 pt-14 md:scale-100 font-barlow">
      <Animate.FadeUp>
        <div className="flex text-5xl md:text-5xl ">
          <h1 className="pb-1 text-MetallicBlue">{t("About-your")}</h1>
          <h1 className="pl-2.5 font-extrabold text-MetallicBlue">{t("hero-fayda")}</h1>
          
        </div>
      </Animate.FadeUp>
       
      <Animate.FadeUp>
        <div className="flex flex-col justify-center pb-5 place-items-center">
        <Animate.FadeUp>
        <p className="p-3 px-10 text-sm leading-tight text-center md:px-28 font-poppins md:text-base">
          {t("About-program")}{" "}
        </p>
        </Animate.FadeUp>
        <Animate.FadeUp>
        <button className="h-8 text-base  text-white px-16 bg-green rounded-2xl hover:bg-[#083247]">
                {t("learn-more")}
              </button>
              </Animate.FadeUp>
              </div>
      </Animate.FadeUp>

      
      {isDesktopOrLaptop ? (
        <Animate.FadeUp>
          <div className="grid justify-center grid-cols-3 gap-1 p-10 place-items-center ">
          <div className="flex">
              <div className="flex flex-col content-center mx-10 text-sm text-center md:px-18 place-items-center md:text-base">
              <Animate.FadeUp>
                <div className="w-10 h-10 p-1.5 border-2 rounded-full border-green/50 bg-MetallicBlue/95">
                <Animate.FadeUp>
                  <img
                    src={checkIcon}
                    className="h-6 w-7 "
                    alt="Icon_checklist"
                  ></img>
                   </Animate.FadeUp>
                </div>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <h1 className="pt-3 text-2xl font-semibold md:text-3xl text-MetallicBlue">
                  {t('about-get-fayda')}
                </h1>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <p className="py-4 text-sm font-poppins">
              {t('about-get-fayda-text')}
                </p>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <button className="h-8 text-base  text-white px-11 bg-green rounded-2xl hover:bg-[#083247]">
                {t("learn-more")}
                </button>
                </Animate.FadeUp>
              </div>
              
            </div>

            <div className="flex">
              <div className="flex flex-col content-center mx-10 text-sm text-center md:px-18 place-items-center md:text-base">
              <Animate.FadeUp>
                <div className="w-10 h-10 p-1.5 border-2 rounded-full border-green/50 bg-MetallicBlue/95">
                <Animate.FadeUp>
                  <img
                    src={checkIcon}
                    className="h-6 w-7 "
                    alt="Icon_checklist"
                  ></img>
                   </Animate.FadeUp>
                </div>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <h1 className="pt-3 text-2xl font-semibold md:text-3xl text-MetallicBlue">
                {t('about-fayda-service')}
                </h1>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <p className="py-4 text-sm font-poppins">
                {t('about-fayda-service-text')}
                </p>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <button className="h-8 text-base  text-white px-11 bg-green rounded-2xl hover:bg-[#083247]">
                {t("learn-more")}
                </button>
                </Animate.FadeUp>
              </div>
            
            </div>

            <div className="flex">
              <div className="flex flex-col content-center mx-10 text-sm text-center md:px-18 place-items-center md:text-base">
              <Animate.FadeUp>
                <div className="w-10 h-10 p-1.5 border-2 rounded-full border-green/50 bg-MetallicBlue/95">
                <Animate.FadeUp>
                  <img
                    src={checkIcon}
                    className="h-6 w-7 "
                    alt="Icon_checklist"
                  ></img>
                   </Animate.FadeUp>
                </div>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <h1 className="pt-3 text-2xl font-semibold md:text-3xl text-MetallicBlue">
                  {t('about-update-fayda')}
                </h1>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <p className="py-4 text-sm font-poppins">
                {t('about-update-fayda-text')}
                </p>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <button className="h-8 text-base  text-white px-11 bg-green rounded-2xl hover:bg-[#083247]">
                {t("learn-more")}
                </button>
                </Animate.FadeUp>
              </div>
             
            </div>
      

          
       {/* { 
       
        list.data.map((listItem) => (
             <div className="flex">
             <div className="flex flex-col content-center mx-10 text-sm text-center md:px-18 place-items-center md:text-base">
             <Animate.FadeUp>
               <div className="w-10 h-10 p-1.5 border-2 rounded-full border-green/50 bg-MetallicBlue/95">
               <Animate.FadeUp>
                 <img
                   src={checkIcon}
                   className="h-6 w-7 "
                   alt="Icon_checklist"
                 ></img>
                  </Animate.FadeUp>
               </div>
               </Animate.FadeUp>
               <Animate.FadeUp>
               <h1 className="pt-3 text-2xl font-semibold md:text-3xl text-MetallicBlue">
                {listItem.title}
               </h1>
               </Animate.FadeUp>
               <Animate.FadeUp>
               <p className="py-4 text-sm font-poppins">
               {listItem.description}
               </p>
               </Animate.FadeUp>
               <Animate.FadeUp>
               <a >
               <button className="h-8 text-base  text-white px-11 bg-green rounded-2xl hover:bg-[#083247]">
               {t("learn-more")}
               </button>
               </a>
               </Animate.FadeUp>
             </div>
          
           </div>))} */}
                </div>
        </Animate.FadeUp>
      )
       : (
        <CardSlider />
      )}
            


    </div>
   
    </>
         
  );
};

export default About;

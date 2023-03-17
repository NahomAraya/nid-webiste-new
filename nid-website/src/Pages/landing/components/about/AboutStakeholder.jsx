import React from "react";
import visionIcon from "../../../../assets/visionIcon.png"
import valuesIcon from "../../../../assets/valuesIcon.png"
import missionIcon from "../../../../assets/missionIcon.png"

import {useMediaQuery} from 'react-responsive'
import CardSliderStakeholder from '../cardSlider/CardSliderStakeholder';
import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";
import { useTranslation } from "react-i18next";


const AboutStakeholder = () => {

  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

  const isDesktopOrLaptop = useMediaQuery({minWidth:1224});
  const {t} = useTranslation()
  
  return (
    <div className="flex flex-col items-center w-full h-full pb-20 scale-90 pt-14 md:scale-100 ">
      <Animate.FadeUp>
      <div className="flex justify-center w-full text-3xl md:text-4xl ">
      
        <hr class="h-1 my-8 rounded-sm bg-green border-0 border-b-green w-16 md:w-28 lg:w-28"></hr>
        <h1 className="px-3 pt-3 pb-2 font-bold md:pt-2 lg:pt-1 md:text-5xl text-MetallicBlue font-barlow">{t("about-who-are")}</h1>
        <hr class="h-1 my-8 rounded-sm bg-green border-0 border-b-green w-16 md:w-28 lg:w-28"></hr>
      
      </div>
      </Animate.FadeUp>

      <div className="flex flex-row items-center justify-center w-full text-sm lg:w-4/5 ">
      <Animate.FadeUp>
        <p className="px-20 text-center md:text-sm md:px-72">
        {t("about-who-are-text")}{" "}
        </p>

        <div className="flex justify-center pt-5">
        <button className="h-8 text-base  text-white px-16 bg-green rounded-2xl hover:bg-[#083247]">
                {t("learn-more")}
              </button>
              </div>
        </Animate.FadeUp>
      </div>

      {isDesktopOrLaptop? 
       <Animate.FadeUp>
      <div className="grid justify-center grid-cols-3 gap-20 p-10 px-24 md:gap-28 place-items-center justify-items-center">
      
        <div class=" flex flex-col place-items-center max-w-sm p-4 bg-white rounded-xl  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
        <Animate.FadeUp>
          <img src={visionIcon} alt="vision Icon" className="py-3 w-28"></img>  
          </Animate.FadeUp>

          <Animate.FadeUp>
          <h5 class="mb-2 text-2xl font-bold">{t("Vision")}</h5>
          </Animate.FadeUp>
          <Animate.FadeUp>
          <p class="font-normal text-sm dark:text-gray-400">
           {t("vision-text")}
          </p>
          </Animate.FadeUp>
        </div>

        <div class=" flex flex-col place-items-center max-w-sm p-4 bg-white rounded-xl  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
        <img src={missionIcon} alt="Mission Icon" className="py-3 w-28"></img>  
          <h5 class="mb-2 text-2xl font-bold">{t("Mission")}</h5>
          <p class="font-normal text-sm dark:text-gray-400">
         {t("mission-text")}
          </p>
        </div>

        
        <div class=" flex flex-col place-items-center max-w-sm p-4 bg-white rounded-xl  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
        <img src={valuesIcon} alt="Values Icon" className="py-3 w-28"></img>  
          
          <h5 class="mb-2 text-2xl font-bold">{t("Values")}</h5>
          <p class="font-normal text-sm dark:text-gray-400">
           {t("values-text")}
          </p>
        </div>

        
      </div>
      </Animate.FadeUp>
      :
      <CardSliderStakeholder/>}
    </div>
  );
};

export default AboutStakeholder;

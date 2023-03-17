import React from "react";
import visionIcon from "../../../../assets/visionIcon.png"
import valuesIcon from "../../../../assets/valuesIcon.png"
import missionIcon from "../../../../assets/missionIcon.png"

import {useMediaQuery} from 'react-responsive'
import CardSliderStakeholder from '../cardSlider/CardSliderStakeholder';
import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";
import { useTranslation } from "react-i18next";

const AboutWithoutTitle = () => {

  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

  const isDesktopOrLaptop = useMediaQuery({minWidth:1224})
  const {t } = useTranslation()
  
  return (
           <div className="flex flex-col items-center w-full h-full pt-0 scale-90 md:scale-100 ">
             
             <div className="absolute z-10 grid justify-center grid-cols-3 gap-20 px-24 pt-10 md:gap-28 place-items-center justify-items-center ">
            <Animate.ScaleIn>
              <div class="  flex flex-col place-items-center max-w-sm p-4 bg-white rounded-xl  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
              <Animate.ScaleIn>
                <img
                  src={visionIcon}
                  alt="vision Icon"
                  className="py-3 w-28"
                ></img>
                </Animate.ScaleIn>
                <Animate.ScaleIn>
                <h5 class="mb-2 text-2xl font-bold">{t("Vision")}</h5>
                </Animate.ScaleIn>

                <Animate.ScaleIn>
                <p class="font-normal text-sm dark:text-gray-400">
                {t("vision-text")}
                </p>
                </Animate.ScaleIn>
              </div>
            </Animate.ScaleIn>



            <Animate.ScaleIn>
              <div class=" flex flex-col place-items-center max-w-sm p-4 bg-white rounded-xl  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
              <Animate.ScaleIn>
                <img
                  src={missionIcon}
                  alt="Mission Icon"
                  className="py-3 w-28"
                ></img>
                 </Animate.ScaleIn>

                 <Animate.ScaleIn>
                <h5 class="mb-2 text-2xl font-bold">{t("Mission")}</h5>
                </Animate.ScaleIn>

                <Animate.ScaleIn>
                <p class="font-normal text-sm dark:text-gray-400">
                {t("mission-text")}
                </p>
                </Animate.ScaleIn>
              </div>
            </Animate.ScaleIn>



            <Animate.ScaleIn>
              <div class=" flex flex-col place-items-center max-w-sm p-4 bg-white rounded-xl  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
              <Animate.ScaleIn>
                <img
                  src={valuesIcon}
                  alt="Values Icon"
                  className="py-3 w-28"
                ></img>
              </Animate.ScaleIn>

              <Animate.ScaleIn>
                <h5 class="mb-2 text-2xl font-bold">{t("Values")}</h5>
                </Animate.ScaleIn>

                <Animate.ScaleIn>
                <p class="font-normal text-sm dark:text-gray-400">
                {t("values-text")}
                </p>
                </Animate.ScaleIn>
              </div>
              </Animate.ScaleIn>
            </div> 
            {/* // :
      // <CardSliderStakeholder/>} */}
            </div> 
  );
};

export default AboutWithoutTitle;

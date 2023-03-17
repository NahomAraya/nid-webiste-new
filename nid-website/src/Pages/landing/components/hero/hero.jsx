import React from "react";
import video from "../../../../assets/nid_video.mp4";
import logo from  "../../../../assets/logo_white.png"
import CountUp from 'react-countup';
import { Animate , FadeIn} from "../../../../hooks/animations";
import { useTranslation } from "react-i18next";


const Hero = ({citizen}) => {
  const {t} = useTranslation();
  return (
    <div className="relative w-full h-screen">
      <video
        className="object-cover w-full h-full"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient">     
      </div>

      <div className="absolute top-0 flex flex-col justify-center w-full h-full p-5 text-white md:justify-start">
        <div className="flex flex-col my-24 mt-0 md:my-64 md:pt-6 md:ml-9 ">
        <div className="flex justify-center text-6xl lg:text-8xl md:justify-start font-barlow">
          <h1 className="pr-2.5 text-green text-4xl lg:text-7xl md:text-6xl font-bold">{t("hero-fayda")}</h1>
          <h1 className="text-4xl lg:text-7xl md:text-6xl">{t("hero-for-ethiopia")}</h1>
        </div>
       
          <div class="justify-center w-full  md:w-[40%] ">
            <p className="pt-2 pb-2 text-sm text-center md:text-left md:text-base">
            {t("hero-text")}
            </p>
          </div>
      

     {citizen &&  <div className="flex flex-col items-center md:items-start">
        <button className=" px-20 font-semibold text-white/90 shadow-md scale-90 h-9 bg-green rounded-3xl md:scale-100 hover:bg-[#083247]  hover:scale-105 transition-all transform duration-300">
        { t("hero-register")}
        </button>
        </div>}
    
        </div>
{/* 
        </Animate.FadeUp> */}

        
        <div className="absolute bottom-0 left-0 flex flex-col w-full pb-0 mb-20 scale-90 md:pb-5 lg:mb-16 place-items-center md:items-start md:left-8 lg:scale-100 lg:left-14 md:w-2/4">
        <CountUp className="mb-1 text-5xl font-extrabold text-green font-barlow"  decimal="," decimals={3} useEasing={true} end={122.009}  duration={3} enableScrollSpy={false} />
          {/* <h1 className="mb-1 text-4xl font-extrabold text-green font-poppins">122,009</h1> */}
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8 hidden md:flex"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                clip-rule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
            <p className="mt-1 ml-2 text-xl">{t("hero-total-regs")}</p>
          </div>

          <hr class="my-2 bg-gray-200 border-1 rounded-xl dark:bg-gray-700 h-1 w-56"></hr>
          <CountUp className="mb-1 text-5xl font-extrabold font-barlow"  decimal="," start={0.0} decimals={3} end={1.534} duration={2.8} enableScrollSpy={false}/>
          {/* <h1 className="mb-1 text-3xl font-extrabold">1,534</h1> */}

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8 hidden md:flex"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="mt-1 ml-2 text-xl ">{t("hero-daily-regs")}</p>
          </div>
        </div>

        
      </div>

      {/* <div className="absolute flex flex-col justify-start w-full h-full p-4 text-left text-white">
     
     
      </div>  */}
    </div>
  );
};

export default Hero;
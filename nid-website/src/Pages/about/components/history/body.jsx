import React from 'react';
import { useMediaQuery } from "react-responsive";
import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";

import TopBar from "../../../../components/navbar/navbar";
import Sidebar from "../../../../components/sidebar/sidebar";
import Hero from "../../../landing/components/hero/hero";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { IoMdSwap } from 'react-icons/io';

const Registrationss = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-2 scale-90 md:pb-0 pt-14 md:scale-100 font-barlow">
     
      <Animate.FadeUp>
        <div className="flex items-center justify-center w-full text-4xl md:text-5xl">
          <h1 className="pb-1.5 font-extrabold text-MetallicBlue">Pilot</h1>
          <h1 className="pl-2.5 text-green mb-2 font-semibold"> Registrations</h1>
          
        </div>

        <div className='bg-green h-1 w-[100%] flex'></div>
      </Animate.FadeUp>

      <Animate.FadeUp>
        <div className="flex flex-col justify-center pt-5 pb-5 place-items-center">
          <Animate.FadeUp>
            <p className="w-full p-3 text-sm leading-tight text-center font-poppins md:text-lg text-MetallicBlue ">
            The Fayda IDMS is the central Foundational ID Management system that integrates with many other external Identification 
            System (ABIS) alternatives, and card printing services.{" "}
            </p>
          </Animate.FadeUp>
        </div>
  </Animate.FadeUp>

      {/* <Animate.FadeUp> */}
      
<div className={isDesktopOrLaptop ? " relative flex justify-between w-full bottom-9" : "relative flex flex-col rotate-90 justify-between bottom-20 mb-52"}>

              <div className='relative flex justify-between w-10/12 h-1 bg-MetallicBlue m-60'>
              {/* put date, amount of registrations and "registrations" text here and align vertically, 
              then use outer div to space all circles equally(justify-between)*/}
              
              <div className="relative w-8 h-8 -m-3 rounded-full bg-green"></div>
              <p className={isDesktopOrLaptop ? 'absolute top-10 -left-12 font-normal text-xl text-MetallicBlue text-center' : "absolute -left-14 top-16 -rotate-90 font-medium text-xl text-MetallicBlue text-center"}>5M <br/> Registrations</p>
              
              <div className='relative bottom-10'>
                <h2 className='relative text-xl font-extrabold bottom-16 text-MetallicBlue'>2022</h2>
                <div className='absolute h-px rotate-90 bg-green w-14 bottom-1 -left-3'></div>
                <div className="relative w-3 h-3 rounded-full bottom-14 left-2 bg-green"></div>
                <div className="relative w-8 h-8 rounded-full bottom-3 bg-green"></div>
                <p className={isDesktopOrLaptop ? 'absolute -left-9 top-20 font-normal text-xl text-MetallicBlue text-center' : "absolute -left-10 top-28 -rotate-90 font-medium text-xl text-MetallicBlue text-center"}> 15M <br/> Registrations</p>
              </div>

              <div className='relative bottom-10'>
                <h2 className='relative text-xl font-extrabold bottom-16 text-MetallicBlue'>2023</h2>
                <div className='absolute h-px rotate-90 bg-green w-14 bottom-1 -left-3'></div>
                <div className="relative w-3 h-3 rounded-full bottom-14 left-2 bg-green"></div>
                <div className="relative w-8 h-8 rounded-full bottom-3 bg-green"></div>
                <p className={isDesktopOrLaptop ? 'absolute -left-9 top-20 font-normal text-xl text-MetallicBlue text-center' : "absolute -left-9 top-28 -rotate-90 font-medium text-xl text-MetallicBlue text-center"}> 38M <br/> Registrations</p>
              </div>

              <div className='relative bottom-10'>
                <h2 className='relative text-xl font-extrabold bottom-16 text-MetallicBlue'>2024</h2>
                <div className='absolute h-px rotate-90 bg-green w-14 bottom-1 -left-3'></div>
                <div className="relative w-3 h-3 rounded-full bottom-14 left-2 bg-green"></div>
                <div className="relative w-8 h-8 rounded-full bottom-3 bg-green"></div>
                <p className={isDesktopOrLaptop ? 'absolute -left-9 top-20 font-normal text-xl text-MetallicBlue text-center' : "absolute -left-9 top-28 -rotate-90 font-medium text-xl text-MetallicBlue text-center"}> 65M <br/> Registrations</p>
              </div>   

              <div className='relative bottom-10'>
                <h2 className='relative text-xl font-extrabold bottom-16 text-MetallicBlue'>2025</h2>
                <div className='absolute h-px rotate-90 bg-green w-14 bottom-1 -left-3'></div>
                <div className="relative w-3 h-3 rounded-full bottom-14 left-2 bg-green"></div>
                <div className="relative w-8 h-8 rounded-full bottom-3 bg-green"></div>
                <p className={isDesktopOrLaptop ? 'absolute -left-9 top-20 font-normal text-xl text-MetallicBlue text-center' : "absolute -left-9 top-28 -rotate-90 font-medium text-xl text-MetallicBlue text-center"}> 70M <br/> Registrations</p>
              </div>

              <div className='relative bottom-10 left-2 '>
                <h2 className='relative text-xl font-extrabold bottom-16 left-2 text-MetallicBlue'>2026</h2>
                <div className='absolute h-px rotate-90 bg-green w-14 bottom-1 -left-1 '></div>
                <div className="relative w-3 h-3 rounded-full bottom-14 left-4 bg-green"></div>
                <div className="relative w-8 h-8 rounded-full bottom-3 left-2 bg-green"></div>
                <p className={isDesktopOrLaptop ? 'absolute flex w-56 top-20 -left-20 tracking-tight bottom font-normal text-xl text-MetallicBlue text-center ' : "absolute -left-9 top-20 -rotate-90 font-medium text-xl text-MetallicBlue text-center"}> Transition to Permanent National ID Authority</p>
              </div>
            </div>      
            </div>
      {/* </Animate.FadeUp> */}

        
    </div>
  )
}

export default Registrationss;
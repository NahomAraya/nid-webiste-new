import React from 'react';
import { useMediaQuery } from "react-responsive";
import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";

import TopBar from "../../../../components/navbar/navbar";
import Sidebar from "../../../../components/sidebar/sidebar";
import Hero from "../../../landing/components/hero/hero";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { IoMdSwap } from 'react-icons/io';
import { Carousel } from "react-responsive-carousel";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import AliceCarousel from 'react-alice-carousel';
import TestimonialCard from '../../../landing/components/testimonials/testimonalCard';


const Registrations = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
  <>
    {/* <div className="flex flex-col items-center justify-center w-full h-full pb-2 md:pb-0 pt-5 max-[768px]:pt-0 font-barlow">
      <Animate.FadeUp>
        <div className="flex mb-8 text-4xl md:text-5xl">
          <h1 className="pb-1 font-extrabold text-MetallicBlue ">Pilot </h1>
          <h1 className="pl-2.5 text-green mb-4"> Registrations</h1>
        </div>
      </Animate.FadeUp>

      <Animate.FadeUp>
        <div className={isDesktopOrLaptop ? "text-2xl text-MetallicBlue text-center px-44 font-barlow w-full" : "text-MetallicBlue text-center text-lg font-barlow w-full"}>
            <p>
            The Fayda IDMS is the central Foundational ID Management system that integrates with many other external Identification 
            System (ABIS) alternatives, and card printing services.
            </p>
        </div>
  </Animate.FadeUp>

        <div className={isDesktopOrLaptop ? " relative flex justify-between w-full bottom-9" : "relative flex flex-col rotate-90 justify-between bottom-20 mb-48 mt-4"}>
              <div className='relative flex justify-between w-10/12 h-1 bg-MetallicBlue m-60'>
              
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
        </div> */}

        <div class="relative bg-footer bg-right-bottom bg-cover w-full min-[1223px]:-mt-16  font-barlow ">
            <div className={isDesktopOrLaptop ? "p-6 pt-10 flex flex-row " : "flex flex-col items-center"}>
              <div className= "flex flex-col items-center w-[40%] mr-1  mx-24  justify-center">
                <div className="w-full text-start ">
                  <h2 class="relative text-white mb-3">
                    <span className="justify-start text-5xl font-bold font-barlow">
                      Digital Identity Strategy
                    </span>{" "}
                  </h2>
                </div>
                  <div className='relative text-start '>
                    <p class="relative flex text-2xl font-light text-white font-barlow leading-tight text-justify">
                        The National ID Program has a mission to build a
                        sustainable digital identity that supports all use cases
                        for all citizens and residents by 2025. sustainable
                        digital identity that supports all use cases for all
                    </p><br />
                  </div>


                <div className='flex items-center w-full place-items-center '>
                  <button className='px-12 py-1 text-xl flex  text-white mt-5  bg-green rounded-3xl hover:bg-[#083247]'>
                      Learn More
                  </button>
              </div>
              </div>

              

      <div className={isDesktopOrLaptop ? "flex flex-col items-center w-[50%] text-white font-barlow font-extralight text-2xl" : "flex flex-col items-center relative left-8 text-white text-lg"}>

  <Carousel
        axis="horizontal"
        className="relative w-[120%] pt-4 ml-20 h-4/5"
        showArrows={true}
        showStatus={false}
        swipeable={true}
        // autoPlay={true}
    
        infiniteLoop={true}
        interval={2500}
        swipeScrollTolerance={80}
        // thumbWidth={90}
        transitionTime={1000}
        renderIndicator={false}

        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute " : "hidden"
              } top-0 bottom-0 left-5 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg
                fill="#FFF"
                height="100px"
                width="100px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 800"
                xmlSpace="preserve"
                stroke="#fff"
                strokeWidth={0.00511641}
                className=''
              >

                <path className='cls-arrow'
                 d="M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z" 
                 />
                
              </svg>
           
            </div>
          );
        }}
      
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-20 right-9 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg
                fill="#FFF"
                height="100px"
                width="100px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 800"
                xmlSpace="preserve"
                transform="rotate(180)"
                stroke="#FFF"
                >
      <path d="M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z" />
              </svg>
            </div>
          );
        }}
      >

        <div className="flex flex-row ml-40">

          <div className="flex flex-col pt-5 w-[33%] h-72 mr-9 text-sm text-center place-items-center md:text-base border-green border-2 rounded-2xl">
            <svg
              id="Layer_1"
              className=' h-[28%]'
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 841.89 595.28"
            >
                <defs>
                  <style>{".cls-1{fill:#fff}"}</style>
                </defs>
                <path
                  className="cls-1"
                  d="M456.09 151.13h158c16.22 0 30.84 4.26 43 15.31C670.58 178.73 677 194.26 677 212.5v109.47c0 40.82-.11 81.64.06 122.46.07 17.19-4.59 32.49-16.54 45.08-12.22 12.87-27.54 18.63-45.14 18.63q-159.45 0-318.92-.05c-30.74 0-53.87-19.3-60-49.38a70.15 70.15 0 01-1-13.91c-.06-76.82.21-153.63-.17-230.44-.15-32.19 19.69-53.36 40.82-59.83a81.07 81.07 0 0123-3.25c52.34-.28 104.66-.15 156.98-.15zm.05 328.51v.09h157.47c3.62 0 7.4.07 10.85-.87 15.85-4.3 24.42-16.14 24.43-33.22V248.71c0-14.46.09-29-1.11-43.37-1.17-13.94-14.81-25.54-28.72-25.63-26.66-.16-53.32-.11-80-.11-80.48 0-161 .26-241.44-.2-19.95-.11-33.86 15.57-33.82 31.61.18 79.64.05 159.29.18 238.94 0 15.74 13.94 29.65 29.69 29.68 54.17.09 108.33.01 162.47.01z"
                />
                <path
                  className="cls-1"
                  d="M606.31 134.75c-10.79 0-19.92.07-29-.1-.92 0-2.09-1.32-2.68-2.31-6.79-11.38-16.57-16.88-30-16.86q-159 .19-318-.08c-17.19-.05-33.46 12.29-33.49 33.06q-.14 58.25-.14 116.48v115c0 19.06 7.61 29.6 25.86 35.59v27.74A58.92 58.92 0 01165 384.82c-.22-59.33-.09-118.65-.1-178 0-19.5-.17-39 0-58.49.28-30.49 18.86-53.62 48.2-60a65.68 65.68 0 0113.9-1.15q158-.09 316-.08c22.33 0 40.59 8 53.12 26.83 4.02 6.07 6.5 13.16 10.19 20.82z"
                />
                <path
                  className="cls-1"
                  d="M364.71 285.5c1.68-9.8 2.42-19 4.94-27.64 4.77-16.42 16.66-24.65 33.42-26.92 18.15-2.46 36 5.13 43.31 19.13 4.92 9.44 7 19.62 7.55 30.15.09 1.65 0 3.3 0 5.43 6.17-.77 8.15 3.15 8.81 7.94 1.25 9.15.35 18.08-5.53 25.56-1.91 2.43-5.48 3.55-8.26 5.33a9.21 9.21 0 00-2.74 2.17c-4.66 6.63-9 13.48-13.86 20-4.12 5.5-1.95 13.54 5 14.91 5.48 1.08 11.23.89 16.87 1.11 19.21.74 36.95 18.33 37.74 37.65a152.83 152.83 0 01.1 16.44 12.53 12.53 0 01-12.91 11.9q-69.25.09-138.5 0a12.55 12.55 0 01-12.84-11.48c-2.71-22.12 3.41-40.19 22.7-50.28 6.47-3.38 13.42-4.53 20.69-4.42a47 47 0 0011.38-.86c6.86-1.63 9-9.35 4.82-15-4.81-6.52-9.22-13.32-13.81-20-.46-.67-.87-1.84-1.41-1.91-11.13-1.52-12.29-10.81-14.34-19-.94-3.7-.09-7.86 0-11.81.08-5.09 2.47-8.15 6.87-8.4zM460.07 248.13H571c11.2 0 13.93 2.71 13.93 13.77 0 3.66.11 7.33 0 11-.18 5.91-3.17 9.16-9 9.85a55.89 55.89 0 01-6.47.38h-91.94a12.57 12.57 0 01-12.37-10.21c-1.59-8.06-3.3-16.11-5.08-24.79z"
                />
                <path
                  className="cls-1"
                  d="M454.5 346.64c-1.74-6.74-.1-10.7 5.93-13.79 6.25-3.19 9.39-9.71 11.61-16.26 1.2-3.56 2.73-5.12 7-5.09 30.83.25 61.66.13 92.49.14 10.15 0 13.38 3.22 13.45 13.37 0 3.33.06 6.67 0 10-.05 7.95-3.64 11.61-11.53 11.62H454.5zM504.48 410.39c.18-12.39-1.3-23.95-8.37-34.91h40.22c12.65 0 25.29 0 37.94.08 7.15.07 10.53 3.61 10.68 10.85.08 4 .06 8 0 12 0 7.95-3.41 11.87-11.32 11.94-22.76.17-45.56.04-69.15.04z"
                />
            </svg>

          <hr className='w-[50%]'/>

            <h1 className="pt-1 text-xl font-semibold text-white md:text-xl">
              Card Printing Strategy
            </h1>

            <p className="relative py-2 text-lg leading-snug text-justify px-7 font-barlow font-extralight">
            The National ID Program has a mission to build a sustainable identity that supports all use cases
            for all citizens.
            </p>
          </div>

          <div className="flex flex-col pt-5 w-[33%] h-72 ml-9 text-sm text-center place-items-center md:text-base border-green border-2 rounded-2xl">
              <svg
                data-name="Layer 1"
                className=' h-[28%]'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 841.89 595.28"
              >
                <path
                  d="M395.15 328.93l-62.92 36.32c11.68 27.44 11.46 54.43-2.56 80.66-10.55 19.72-26.67 33.55-47.67 41.33A89.41 89.41 0 01201.53 329c37.14-24.88 91.7-19.72 123.16 23.22l63.18-36.48-108.64-62.6c-18.76 15.15-37 16.36-52 3.63A37.23 37.23 0 01263 193c18.85 6.36 27.15 22.63 23.87 47.16l108.23 62.32v-80.67c-27.68-3.22-50-15.91-66-39a85.07 85.07 0 01-14.94-60.41c5.82-47.19 44.68-80.32 92.09-79.14 44.06 1.1 81.92 36.7 85.77 80.6A90 90 0 01410.81 222v80.5L519.4 240c-3.39-11.53-2.08-22.43 4.59-32.44a36.13 36.13 0 0120.43-15 37.21 37.21 0 0133.2 65.15c-13.07 10.14-34.33 12-50.74-4.64L418.1 315.7l63.08 36.43c31.76-44.23 90-48.48 127.22-20.39a89.45 89.45 0 01-89.77 153.42c-41.28-18.22-67.34-69.22-45-120l-63.06-36.42v5.11q0 56.66-.07 113.32c0 3.37.66 5 4.29 6.19a36.86 36.86 0 0124.4 43.79A37.42 37.42 0 01398 525.46c-18.59-2.28-32.84-19.13-32.26-38.15.5-16.64 11-29.32 29.42-35.4zm-169.59 79.8c-17.74-19.81-11.07-42 .49-52.86a36.55 36.55 0 0148.76-1.19c15.87 13.55 16.58 32.57 1.91 54.24q24.82 11.16 35.06 36.63c19.3-25.12 20.15-69.31-11.11-97.55-30.1-27.19-76.74-24.9-104.52 5.39-27.49 30-22.32 72-5.69 91.93 9.07-19.14 15.72-26.09 35.1-36.59zm151.76-270.6c-14.51-22.06-13.82-40.71 1.91-54.2a36.43 36.43 0 0148.1.52c15.27 13.68 15.76 32.26 1.28 53.67q24.83 11.19 35 36.63c19-24.38 20.7-69.31-11.58-98-30.84-27.39-78.4-24.05-105.56 7.51-26.16 30.41-20.07 71.68-4 90.21 6.72-16.8 18.4-28.87 34.85-36.34zm203.07 270.75c16.73 7.6 28.36 19.75 35.1 36.61 18.25-22.66 21.68-68-11.14-97.56-31.17-28.07-79.92-24.35-106.78 8.09-25.59 30.91-18.67 71.89-3.18 89.16 6.73-16.8 18.45-28.83 34.88-36.3-14.79-20.84-14.15-40.18 1.63-54a36.46 36.46 0 0148.76.75c15.06 13.96 15.43 33.46.73 53.25zM251 477.78a75.39 75.39 0 0046-15.9c2.25-1.73 2.86-3.38 2.16-6.1a49.71 49.71 0 00-96.17.16c-.66 2.57-.13 4.13 2 5.76A75.24 75.24 0 00251 477.78zm304 0a75.22 75.22 0 0046-16c2.07-1.6 2.76-3.08 2.09-5.72a49.71 49.71 0 00-96.17-.34c-.69 2.65-.24 4.39 2.05 6.15a75.48 75.48 0 0045.95 15.91zM403 207a75.39 75.39 0 0046-16c2.29-1.76 2.74-3.44 2-6.11a49.69 49.69 0 00-96-.08c-.7 2.63-.37 4.37 1.95 6.15A75.44 75.44 0 00403 207zm129.84 21.14a22.11 22.11 0 1022.2-22 21.9 21.9 0 00-22.25 21.98zM425.09 488.71a22.1 22.1 0 10-22.28 21.93 22.24 22.24 0 0022.28-21.93zM251.25 206.2A22 22 0 00229 228.1a22.1 22.1 0 1044.2.31 21.92 21.92 0 00-21.95-22.21zm173-94.7a21.3 21.3 0 10-21.15 21.38 21.34 21.34 0 0021.19-21.38zm-151.9 271A21.3 21.3 0 10251 403.68a21.32 21.32 0 0021.39-21.14zm261.19-.18A21.31 21.31 0 10554.73 361a21.19 21.19 0 00-21.15 21.36z"
                  fill="#fff"
                />
              </svg>

          <hr className='relative w-[50%] '/>

            <h1 className="pt-1 text-xl font-semibold text-white md:text-xl">
              Registration Strategy
            </h1>

            <p className="relative px-6 py-2 text-lg leading-snug text-justify font-barlow font-extralight">
              The National ID Program has a mission to build a sustainable identity that supports 
              all use cases for all citizens.
            </p>
          </div>
        </div>

        <div className="flex flex-row ml-40">

          <div className="flex flex-col pt-5 w-[32%] h-72 mr-9 text-sm text-center place-items-center md:text-base border-green border-2 rounded-2xl">
            <svg
              id="Layer_1"
              className=' h-[28%]'
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 841.89 595.28"
            >
                <defs>
                  <style>{".cls-1{fill:#fff}"}</style>
                </defs>
                <path
                  className="cls-1"
                  d="M456.09 151.13h158c16.22 0 30.84 4.26 43 15.31C670.58 178.73 677 194.26 677 212.5v109.47c0 40.82-.11 81.64.06 122.46.07 17.19-4.59 32.49-16.54 45.08-12.22 12.87-27.54 18.63-45.14 18.63q-159.45 0-318.92-.05c-30.74 0-53.87-19.3-60-49.38a70.15 70.15 0 01-1-13.91c-.06-76.82.21-153.63-.17-230.44-.15-32.19 19.69-53.36 40.82-59.83a81.07 81.07 0 0123-3.25c52.34-.28 104.66-.15 156.98-.15zm.05 328.51v.09h157.47c3.62 0 7.4.07 10.85-.87 15.85-4.3 24.42-16.14 24.43-33.22V248.71c0-14.46.09-29-1.11-43.37-1.17-13.94-14.81-25.54-28.72-25.63-26.66-.16-53.32-.11-80-.11-80.48 0-161 .26-241.44-.2-19.95-.11-33.86 15.57-33.82 31.61.18 79.64.05 159.29.18 238.94 0 15.74 13.94 29.65 29.69 29.68 54.17.09 108.33.01 162.47.01z"
                />
                <path
                  className="cls-1"
                  d="M606.31 134.75c-10.79 0-19.92.07-29-.1-.92 0-2.09-1.32-2.68-2.31-6.79-11.38-16.57-16.88-30-16.86q-159 .19-318-.08c-17.19-.05-33.46 12.29-33.49 33.06q-.14 58.25-.14 116.48v115c0 19.06 7.61 29.6 25.86 35.59v27.74A58.92 58.92 0 01165 384.82c-.22-59.33-.09-118.65-.1-178 0-19.5-.17-39 0-58.49.28-30.49 18.86-53.62 48.2-60a65.68 65.68 0 0113.9-1.15q158-.09 316-.08c22.33 0 40.59 8 53.12 26.83 4.02 6.07 6.5 13.16 10.19 20.82z"
                />
                <path
                  className="cls-1"
                  d="M364.71 285.5c1.68-9.8 2.42-19 4.94-27.64 4.77-16.42 16.66-24.65 33.42-26.92 18.15-2.46 36 5.13 43.31 19.13 4.92 9.44 7 19.62 7.55 30.15.09 1.65 0 3.3 0 5.43 6.17-.77 8.15 3.15 8.81 7.94 1.25 9.15.35 18.08-5.53 25.56-1.91 2.43-5.48 3.55-8.26 5.33a9.21 9.21 0 00-2.74 2.17c-4.66 6.63-9 13.48-13.86 20-4.12 5.5-1.95 13.54 5 14.91 5.48 1.08 11.23.89 16.87 1.11 19.21.74 36.95 18.33 37.74 37.65a152.83 152.83 0 01.1 16.44 12.53 12.53 0 01-12.91 11.9q-69.25.09-138.5 0a12.55 12.55 0 01-12.84-11.48c-2.71-22.12 3.41-40.19 22.7-50.28 6.47-3.38 13.42-4.53 20.69-4.42a47 47 0 0011.38-.86c6.86-1.63 9-9.35 4.82-15-4.81-6.52-9.22-13.32-13.81-20-.46-.67-.87-1.84-1.41-1.91-11.13-1.52-12.29-10.81-14.34-19-.94-3.7-.09-7.86 0-11.81.08-5.09 2.47-8.15 6.87-8.4zM460.07 248.13H571c11.2 0 13.93 2.71 13.93 13.77 0 3.66.11 7.33 0 11-.18 5.91-3.17 9.16-9 9.85a55.89 55.89 0 01-6.47.38h-91.94a12.57 12.57 0 01-12.37-10.21c-1.59-8.06-3.3-16.11-5.08-24.79z"
                />
                <path
                  className="cls-1"
                  d="M454.5 346.64c-1.74-6.74-.1-10.7 5.93-13.79 6.25-3.19 9.39-9.71 11.61-16.26 1.2-3.56 2.73-5.12 7-5.09 30.83.25 61.66.13 92.49.14 10.15 0 13.38 3.22 13.45 13.37 0 3.33.06 6.67 0 10-.05 7.95-3.64 11.61-11.53 11.62H454.5zM504.48 410.39c.18-12.39-1.3-23.95-8.37-34.91h40.22c12.65 0 25.29 0 37.94.08 7.15.07 10.53 3.61 10.68 10.85.08 4 .06 8 0 12 0 7.95-3.41 11.87-11.32 11.94-22.76.17-45.56.04-69.15.04z"
                />
            </svg>

          <hr className='w-[50%]'/>

            <h1 className="pt-1 text-xl font-semibold text-white md:text-xl">
              Card Printing Strategy
            </h1>

            <p className="relative p-5 py-4 text-lg leading-snug text-justify font-barlow font-extralight">
            The National ID Program has a mission to build a sustainable identity that supports all use cases
            for all citizens.
            </p>
          </div>

          <div className="flex flex-col pt-5 w-[32%] h-72 ml-9 text-sm text-center place-items-center md:text-base border-green border-2 rounded-2xl">
              <svg
                data-name="Layer 1"
                className=' h-[28%]'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 841.89 595.28"
              >
                <path
                  d="M395.15 328.93l-62.92 36.32c11.68 27.44 11.46 54.43-2.56 80.66-10.55 19.72-26.67 33.55-47.67 41.33A89.41 89.41 0 01201.53 329c37.14-24.88 91.7-19.72 123.16 23.22l63.18-36.48-108.64-62.6c-18.76 15.15-37 16.36-52 3.63A37.23 37.23 0 01263 193c18.85 6.36 27.15 22.63 23.87 47.16l108.23 62.32v-80.67c-27.68-3.22-50-15.91-66-39a85.07 85.07 0 01-14.94-60.41c5.82-47.19 44.68-80.32 92.09-79.14 44.06 1.1 81.92 36.7 85.77 80.6A90 90 0 01410.81 222v80.5L519.4 240c-3.39-11.53-2.08-22.43 4.59-32.44a36.13 36.13 0 0120.43-15 37.21 37.21 0 0133.2 65.15c-13.07 10.14-34.33 12-50.74-4.64L418.1 315.7l63.08 36.43c31.76-44.23 90-48.48 127.22-20.39a89.45 89.45 0 01-89.77 153.42c-41.28-18.22-67.34-69.22-45-120l-63.06-36.42v5.11q0 56.66-.07 113.32c0 3.37.66 5 4.29 6.19a36.86 36.86 0 0124.4 43.79A37.42 37.42 0 01398 525.46c-18.59-2.28-32.84-19.13-32.26-38.15.5-16.64 11-29.32 29.42-35.4zm-169.59 79.8c-17.74-19.81-11.07-42 .49-52.86a36.55 36.55 0 0148.76-1.19c15.87 13.55 16.58 32.57 1.91 54.24q24.82 11.16 35.06 36.63c19.3-25.12 20.15-69.31-11.11-97.55-30.1-27.19-76.74-24.9-104.52 5.39-27.49 30-22.32 72-5.69 91.93 9.07-19.14 15.72-26.09 35.1-36.59zm151.76-270.6c-14.51-22.06-13.82-40.71 1.91-54.2a36.43 36.43 0 0148.1.52c15.27 13.68 15.76 32.26 1.28 53.67q24.83 11.19 35 36.63c19-24.38 20.7-69.31-11.58-98-30.84-27.39-78.4-24.05-105.56 7.51-26.16 30.41-20.07 71.68-4 90.21 6.72-16.8 18.4-28.87 34.85-36.34zm203.07 270.75c16.73 7.6 28.36 19.75 35.1 36.61 18.25-22.66 21.68-68-11.14-97.56-31.17-28.07-79.92-24.35-106.78 8.09-25.59 30.91-18.67 71.89-3.18 89.16 6.73-16.8 18.45-28.83 34.88-36.3-14.79-20.84-14.15-40.18 1.63-54a36.46 36.46 0 0148.76.75c15.06 13.96 15.43 33.46.73 53.25zM251 477.78a75.39 75.39 0 0046-15.9c2.25-1.73 2.86-3.38 2.16-6.1a49.71 49.71 0 00-96.17.16c-.66 2.57-.13 4.13 2 5.76A75.24 75.24 0 00251 477.78zm304 0a75.22 75.22 0 0046-16c2.07-1.6 2.76-3.08 2.09-5.72a49.71 49.71 0 00-96.17-.34c-.69 2.65-.24 4.39 2.05 6.15a75.48 75.48 0 0045.95 15.91zM403 207a75.39 75.39 0 0046-16c2.29-1.76 2.74-3.44 2-6.11a49.69 49.69 0 00-96-.08c-.7 2.63-.37 4.37 1.95 6.15A75.44 75.44 0 00403 207zm129.84 21.14a22.11 22.11 0 1022.2-22 21.9 21.9 0 00-22.25 21.98zM425.09 488.71a22.1 22.1 0 10-22.28 21.93 22.24 22.24 0 0022.28-21.93zM251.25 206.2A22 22 0 00229 228.1a22.1 22.1 0 1044.2.31 21.92 21.92 0 00-21.95-22.21zm173-94.7a21.3 21.3 0 10-21.15 21.38 21.34 21.34 0 0021.19-21.38zm-151.9 271A21.3 21.3 0 10251 403.68a21.32 21.32 0 0021.39-21.14zm261.19-.18A21.31 21.31 0 10554.73 361a21.19 21.19 0 00-21.15 21.36z"
                  fill="#fff"
                />
              </svg>

          <hr className='relative w-[50%] '/>

            <h1 className="pt-1 text-xl font-semibold text-white md:text-xl">
              Registration Strategy
            </h1>

            <p className="relative p-5 py-4 text-lg leading-snug text-justify font-barlow font-extralight">
              The National ID Program has a mission to build a sustainable identity that supports 
              all use cases for all citizens.
            </p>
          </div>
        </div>

        <div className="flex flex-row ml-40">

          <div className="flex flex-col pt-5 w-[32%] h-72 mr-9 text-sm text-center place-items-center md:text-base border-green border-2 rounded-2xl">
            <svg
              id="Layer_1"
              className=' h-[28%]'
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 841.89 595.28"
            >
                <defs>
                  <style>{".cls-1{fill:#fff}"}</style>
                </defs>
                <path
                  className="cls-1"
                  d="M456.09 151.13h158c16.22 0 30.84 4.26 43 15.31C670.58 178.73 677 194.26 677 212.5v109.47c0 40.82-.11 81.64.06 122.46.07 17.19-4.59 32.49-16.54 45.08-12.22 12.87-27.54 18.63-45.14 18.63q-159.45 0-318.92-.05c-30.74 0-53.87-19.3-60-49.38a70.15 70.15 0 01-1-13.91c-.06-76.82.21-153.63-.17-230.44-.15-32.19 19.69-53.36 40.82-59.83a81.07 81.07 0 0123-3.25c52.34-.28 104.66-.15 156.98-.15zm.05 328.51v.09h157.47c3.62 0 7.4.07 10.85-.87 15.85-4.3 24.42-16.14 24.43-33.22V248.71c0-14.46.09-29-1.11-43.37-1.17-13.94-14.81-25.54-28.72-25.63-26.66-.16-53.32-.11-80-.11-80.48 0-161 .26-241.44-.2-19.95-.11-33.86 15.57-33.82 31.61.18 79.64.05 159.29.18 238.94 0 15.74 13.94 29.65 29.69 29.68 54.17.09 108.33.01 162.47.01z"
                />
                <path
                  className="cls-1"
                  d="M606.31 134.75c-10.79 0-19.92.07-29-.1-.92 0-2.09-1.32-2.68-2.31-6.79-11.38-16.57-16.88-30-16.86q-159 .19-318-.08c-17.19-.05-33.46 12.29-33.49 33.06q-.14 58.25-.14 116.48v115c0 19.06 7.61 29.6 25.86 35.59v27.74A58.92 58.92 0 01165 384.82c-.22-59.33-.09-118.65-.1-178 0-19.5-.17-39 0-58.49.28-30.49 18.86-53.62 48.2-60a65.68 65.68 0 0113.9-1.15q158-.09 316-.08c22.33 0 40.59 8 53.12 26.83 4.02 6.07 6.5 13.16 10.19 20.82z"
                />
                <path
                  className="cls-1"
                  d="M364.71 285.5c1.68-9.8 2.42-19 4.94-27.64 4.77-16.42 16.66-24.65 33.42-26.92 18.15-2.46 36 5.13 43.31 19.13 4.92 9.44 7 19.62 7.55 30.15.09 1.65 0 3.3 0 5.43 6.17-.77 8.15 3.15 8.81 7.94 1.25 9.15.35 18.08-5.53 25.56-1.91 2.43-5.48 3.55-8.26 5.33a9.21 9.21 0 00-2.74 2.17c-4.66 6.63-9 13.48-13.86 20-4.12 5.5-1.95 13.54 5 14.91 5.48 1.08 11.23.89 16.87 1.11 19.21.74 36.95 18.33 37.74 37.65a152.83 152.83 0 01.1 16.44 12.53 12.53 0 01-12.91 11.9q-69.25.09-138.5 0a12.55 12.55 0 01-12.84-11.48c-2.71-22.12 3.41-40.19 22.7-50.28 6.47-3.38 13.42-4.53 20.69-4.42a47 47 0 0011.38-.86c6.86-1.63 9-9.35 4.82-15-4.81-6.52-9.22-13.32-13.81-20-.46-.67-.87-1.84-1.41-1.91-11.13-1.52-12.29-10.81-14.34-19-.94-3.7-.09-7.86 0-11.81.08-5.09 2.47-8.15 6.87-8.4zM460.07 248.13H571c11.2 0 13.93 2.71 13.93 13.77 0 3.66.11 7.33 0 11-.18 5.91-3.17 9.16-9 9.85a55.89 55.89 0 01-6.47.38h-91.94a12.57 12.57 0 01-12.37-10.21c-1.59-8.06-3.3-16.11-5.08-24.79z"
                />
                <path
                  className="cls-1"
                  d="M454.5 346.64c-1.74-6.74-.1-10.7 5.93-13.79 6.25-3.19 9.39-9.71 11.61-16.26 1.2-3.56 2.73-5.12 7-5.09 30.83.25 61.66.13 92.49.14 10.15 0 13.38 3.22 13.45 13.37 0 3.33.06 6.67 0 10-.05 7.95-3.64 11.61-11.53 11.62H454.5zM504.48 410.39c.18-12.39-1.3-23.95-8.37-34.91h40.22c12.65 0 25.29 0 37.94.08 7.15.07 10.53 3.61 10.68 10.85.08 4 .06 8 0 12 0 7.95-3.41 11.87-11.32 11.94-22.76.17-45.56.04-69.15.04z"
                />
            </svg>

          <hr className='w-[50%]'/>

            <h1 className="pt-1 text-xl font-semibold text-white md:text-xl">
              Card Printing Strategy
            </h1>

            <p className="relative p-5 py-4 text-lg leading-snug text-justify font-barlow font-extralight">
            The National ID Program has a mission to build a sustainable identity that supports all use cases
            for all citizens.
            </p>
          </div>

          <div className="flex flex-col pt-5 w-[32%] h-72 ml-9 text-sm text-center place-items-center md:text-base border-green border-2 rounded-2xl">
              <svg
                data-name="Layer 1"
                className=' h-[28%]'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 841.89 595.28"
              >
                <path
                  d="M395.15 328.93l-62.92 36.32c11.68 27.44 11.46 54.43-2.56 80.66-10.55 19.72-26.67 33.55-47.67 41.33A89.41 89.41 0 01201.53 329c37.14-24.88 91.7-19.72 123.16 23.22l63.18-36.48-108.64-62.6c-18.76 15.15-37 16.36-52 3.63A37.23 37.23 0 01263 193c18.85 6.36 27.15 22.63 23.87 47.16l108.23 62.32v-80.67c-27.68-3.22-50-15.91-66-39a85.07 85.07 0 01-14.94-60.41c5.82-47.19 44.68-80.32 92.09-79.14 44.06 1.1 81.92 36.7 85.77 80.6A90 90 0 01410.81 222v80.5L519.4 240c-3.39-11.53-2.08-22.43 4.59-32.44a36.13 36.13 0 0120.43-15 37.21 37.21 0 0133.2 65.15c-13.07 10.14-34.33 12-50.74-4.64L418.1 315.7l63.08 36.43c31.76-44.23 90-48.48 127.22-20.39a89.45 89.45 0 01-89.77 153.42c-41.28-18.22-67.34-69.22-45-120l-63.06-36.42v5.11q0 56.66-.07 113.32c0 3.37.66 5 4.29 6.19a36.86 36.86 0 0124.4 43.79A37.42 37.42 0 01398 525.46c-18.59-2.28-32.84-19.13-32.26-38.15.5-16.64 11-29.32 29.42-35.4zm-169.59 79.8c-17.74-19.81-11.07-42 .49-52.86a36.55 36.55 0 0148.76-1.19c15.87 13.55 16.58 32.57 1.91 54.24q24.82 11.16 35.06 36.63c19.3-25.12 20.15-69.31-11.11-97.55-30.1-27.19-76.74-24.9-104.52 5.39-27.49 30-22.32 72-5.69 91.93 9.07-19.14 15.72-26.09 35.1-36.59zm151.76-270.6c-14.51-22.06-13.82-40.71 1.91-54.2a36.43 36.43 0 0148.1.52c15.27 13.68 15.76 32.26 1.28 53.67q24.83 11.19 35 36.63c19-24.38 20.7-69.31-11.58-98-30.84-27.39-78.4-24.05-105.56 7.51-26.16 30.41-20.07 71.68-4 90.21 6.72-16.8 18.4-28.87 34.85-36.34zm203.07 270.75c16.73 7.6 28.36 19.75 35.1 36.61 18.25-22.66 21.68-68-11.14-97.56-31.17-28.07-79.92-24.35-106.78 8.09-25.59 30.91-18.67 71.89-3.18 89.16 6.73-16.8 18.45-28.83 34.88-36.3-14.79-20.84-14.15-40.18 1.63-54a36.46 36.46 0 0148.76.75c15.06 13.96 15.43 33.46.73 53.25zM251 477.78a75.39 75.39 0 0046-15.9c2.25-1.73 2.86-3.38 2.16-6.1a49.71 49.71 0 00-96.17.16c-.66 2.57-.13 4.13 2 5.76A75.24 75.24 0 00251 477.78zm304 0a75.22 75.22 0 0046-16c2.07-1.6 2.76-3.08 2.09-5.72a49.71 49.71 0 00-96.17-.34c-.69 2.65-.24 4.39 2.05 6.15a75.48 75.48 0 0045.95 15.91zM403 207a75.39 75.39 0 0046-16c2.29-1.76 2.74-3.44 2-6.11a49.69 49.69 0 00-96-.08c-.7 2.63-.37 4.37 1.95 6.15A75.44 75.44 0 00403 207zm129.84 21.14a22.11 22.11 0 1022.2-22 21.9 21.9 0 00-22.25 21.98zM425.09 488.71a22.1 22.1 0 10-22.28 21.93 22.24 22.24 0 0022.28-21.93zM251.25 206.2A22 22 0 00229 228.1a22.1 22.1 0 1044.2.31 21.92 21.92 0 00-21.95-22.21zm173-94.7a21.3 21.3 0 10-21.15 21.38 21.34 21.34 0 0021.19-21.38zm-151.9 271A21.3 21.3 0 10251 403.68a21.32 21.32 0 0021.39-21.14zm261.19-.18A21.31 21.31 0 10554.73 361a21.19 21.19 0 00-21.15 21.36z"
                  fill="#fff"
                />
              </svg>

          <hr className='relative w-[50%] '/>

            <h1 className="pt-1 text-xl font-semibold text-white md:text-xl">
              Registration Strategy
            </h1>

            <p className="relative p-5 py-4 text-lg leading-snug text-justify font-barlow font-extralight">
              The National ID Program has a mission to build a sustainable identity that supports 
              all use cases for all citizens.
            </p>
          </div>
        </div>
      </Carousel>
                </div>     
              </div>
            </div>
    </>    
  )
}

export default Registrations
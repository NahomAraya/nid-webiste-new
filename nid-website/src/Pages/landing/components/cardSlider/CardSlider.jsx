import React from "react";
// requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaAngleLeft, FaArrowAltCircleRight, FaArrowCircleLeft, FaArrowCircleRight, FaArrowRight, FaArrowsAltH, FaCartArrowDown, FaChevronLeft, FaChevronRight, FaCompressArrowsAlt, FaExpandArrowsAlt, FaLocationArrow, FaLongArrowAltRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import Svg1 from "../../../../assets/logo_white.png"
import checkIcon from "../../../../assets/8-01-Checklist.svg";

const cards = [
  {
    icon: "",
    title: "Update Fayda",
    desc: " Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate, numquam deserunt iure harum ut ab non quibusdam.",
  },
  {
    icon: "",
    title: "Get ayda",
    desc: "   Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate, numquam deserunt iure harum ut ab non quibusdam.",
  },
  {
    icon: "",
    title: "Fayda Services",
    desc: "   Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate,numquam deserunt iure harum ut ab non quibusdam.",
  },
];

const CardSlider = () => {
  return (
    <div className="flex flex-col items-center w-full h-full pt-10 md:scale-100">
      {/* <div className="flex text-3xl ">
        <h1 className="pb-2 text-MetallicBlue">About Your </h1>
        <h1 className="pl-1 font-bold text-MetallicBlue">Fayda</h1>
      </div>

      <p className="px-10 text-center ">
        This Entire program aims to design and implement a foundational ID
        system for Ethiopia at the national level.{" "}
      </p> */}

      <Carousel
        axis="horizontal"
        className="w-[100%] pt-8 h-4/5 "
        showArrows={true}
        showStatus={false}
        swipeable={true}
        autoPlay={true}
    
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
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 `}
              onClick={clickHandler}
            >
               <FaChevronLeft className="w-6 h-6 text-darkblue"/>
           
            </div>
          );
        }}

        // renderIndicator= {(clickHandler, isSelected, index, label) => {
        //   const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        //   const style = isSelected
        //   ? { ...defStyle, color: "red" }
        //   : { ...defStyle };
        //   return (
        //     <div
        // //    grid h-screen place-items-center
        //       className={` "absolute" 
        //        top-0 bottom-0 left-0 grid  justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 `}
        //       onClick={clickHandler}
        //     >
        //       <div className=" flex h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
              
        //     </div>
        //   );
        // }}
      
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
             
                 <FaChevronRight className="w-6 h-6 text-darkblue"/>
            </div>
          );
        }}
      >
        <div className="flex place-content-center">
          <div className="flex flex-col content-center text-sm text-center md:px-25 place-items-center md:text-base">
          <div className="w-12 h-12 pt-2 border-2 rounded-full bg-MetallicBlue border-green/30">
              <img
                src={checkIcon}
                className="w-7 h-7 "
                alt="Icon_checklist"
              ></img>
            </div>
            <h1 className="pt-3 text-2xl font-bold md:text-3xl text-MetallicBlue">
              Get Fayda
            </h1>

            <p className="px-10 py-4 font-poppins md:px-28 ">
              Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate,
              numquam deserunt iure harum ut ab non quibusdam.
            </p>
            <button className="h-8 text-base  text-white px-16 bg-green rounded-2xl hover:[text-darkblue hover:bg-MetallicBlue]">
              Learn More
            </button>
          </div>
          {/* <div className="w-1 mt-12 h-44 bg-MetallicBlue"></div> */}
        </div>

        <div className="flex place-content-center">
          <div className="flex flex-col content-center text-sm text-center md:px-25 place-items-center md:text-base">
          <div className="w-12 h-12 pt-2 border-2 rounded-full bg-MetallicBlue border-green/30">
              <img
                src={checkIcon}
                className="w-7 h-7 "
                alt="Icon_checklist"
              ></img>
            </div>
            <h1 className="pt-3 text-2xl font-bold md:text-3xl text-MetallicBlue">
              Update Fayda
            </h1>

            <p className="px-10 py-4 font-poppins md:px-28">
              Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate,
              numquam deserunt iure harum ut ab non quibusdam.
            </p>
            <button className="h-8 text-base  text-white px-16 bg-green rounded-2xl hover:[text-darkblue hover:bg-MetallicBlue]">
              Learn More
            </button>
          </div>
          {/* <div className="w-1 mt-12 h-44 bg-MetallicBlue"></div> */}
        </div>

        <div className="flex place-content-center">
          <div className="flex flex-col content-center text-sm text-center md:px-25 place-items-center md:text-base">
          <div className="w-12 h-12 pt-2 border-2 rounded-full bg-MetallicBlue border-green/30">
              <img
                src={checkIcon}
                className="w-7 h-7 "
                alt="Icon_checklist"
              ></img>
            </div>
            <h1 className="pt-3 text-2xl font-bold md:text-3xl text-MetallicBlue">
               Fayda Services
            </h1>

            <p className="px-10 py-4 font-poppins md:px-28">
              Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate,
              numquam deserunt iure harum ut ab non quibusdam.
            </p>
            <button className="h-8 text-base  text-white px-16 bg-green rounded-2xl hover:[text-darkblue hover:bg-MetallicBlue]">
              Learn More
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default CardSlider;

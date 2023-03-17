import React from "react";
// requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Svg1 from "../../../../assets/logo_white.png"
import visionIcon from "../../../../assets/visionIcon.png"
import valuesIcon from "../../../../assets/valuesIcon.png"
import missionIcon from "../../../../assets/missionIcon.png"


const CardSliderStakeholder = () => {
  return (
    <div className="flex flex-col items-center w-full h-full pt-10 md:scale-100">
  
      <Carousel
        axis="horizontal"
        className="w-[95%] p-10 h-4/5 "
        showArrows={false}
        showStatus={false}
        swipeable={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        transitionTime={1000}
        renderIndicator={false}
        
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 bg-white`}
              onClick={clickHandler}
            >
              <FaArrowCircleLeft className="w-3 h-3 text-black" />
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
              <FaArrowCircleRight className="w-3 h-3 text-black" />
            </div>
          );
        }} 
      >

      <div className="grid justify-center grid-cols-3 gap-20 p-10 px-24 md:gap-28 place-items-center justify-items-center">
        <div class=" flex flex-col place-items-center max-w-sm p-4 bg-white rounded-md  shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
          <img src={visionIcon} alt="vision Icon" className="py-3 w-28"></img>  
          <h5 class="mb-2 text-2xl font-bold">Vision</h5>
          <p class="font-normal text-sm dark:text-gray-400">
            Lorem ipsuit. Delectus vuasi issimos tempore deleni at quis corrupti
            aliquid consequatur eaque dolore eum adipisci.
          </p>
        </div>


        <div class=" flex flex-col place-items-center max-w-sm p-6 bg-white rounded-md shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
        <img src={missionIcon} alt="Mission Icon" className="py-3 w-28"></img>  
          <h5 class="mb-2 text-2xl font-bold">Mission</h5>
          <p class="font-normal text-sm dark:text-gray-400">
            Lorem ipsuit. Delectus vuasi issimos tempore deleni at quis corrupti
            aliquid consequatur eaque dolore eum adipisci.
          </p>
        </div>

        <div class=" flex flex-col place-items-center max-w-sm p-6 bg-white rounded-md shadow-[5px_12px_50px_-14px_rgb(0,0,0,0.3)] text-center px-8">
        <img src={valuesIcon} alt="Values Icon" className="py-3 w-28"></img>  
          
          <h5 class="mb-2 text-2xl font-bold">Values</h5>
          <p class="font-normal text-sm dark:text-gray-400">
            Lorem ipsuit. Delectus vuasi issimos tempore deleni at quis corrupti
            aliquid consequatur eaque dolore eum adipisci.
          </p>
        </div>

        
      </div>
      </Carousel>
    </div>
  );
};
export default CardSliderStakeholder;

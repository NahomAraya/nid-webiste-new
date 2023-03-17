import React from "react";


import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";

const Testimonials = ({list}) => {
  return (
    <>

    {
 list?
      <div className="flex flex-col items-center justify-center px-2 mb-10 text-xs bg-white md:mb-20 py-7">
        <Animate.FadeIn>
          <h1 className="text-4xl font-semibold uppercase md:text-4xl text-MetallicBlue font-barlow">
            Testimonials
          </h1>
        </Animate.FadeIn>

        <hr className="md:w-[5%] w-[20%] border-b-4 mb-2 mt-1  border-green" />

        <Animate.FadeIn>
          <p className="text-xs text-center px-14 md:text-base mb-9 font-poppins">
            what customers say about us and why you will enjoy our services!
          </p>
        </Animate.FadeIn>

        {/* <div className="absolute h-[25%] w-[32%] left-10 mt-10 z-10 backdrop-blur-sm">{}</div>
        <div className="absolute h-[25%] w-[32%] right-10 mt-10 z-10 backdrop-blur-sm">{}</div> */}

        <AliceCarousel
          className="fixed w-full "
          mouseTracking={true}
          animationType={ScaleIn}
          animationDuration={2500}
          infinite={true}
          autoPlay={true}
          paddingLeft={50}
          paddingRight={50}
          disableDotsControls
          disableButtonsControls
          fadeOutAnimation={true}
          autoHeight={true}
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 3,
              itemsFit: "contain",
            },
          }}
          items=
            {list.data.map((listItem) => (

            <div className="h-40 m-2 text-sm bg-white border-2 border-t-4 border-black border-opacity-25 rounded-lg shadow-lg border-t-green/80"> 
            <div >
            <article  class=" ">
            <p class="text-[#3f3f3f] text-xs h-[30%] md:text-sm px-4 py-3 pt-5 md:px-7 md:py-4 font-semibold font-barlow leading-tight p-2 text-justify ">
                  {listItem.description}
            </p>
            
                <header class="flex flex-col justify-start h-[40%]items-start p-1 mb-10 px-4 md:px-7 ">
                    <h1 class="text-base text-green font-bold">
                     {listItem.client_name}
                    </h1> 
                    
                    <h4 className="text-[#3f3f3f] font-medium text-xs">
                    {listItem.address}
                    </h4>
                      
                </header>
            </article> 
        </div>  
        </div>
            ))}
           
          
          
        />
      </div>
      : <></>
            }
      </>
  );
};
export default Testimonials;

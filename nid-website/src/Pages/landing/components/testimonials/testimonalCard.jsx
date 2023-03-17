import React from "react";

const TestimonialCard = () => {
    return(
        <div className="h-40 m-2 text-sm bg-white border-2 border-t-4 border-black border-opacity-25 rounded-lg shadow-lg border-t-green/80"> 
            <div >
            <article  class=" ">
            <p class="text-[#3f3f3f] text-xs h-[30%] md:text-sm px-4 py-3 pt-5 md:px-7 md:py-4 font-semibold font-barlow leading-tight p-2 text-justify ">
            Lorem ipsum, dolor sitssitatiburupti modi illum cupiditate,
            numquam deserunt iure harum ut ab non quibusdam.
            numquam deserunt iure harum ut ab non quibusdam.
            </p>
            
                <header class="flex flex-col justify-start h-[40%]items-start p-1 mb-10 px-4 md:px-7 ">
                    <h1 class="text-base text-green font-bold">
                      Client Name
                    </h1> 
                    
                    <h4 className="text-[#3f3f3f] font-medium text-xs">
                     United States
                    </h4>
                      
                </header>
            </article> 
        </div>  
        </div>
    )

}
export default TestimonialCard;
   

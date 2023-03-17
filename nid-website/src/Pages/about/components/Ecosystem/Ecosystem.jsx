import React from "react";
import { useMediaQuery } from "react-responsive";

const Ecosystem = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

  return (
        <div className="relative flex flex-col items-center h-96 bottom-12 mb-72">

            <div className="flex flex-col items-center justify-center mt-20 text-4xl text-center ">
                <div className="flex text-4xl md:text-3xl lg:text-4xl xl:text-5xl ">
                <h1 className="pr-2 font-semibold font-barlow text-MetallicBlue">Nid</h1>
                <h1 className="pb-4 font-semibold font-barlow text-green" >Ecosystem</h1>
                </div>
            </div>

            <div className="flex flex-col items-center pb-16 text-base font-light">
                <h1 className="pb-8 font-barlow text-2x1 md:text-3xl font-extralight "> National ID Service: Who is Involved?</h1>
                    <p className="w-[75%]  text-lg md:text-xl font-poppins text-center font-medium">
                        The Fayda IDMS is the central Foundational ID Management system that integrates with many other external Identification System (ABIS)
                        alternatives, and card printing services.The Fayda IDMS is the central Foundational ID Management system that integrates with many
                        other external Identification System (ABIS) alternatives, and card printing services
                    </p>
            </div>   

            <div className="relative flex flex-row justify-center space-x-7 mx-28 ">
                <div className="flex flex-col items-center pt-5 border-t-8 h-52 border-t-green backdrop-brightness-95 rounded-2xl">
                   
                    <h1 className="pb-2 text-xl font-semibold md:text-xl">
                    Pre-registration
                    </h1>
                    <hr className='w-[80%]'/>
                    <p className="relative py-2 text-sm leading-tight text-justify px-7 font-barlow">
                    A citizen / resident can use this portal to begin the application for a national ID. Only partial data
                    (demographic) and documents can be provided.
                    </p>
                </div>

                <div className="flex flex-col items-center pt-5 border-t-8 h-52 border-t-darkorange backdrop-brightness-95 rounded-2xl">
                    
                    <div className="">
                        <h1 className="pb-2 text-xl font-semibold md:text-xl">
                        Registration
                        </h1>
                    </div>
                    <hr className='relative w-[80%] '/>

                    <p className="relative py-2 text-sm leading-tight text-justify px-7 font-barlow">
                    A citizen / resident can use this portal to begin the application for a national ID. Only partial data
                    (demographic) and documents can be provided.
                    </p>
                </div>

                <div className="flex flex-col items-center pt-5 text-sm border-t-8 h-52 md:text-base border-t-darkred backdrop-brightness-95 rounded-2xl">
                    <h1 className="pb-2 text-xl font-semibold md:text-xl">
                    Credential Provision
                    </h1>
                    <hr className='relative w-[80%] '/>

                    <p className="relative py-2 text-sm leading-tight text-justify px-7 font-barlow">
                    A citizen / resident can use this portal to begin the application for a national ID. Only partial data
                    (demographic) and documents can be provided.
                    </p>
                </div>

                <div className="flex flex-col items-center text-sm border-t-8 h-52 md:text-base border-t-darkblue backdrop-brightness-95 rounded-2xl">

                    <h1 className="text-xl text-center w-[80%] font-semibold md:text-xl">
                    Call Center & Customer Support
                    </h1>
                    <hr className='relative w-[80%] '/>

                    <p className="relative py-2 text-sm leading-tight text-justify px-7 font-barlow">
                    A citizen / resident can use this portal to begin the application for a national ID. Only partial data
                    (demographic) and documents can be provided.
                    </p>
                </div>

                <div className="flex flex-col items-center pt-5 text-sm border-t-8 h-52 md:text-base border-t-lightblue backdrop-brightness-95 rounded-2xl">

                    <h1 className="pb-2 text-xl font-semibold md:text-xl">
                    Integrations
                    </h1>
                    <hr className='relative w-[80%] '/>

                    <p className="relative py-2 text-sm leading-tight text-justify px-7 font-barlow">
                    A citizen / resident can use this portal to begin the application for a national ID. Only partial data
                    (demographic) and documents can be provided.
                    </p>
                </div>
            </div>
        </div>     
  );
};

export default Ecosystem;
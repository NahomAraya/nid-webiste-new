import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import getfayda from "../../../../assets/7G4A2543.JPG"


const Getfayda = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const {t} = useTranslation();
    
    return(
        <>
            <div className="relative flex flex-col px-32 mt-36 mb-7 ">
                <div className="relative flex flex-row pb-14">
                    <div className="flex flex-col text-4xl w-[50%] ">
                        
                            <h1 className="mb-3 font-semibold font-barlow text-MetallicBlue md:text-5xl">{t('services-get-fayda')}</h1>
                            <h3 className="pb-4 font-light font-barlow text-green md:text-4xl" >{t('services-get-fayda-text1')}</h3>

                                <p className="w-[90%] font-barlow text-md md:text-2xl opacity-60 text-justify leading-tight ">
                             {t('services-get-fayda-text2')}
                                </p>
                   
                    </div> 
                    <div className="relative flex w-[46%] h-80 -right-8 rounded-2xl mb-16">
                        <div className=" absolute -right-6 w-[100%] h-[95%] border-2 brightness-95 top-9 rounded-2xl border-green" ></div>
                        <img src={getfayda} alt="tester" className="relative w-[100%]  object-cover brightness-110 rounded-xl overflow-hidden" />
                    </div> 
                </div>

                <div className="relative bottom-8 ">
                    <div className="flex items-center justify-between my-4 text-lg font-semibold font-barlow">

                    <button className=" px-0  py-3 h-[40%] w-[25%] text-white/90 shadow-md bg-green rounded-full hover:bg-[#083247] transition-all transform duration-300">
                    {t('services-nearest-station')}
                    </button> 

                    <button className=" px-0 h-[90%] py-3 w-[25%] text-white/90 shadow-md bg-green rounded-full hover:bg-[#083247] transition-all transform duration-300">
                    {t('services-appointment')}
                    </button>

                    <button className="px-0 h-[90%] py-3 w-[25%] text-white/90 shadow-md bg-green rounded-full hover:bg-[#083247] transition-all transform duration-300">
                    {t('services-requirements')}
                    </button>
                    </div>
                </div>
            </div>
            {/* <div className="relative w-full h-24 backdrop-brightness-95 "></div> */}
        </>
    );
};

export default Getfayda;
import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";



const Principle = () => {
  const {t} = useTranslation()
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <div className="w-full h-full px-24 py-5 text-white md:px-12 bg-MetallicBlue">

        <div className="flex p-6 mx-6 ">
          <div className=" w-[40%] md:w-[45%]  h-[60%] mt-10 mr-16 md:mr-3 ">
            <div className="flex text-4xl md:text-4xl lg:text-5xl xl:text-6xl ">
              <h1 className="pr-2 font-semibold font-barlow text-green">{t("nid")}</h1>
              <h1 className="pb-10 font-barlow">{t("principles")}</h1>
            </div>

            <p className="text-sm text-justify text-white/70 font-poppins">{t("principles-text")}</p>
            {/* <p className="pt-4 text-sm text-justify text-white/70 font-poppins">National Id shall mean foundational Digital ID. From this Program's perspective , the term.</p>        */}
            <button className=" px-12  mt-2 self-center font-semibold scale-90 h-8 btnnid rounded-2xl md:scale-100 hover:bg-[#083247]">
                         {t("learn-more")}
                        </button>
          </div>


          
          <div className="grid grid-cols-3 gap-3 pt-28 pb-20 ml-10 place-items-center  w-[60%] md:2-[70] text-base xl:text-base md:text-xs lg:text-sm font-bold font-barlow text-center">

            <div className="relative flex justify-center ">
            <div className="w-[80%] h-[85%] px-5 py-4 flex flex-col justify-center items-center border-2 border-white/20 rounded-2xl hover:text-MetallicBlue transition-all duration-300 ease-out cursor-pointer group">
            <div className="absolute bottom-0 w-0 h-0 group-hover:w-[80%] transition-all ease-out duration-300 group-hover:h-full bg-green flex flex-col justify-center items-center rounded-2xl"> </div>
                <h2 className="relative">{t("principles-privacy")}</h2>
                {/* <div className="border-b-4 border-green"> </div> */}
               
            </div>
            <div className="absolute bottom-0 w-20 border-b-4 border-green"> </div>
            </div>

            <div className="relative flex justify-center ">
            <div className="w-[80%] h-[85%]  px-16 py-4 flex flex-col justify-center items-center border-2 border-white/20 rounded-2xl hover:text-MetallicBlue transition-all duration-300 ease-out cursor-pointer group">
            <div className="absolute bottom-0 w-0 h-0 group-hover:w-[80%] transition-all ease-out duration-300 group-hover:h-full bg-green flex flex-col justify-center items-center rounded-2xl "> </div>
                <h2 className="relative">{t("principles-inclusion")}</h2>
                </div>
            <div className="absolute bottom-0 w-20 border-b-4 border-green"> </div>
            </div>


            <div className="relative flex justify-center ">
            <div className="w-[80%] h-[85%]  px-2 py-4 flex  flex-col justify-center items-center border-2 border-white/20 rounded-2xl hover:text-MetallicBlue transition-all duration-300 ease-out cursor-pointer group">
            <div className="absolute bottom-0 w-0 h-0 group-hover:w-[80%] transition-all ease-out duration-300 group-hover:h-full bg-green flex flex-col justify-center items-center rounded-2xl"> </div>
                <h2 className="relative">{t("principles-auth")}</h2>
                </div>
            <div className="absolute bottom-0 w-20 border-b-4 border-green"> </div>
            </div>


            <div className="relative flex justify-center ">
            <div className="w-[80%] h-[85%]  px-2 py-4 flex flex-col justify-center items-center border-2 border-white/20 rounded-2xl hover:text-MetallicBlue transition-all duration-300 ease-out cursor-pointer group">
            <div className="absolute bottom-0 w-0 h-0 group-hover:w-[80%] transition-all ease-out duration-300 group-hover:h-full bg-green flex flex-col justify-center items-center rounded-2xl"> </div>
                <h2 className="relative">{t("principles-usage")}</h2>
                </div>
            <div className="absolute bottom-0 w-20 border-b-4 border-green"> </div>
            </div>

            <div className="relative flex justify-center ">
            <div className="w-[80%] h-[85%] px-16 py-4 flex flex-col justify-center items-center border-2 border-white/20 rounded-2xl hover:text-MetallicBlue transition-all duration-300 ease-out cursor-pointer group">
            <div className="absolute bottom-0 w-0 h-0 group-hover:w-[80%] transition-all ease-out duration-300 group-hover:h-full bg-green flex flex-col justify-center items-center rounded-2xl"> </div>
                <h2 className="relative">{t("principles-usage")}</h2>
                </div>
            <div className="absolute bottom-0 w-20 border-b-4 border-green"> </div>
            </div>

            
            <div className="relative w-[80%] h-[85%]  px-5 py-4  flex flex-col justify-center  items-center border-2 border-white/20 rounded-2xl cursor-pointer overflow-hidden transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <div class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg class="w-5 h-5 text-green-400" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                    <div class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg class="w-5 h-5 text-green-400" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  <h2 className="">{t("learn-more")}</h2>
            </div>
        </div>



      </div>





      {/* <div className="flex px-20 pt-10 mx-4 border-2 pb-14 border-white/20 rounded-2xl ">
          
            <div className="w-[90%]">
                <h1 className="mb-6 text-6xl font-light text-white font-barlow"><span className="font-medium text-green">NID</span> Ecosystem</h1>
               
                <div className="flex justify-center items-center gap-10 mb-6 w-[90%]">
                <img src={regIcon}  className="w-16 h-auto mt-6 border-2 rounded-full border-green"alt="Icon_checklist"/>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-white font-barlow">Registration</h2>
                        <p className="mt-2 text-sm text-justify text-white/70 font-poppins"> This stage require physical apperance of the applicant
                          of at registration s tation. All inputs and bitation. All inputs and bitation. All inputs and biometric data will be taken</p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-10 mb-6 w-[90%]">
                <img src={callIcon}  className="w-auto h-16 p-2 mt-6 border-2 rounded-full border-green"alt="Icon_checklist"/>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-white font-barlow">Call Center &Customer Support</h2>
                        <p className="mt-2 text-sm text-justify text-white/70 font-poppins">  This is also a 24/7 support by differnt languages for
                      customers that need support and information.</p>
                    </div>

                </div>
               

            </div>




            <div className="  w-[90%]">

                      <div className="flex justify-center items-center gap-10 mb-6 w-[100%]">
                      <img src={preRegIcon}  className="w-16 p-2 mt-6 border-2 rounded-full border-green"alt="Icon_checklist"/>
                          <div className="mt-4">
                              <h2 className="text-2xl font-semibold text-white font-barlow"> Pre-registration</h2>
                              <p className="mt-2 text-sm text-justify text-white/70 font-poppins"> A citizen/resident can use this portal to begin the
                              application for a national ID. Only partial data
                              (demographic) and documents can be provided</p>
                          </div>

                      </div>

                      <div className="flex items-center gap-10 mb-6 w-[100%]">
                      <img src={credIcon}  className="w-16 h-16 p-2 mt-6 border-2 rounded-full border-green"alt="Icon_checklist"/>
                          <div className="mt-4">
                              <h2 className="text-2xl font-semibold text-white font-barlow"> Credential Provision</h2>
                              <p className="mt-2 text-sm text-justify text-white/70 font-poppins">   The National ID Program/Authority will prepare a
                              Unique ID(Fayda) number prepares credentials for each registered individual  prepares credentials for each registered individual
                              prepares credentials for each registered individual
                              prepares credentials for each registered individual</p>
                          </div>
                      </div>

                      
                      <div className="flex ">
                        <button className=" px-12 ml-24 self-center font-semibold scale-90 h-8 btnnid rounded-2xl md:scale-100 hover:bg-[#083247]">
                          Learn More
                        </button>
                      </div>
            </div>
        </div> */}
      </div>
    </>
  );
};
export default Principle;

import React from "react";
import MobileImg from "../../../../assets/hand_phone.png";
import HandImg from "../../../../assets/idServiceshand.png";
import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";
import { ReactComponent as AppleLogo } from "../../../../assets/applelogo.svg";
import { ReactComponent as Googleplaylogo } from "../../../../assets/googleplaylogo.svg";
import Qrcode from "../../../../assets/qrcode.png";
import { useTranslation } from "react-i18next";

const Idandmobile = () => {
  const { t} = useTranslation();
  return (
    <div class=" text-white font-barlow bg-id-services bg-left-top bg-cover h-fit">
      <div className="flex flex-col pb-0 bg-green-top-bottom-gradient">
        <div className="flex gap-20">
          <div className="flex items-center justify-center w-[70%] pt-10">
            <img src={HandImg} alt="Logo" className="items-start align-top" />
          </div>

          <div className="flex flex-col items-start mt-32 pr-20  w-[80%]">
            <h1 className="text-5xl font-semibold ">{t('services-pre-reg-text')}</h1>
            <div className="w-[15%] h-1 mr-1 bg-green my-3 rounded-md mb-4 "></div>
            <p className="text-lg font-normal text-justify font-barlow ">
            {t('services-pre-reg-text2')}{" "}
            </p>

            <button className="my-4 px-20 font-semibold text-white/90 shadow-md border-2 border-white/70 h-9 bg-transparent  rounded-3xl  hover:bg-[#083247]/50 transition-all transform duration-300">
            {t('services-pre-reg-button')}
            </button>
          </div>
        </div>

        <div className="z-0 flex flex-col">
          <div className="flex gap-20 px-28">
            <div className="flex flex-col  w-[55%]">
              <h1 className="text-5xl font-semibold">{t('services-mobile-app')}</h1>
              <div className="w-[15%] h-1 mr-1 bg-green my-3 rounded-md mb-4 ">
              
              </div>
              <p className="text-lg font-normal text-justify font-barlow">
              {t('service-mobile-app-text')}{" "}
              </p>

              <div className="grid items-center grid-cols-3 gap-4 pr-10 mt-8 ">
                <div className="shadow-sm shadow-white/80 h-14 grid grid-cols-3 py-1 align-middle bg-transparent border-2 border-white rounded-lg mr-7 place-items-center  hover:bg-[#083247]/50 transition-all  duration-300 hover:scale-105">
                  <div className="">
                    <AppleLogo className="h-10" />
                  </div>

                  <div className="flex flex-col items-center justify-center w-full col-span-2 leading-tight rounded-lg cursor-pointer font-poppins ">
                    <h1 className="text-sm">Download on the</h1>
                    <h1 className="font-semibold">App Store</h1>
                  </div>
                </div>

                <div className="cursor-pointer h-14 grid grid-cols-3 py-1 shadow-sm shadow-white/80 mr-4 align-middle bg-transparent border-2 border-white rounded-lg place-items-center  hover:bg-[#083247]/50 transition-all transform duration-300 hover:scale-105">
                  <div className="flex ">
                    <Googleplaylogo className="h-10" />
                  </div>

                  <div className="flex flex-col items-center justify-center w-full col-span-2 leading-tight rounded-lg font-poppins ">
                    <h1 className="text-sm ">Get it on</h1>
                    <h1 className="font-semibold ">Google Play</h1>
                  </div>
                </div>

                <div className="flex items-center justify-center h-20 mx-10 transition-all duration-300 cursor-pointer rounded-xl w-fit hover:shadow-xl">
                  <img
                    src={Qrcode}
                    className="h-full rounded-xl"
                    alt="Icon_checklist"
                  ></img>
                </div>
              </div>
            </div>

            <div className="flex justify-center align-top  h-[40%] -mt-60 w-[40%] ">
              <img
                src={MobileImg}
                alt="Logo"
                className="z-20 items-start align-top "
              />
            </div>
          </div>

          <div className="z-10 h-16 -mt-16 bg-grey/80"></div>
        </div>
      </div>
    </div>
  );
};

export default Idandmobile;

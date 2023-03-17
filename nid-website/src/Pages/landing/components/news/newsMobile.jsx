import React from "react";
import { useTransition } from "react-transition-state";
import AnimateIn from "../../../../hooks/animateIn";
import { FadeIn, FadeUp, ScaleIn, Animate } from "../../../../hooks/animations";

const NewsMobile = () => {
  return (
    <div className="flex flex-col justify-center mx-6 mt-10 mb-20 place-items-center">
      {/******************************************  title Bar ****************************************************/}
      <div className="flex w-full text-left ">
        <h1 className="mb-5 text-2xl font-semibold text-left font-barlow text-MetallicBlue  w-[100%]">
          NID latest updates
        </h1>

        <button className="h-7 text-base m-1 text-white px-4 w-[40%] bg-green rounded-2xl hover:bg-[#083247]">
          See More
        </button>
      </div>

      {/******************************************  News Bar ****************************************************/}
      <div className="flex-col ">
        {/******************************************  Big News ****************************************************/}
        <Animate.FadeIn>
          <div className="relative flex flex-col mt-5 text-left rounded-md ">
            <img
              className="w-[100] object-cover h-full align-middle rounded-xl shadow-md "
              src={require("../../../../assets/news4.jpg")}
              alt="news1"
            />

            <div className="absolute w-[100%] bottom-0 left-0 right-0 px-4 py-4 text-base bg-news-gradient rounded-xl">
              {" "}
              <h1 className="w-full leading-tight text-white font-barlow">
                {" "}
                NID did important stuff today and will continue to do so for the
                coming days, going on to the main.
              </h1>
            </div>
          </div>
        </Animate.FadeIn>

        {/****************************************** Small News wrapper ****************************************************/}
        <div className="flex gap-5">
          {/****************************************** Left -Small News ****************************************************/}
          <Animate.FadeIn>
            <div className="flex flex-col mt-5 rounded-xl h-24 w-[100%]">
              <div className="relative flex justify-center ">
                <img
                  className="object-cover w-[100%]  h-24 shadow-md rounded-xl justify-start flex"
                  src={require("../../../../assets/news3.jpg")}
                  alt="news1"
                />
                <div className="absolute bottom-0 left-0 w-full px-4 py-4 text-base bg-news-gradient rounded-xl">
                  {" "}
                </div>
              </div>
              <div className="flex flex-col place-items-center">
                <p class=" text-xs font-medium text-black px-2 pt-2 pb-1 font-barlow cursor-pointer leading-none">
                  NID did important stuff today and will continue to do so for
                  the coming days.{" "}
                </p>
              </div>
            </div>
          </Animate.FadeIn>

          {/******************************************  Right - Small News ****************************************************/}
          <Animate.FadeIn>
            <div className="flex flex-col mt-5 rounded-xl   h-24 w-[100%]  ">
              <div className="relative flex justify-center ">
                <img
                  className="object-cover w-[100%]  h-24 shadow-md rounded-xl justify-end flex"
                  src={require("../../../../assets/news1.jpg")}
                  alt="news1"
                />
                <div className="absolute bottom-0 left-0 w-full px-4 py-4 text-base bg-news-gradient rounded-xl">
                  {" "}
                </div>
              </div>
              <div className="flex flex-col place-items-center">
                <p class=" text-xs font-medium text-black px-2 pt-2 pb-1 font-barlow cursor-pointer leading-none">
                  NID did important stuff today and will continue to do so for
                  the coming days.{" "}
                </p>
              </div>
            </div>
          </Animate.FadeIn>
        </div>
      </div>
    </div>
  );
};
export default NewsMobile;

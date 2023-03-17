import { useState, useRef, useEffect } from "react";
import React from "react";
import { CarouselData } from "./CarouselData";

const Partner = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <>
      <div className="hidden md:inline ">
        <div className="flex flex-col items-center justify-center text-6xl text-center bg-transparent ">
          <h1 className="w-full pr-2 mt-12 mb-0 font-semibold font-barlow text-MetallicBlue ">
            Nid Partners
          </h1>
          <div className="bg-green h-1 w-[6%] "></div>
        </div>
        <div className="mt-2 ">
          <p className="mt-0 text-sm text-center text-MetallicBlue font-poppins ">
            Authorities, organization and institution working together for the
            use of the digital identity actors
          </p>
        </div>

        <div className="flex flex-wrap w-full px-16 mb-20 carousel ">
          <div className="relative w-full overflow-hidden ">
            <div className="absolute flex justify-between w-full h-full top left ">
              <button
                onClick={movePrev}
                className="z-10 w-10 h-full p-0 m-0 text-center transition-all duration-300 ease-in-out opacity-75 hover:bg-blue-900/75 text-MetallicBlue hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-12 -ml-8 text-MetallicBlue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="z-10 w-10 h-full p-0 m-0 text-center text-black transition-all duration-300 ease-in-out opacity-75 hover:bg-blue-900/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-12 -ml-5 font-bold text-MetallicBlue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="relative z-0 flex gap-6 p-8 overflow-hidden carousel-container scroll-smooth snap-x snap-mandatory touch-pan-x "
            >
              {CarouselData.map((resource, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-64 h-64 text-center carousel-item snap-start"
                  >
                    <a
                      className="z-0 flex w-full h-full p-2 overflow-hidden bg-white shadow-xl aspect-square bg-origin-padding hover:shadow-xl rounded-xl "
                      style={{ backgroundColor: "" }}
                    >
                      <img
                        src={resource.image}
                        className="object-cover p-10 my-8 w-50 h-50 indset-8 aspect-ratio "
                      />
                    </a>
                    <a
                      href={resource.link}
                      className="absolute top-0 left-0 z-10 block w-full h-full transition-opacity duration-300 opacity-0 aspect-square hover:opacity-100 bg-blue-800/75"
                    >
                      <h3 className="px-3 py-6 mx-auto text-xl text-white">
                        {resource.title}
                      </h3>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;

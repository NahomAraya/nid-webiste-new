import React from "react";
import { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";
import regIcon from "../../../../assets/2-01.svg";
import callIcon from "../../../../assets/3-01.svg";
import credIcon from "../../../../assets/5-01.svg";
import preRegIcon from "../../../../assets/6-01.svg";
import { FadeIn, FadeUp, ScaleIn, Animate } from "../../../../hooks/animations";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const PrincipleMobile = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <>
      <div className="flex flex-col w-full h-full pt-8 pb-10 text-center text-white bg-MetallicBlue ">
        <div className="flex flex-col px-5 pt-0 mx-6 ">
          <div className="mt-10 text-center">
            <Animate.FadeIn>
              <div className="flex justify-center text-4xl text-center">
                <h1 className="pr-2 mb-0 font-semibold font-barlow text-green">
                  NID
                </h1>
                <h1 className="pb-7 font-barlow">Principles</h1>
              </div>
            </Animate.FadeIn>

            <Animate.FadeIn>
              <div className="mt-0">
                {" "}
                <p className="mt-0 text-sm text-justify text-white font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore unde repellendus reiciendis facilis aliquam? Earum
                  officiis, repudiandae ipsum dignissimos expedita odit
                  aspernatur. Itaque quas dolore veniam non accusantium
                  molestias magnam!
                </p>
                <p className="pt-4 text-sm text-justify text-white font-poppins">
                  National Id shall mean foundational Digital ID. From this
                  Program's perspective , the term.ersp the term.erspective.
                </p>
              </div>
            </Animate.FadeIn>
            {
              <Animate.FadeIn>
                <button className="text-white/80 px-12  mt-5 self-center shadow-xl font-semibold scale-90 h-8 btnnid rounded-2xl md:scale-100 hover:bg-[#083247]">
                  Learn More
                </button>
              </Animate.FadeIn>
            }
          </div>
        </div>

      {/*   <Animate.FadeIn>
          <div className="flex flex-col justify-center px-5 mx-6 mt-20 border border-white/20 rounded-2xl text-white/90 place-items-center">
            <div className="flex w-full ">
              <div className="flex items-start justify-center w-full pt-5 text-4xl font-medium place-items-left ">
                <h1 className="pr-2 font-semibold font-barlow text-green">
                  NID
                </h1>
                <h1 className="pb-5 font-barlow">Ecosystem</h1>
              </div>
              {/* <button className="px-3  mt-2 self-center justify-center items-center font-semibold  h-7 btnnid rounded-2xl text-sm flex w-[40%]  hover:bg-[#083247]">
                  Learn More
                </button>  
            </div>

            <Fragment className="">
              <div className="flex flex-col justify-start font-semibold mx- place-items-start font-barlow">
                <Accordion
                  className="flex flex-col justify-center w-full text-center place-items-center "
                  open={open === 1}
                  animate={customAnimation}
                >
                  <AccordionHeader
                    className="flex w-full h-12 justify-left "
                    onClick={() => handleOpen(1)}
                  >
                    <div className="font-barlow">Registration</div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex gap-4 text-sm leading-tight text-left ">
                      <div className="w-32 h-4">
                        <img
                          src={preRegIcon}
                          className="border-2 rounded-full w-13 border-green"
                          alt="Icon_checklist"
                        />
                      </div>
                      <p className="mr-8 text-justify text-white font-poppins ">
                        This stage require physical appearance of the applicant
                        of at registration station A ll inputs nad biometric
                        data will be taken
                      </p>
                    </div>
                  </AccordionBody>
                </Accordion>

                <Accordion
                  className="flex flex-col justify-center w-full text-center place-items-center "
                  open={open === 2}
                  animate={customAnimation}
                >
                  <AccordionHeader
                    className="flex w-full h-12 justify-left"
                    onClick={() => handleOpen(2)}
                  >
                    <div className="text-start font-barlow">
                      Call Center & Customer Support
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex gap-4 text-sm leading-tight text-left ">
                      <div className="w-24 h-4">
                        <img
                          src={callIcon}
                          className="border-2 rounded-full w-13 border-green"
                          alt="Icon_checklist"
                        />
                      </div>
                      <p className="mt-0 mr-8 text-justify text-white font-poppins ">
                        This is also a 24/7 support by differnt languages for
                        customers that need support and information.
                      </p>
                    </div>
                  </AccordionBody>
                </Accordion>

                <Accordion
                  className="flex flex-col justify-center w-full text-center place-items-center "
                  open={open === 3}
                  animate={customAnimation}
                >
                  <AccordionHeader
                    className="flex w-full h-12 justify-left"
                    onClick={() => handleOpen(3)}
                  >
                    <div className="font-barlow">Pre-registration</div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex gap-4 text-sm leading-tight text-left ">
                      <div className="w-40 h-4">
                        <img
                          src={preRegIcon}
                          className="border-2 rounded-full w-13 border-green"
                          alt="Icon_checklist"
                        />
                      </div>
                      <p className="mt-0 mr-8 text-justify text-white font-poppins">
                        A citizen/resident can use this portal to begin the
                        applicaton for a national ID. Only patial data
                        demographic and documents can be provided
                      </p>
                    </div>
                  </AccordionBody>
                </Accordion>

                <Accordion
                  className="flex flex-col justify-center w-full text-center place-items-center "
                  open={open === 4}
                  animate={customAnimation}
                >
                  <AccordionHeader
                    className="flex w-full h-12 justify-left"
                    onClick={() => handleOpen(4)}
                  >
                    <div className="font-barlow">Credential Provision</div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex gap-4 text-sm leading-tight text-left ">
                      <div className="w-40 h-4">
                        <img
                          src={credIcon}
                          className="border-2 rounded-full w-13 border-green"
                          alt="Icon_checklist"
                        />
                      </div>
                      <p className="mt-0 mr-8 text-justify text-white font-poppins">
                        The National ID Program/Authority will prepare a unique
                        ID / Fayda number prepares credentials for each
                        registerd individual
                      </p>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            </Fragment>
          </div> 
        </Animate.FadeIn>
        */}
        {/* <button className=" px-12  mt-2 self-center font-semibold scale-90 h-8 btnnid rounded-2xl md:scale-100 hover:bg-[#083247]">
                  Learn More
                </button> */}
      </div>
    </>
  );
};
export default PrincipleMobile;

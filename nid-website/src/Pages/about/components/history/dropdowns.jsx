import React from "react";
import { useMediaQuery } from "react-responsive";
import { Fragment, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import regIcon from "../../../../assets/2-01.svg";
import callIcon from "../../../../assets/3-01.svg";
import credIcon from "../../../../assets/5-01.svg";
import preRegIcon from "../../../../assets/6-01.svg";
import { Dropdown } from "react-bootstrap";
import Registrationss from "./body";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Dropdownn = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  //   const handleChange = () => {
  //     const [panel, setExpanded] = useState(1);
  //     setExpanded(panel);
  //   };
  return (
    <>
      <div className="w-full h-full text-white ">
        <div className="flex flex-col ">
          {isDesktopOrLaptop ? (
            <div className="w-full -my-20 ">
              <Fragment>
                <div className="grid w-full">
                  <div className="flex flex-col w-full gap-8 ">
                    <div className="flex flex-col justify-center w-full px-10 text-black">
                      <Accordion
                        icon={
                          <AiOutlineRight
                            id={1}
                            open={open}
                            className="hidden"
                          />
                        }
                        className="w-full"
                        open={open === 1}
                        animate={customAnimation}
                      >
                       
                        <AccordionHeader
                          className="flex items-center justify-center w-full" 
                          onClick={() => handleOpen(1)}>
                          <div className="flex items-center justify-center w-full h-full ">
                            <h1 className="text-2xl text-MetallicBlue font-barlow ">Learn More</h1>
                            <AiOutlineRight className="text-3xl text-MetallicBlue" />
                          </div>
                        </AccordionHeader>

                        <AccordionBody>
                          <Registrationss />
                        </AccordionBody>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </Fragment>
            </div>
          ) : (
            <div className="py-10"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdownn;

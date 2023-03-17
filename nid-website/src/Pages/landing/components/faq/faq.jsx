import React from "react";
import { useMediaQuery } from "react-responsive";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import i18next from "i18next";


import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

const Faq = ({list}) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(-1);
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
    {list? 
     <div className="w-full h-full bg-white bg-left-bottom bg-cover bg-faq-background">
     <div className="w-full pt-6 text-white bg-white/70 h-fulls md:py-24 md:px-20">
     
       <div className="flex flex-col b md:flex-row">
         <div className="md:w-[30%] md:mx-5 mx-4 flex flex-col items-center md:justify-center  h-full ">
           <h1 className="pb-2 text-5xl font-semibold md:pb-6 text-MetallicBlue md:text-7xl font-barlow ">
             {t("faq")}
           </h1>
           <p className="px-3 text-center text-md md:text-justify md:text-md font-poppins text-MetallicBlue">
           {t("faq-text")}{" "}
           </p>
           <div className="w-full px-16 md:px-3">
             <button className="text-white/80  w-full  md:mt-5 self-center shadow-md  font-barlow font-semibold scale-90 h-8 btnnid rounded-md md:scale-100 hover:bg-[#083247]" onClick={()=>navigate("/faq")}>
             {t("faq-questions")}
             </button>
           </div>
         </div>

         {isDesktopOrLaptop ? (
           <div className=" w-[70%] mx-5 ">
             <Fragment>
               <div className="grid h-full grid-cols-2 gap-4 pt-5 m-2 align-middle ">
                 <div className="flex flex-col gap-2">
                    {list.data.slice(0,3).map((listItem, key) => (
                     <div className="px-10 text-black bg-white rounded-xl">
                     <Accordion
                       icon={<Icon id={key} open={open} />}
                       className=""
                       open={open === key}
                       animate={customAnimation}
                     >
                       <AccordionHeader
                         className="py-2.5"
                         onClick={() => handleOpen(key)}
                         onMouseEnter={() => handleOpen(key)}
                         onMouseLeave={()=> handleOpen(-1)}
                       >
                         <div className="font-barlow">
                           {i18next.language == "en" && listItem.question}
                           {i18next.language == "amh" && listItem.question_amh}
                         
                         </div>
                       </AccordionHeader>

                       <AccordionBody>
                         <div className="flex gap-4 text-sm leading-tight text-left text-black ">
                           <p className="mr-8 text-justify font-poppins ">
                           {i18next.language == "en" && listItem.answer}
                           {i18next.language == "amh" && listItem.answer_amh}
                           </p>
                         </div>
                       </AccordionBody>
                     </Accordion>
                   </div>


                   ))} 
                   

                
                 </div>

                 <div className="flex flex-col gap-2">
                 {list.data.slice(3,7).map((listItem, key) => (
                     <div className="px-10 text-black bg-white rounded-xl">
                     <Accordion
                       icon={<Icon id={key+3} open={open} />}
                       className=""
                       open={open === key+3}
                       animate={customAnimation}
                     >
                       <AccordionHeader
                         className="py-2.5"
                         onClick={() => handleOpen(key+3)}
                         onMouseEnter={() => handleOpen(key+3)}
                         onMouseLeave={()=> handleOpen(-1)}
                       >
                         <div className="font-barlow">
                         {i18next.language == "en" && listItem.question}
                           {i18next.language == "amh" && listItem.question_amh}
                         </div>
                       </AccordionHeader>

                       <AccordionBody>
                         <div className="flex gap-4 text-sm leading-tight text-left text-black ">
                           <p className="mr-8 text-justify font-poppins ">
                           {i18next.language == "en" && listItem.answer}
                           {i18next.language == "amh" && listItem.answer_amh}
                           </p>
                         </div>
                       </AccordionBody>
                     </Accordion>
                   </div>


                   ))} 

                
                 </div>
               </div>
             </Fragment>
           </div>
         ) : (
           <div className="py-10">
<Fragment>
               <div className="grid h-full grid-cols-2 gap-4 pt-5 m-2 align-middle ">
                 <div className="flex flex-col gap-2">
                 {list.data.slice(0,3).map((listItem, key) => (
                     <div className="px-10 text-black bg-white rounded-xl">
                     <Accordion
                       icon={<Icon id={key} open={open} />}
                       className=""
                       open={open === key}
                       animate={customAnimation}
                     >
                       <AccordionHeader
                         className="py-2.5"
                         onClick={() => handleOpen(key)}
                         onMouseEnter={() => handleOpen(key)}
                       >
                         <div className="font-barlow">
                         {i18next.language == "en" && listItem.question}
                           {i18next.language == "amh" && listItem.question_amh}
                         </div>
                       </AccordionHeader>

                       <AccordionBody>
                         <div className="flex gap-4 text-sm leading-tight text-left text-black ">
                           <p className="mr-8 text-justify font-poppins ">
                           {i18next.language == "en" && listItem.answer}
                           {i18next.language == "amh" && listItem.answer_amh}
                           </p>
                         </div>
                       </AccordionBody>
                     </Accordion>
                   </div>


                   ))} 
               
                 </div>

                 <div className="flex flex-col gap-2">
                 {list.data.slice(4,7).map((listItem, key) => (
                     <div className="px-10 text-black bg-white rounded-xl">
                     <Accordion
                       icon={<Icon id={key+3} open={open} />}
                       className=""
                       open={open === key+3}
                       animate={customAnimation}
                     >
                       <AccordionHeader
                         className="py-2.5"
                         onClick={() => handleOpen(key+3)}
                         onMouseEnter={() => handleOpen(key+3)}
                       >
                         <div className="font-barlow">
                         {i18next.language == "en" && listItem.question}
                           {i18next.language == "amh" && listItem.question_amh}
                         </div>
                       </AccordionHeader>

                       <AccordionBody>
                         <div className="flex gap-4 text-sm leading-tight text-left text-black ">
                           <p className="mr-8 text-justify font-poppins ">
                           {i18next.language == "en" && listItem.answer}
                           {i18next.language == "amh" && listItem.answer_amh}
                           </p>
                         </div>
                       </AccordionBody>
                     </Accordion>
                   </div>


                   ))}
                 
                 </div>
               </div>
             </Fragment>
               
           </div>

         )}
       </div>
       
       </div>
     </div>:
     <>
       </>
    
  }
   
    </>
  );
};

export default Faq;

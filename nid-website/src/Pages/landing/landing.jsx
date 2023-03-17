import React, {useState, useEffect, lazy} from "react";
import Footer from "../../components/footer/footer";
import News from "../landing/components/news/news"

import About from "../landing/components/about/About";
import AboutStakeholder from "../landing/components/about/AboutStakeholder";
import { useMediaQuery } from 'react-responsive';
import NewsMobile from "../landing/components/news/newsMobile";
import Testimonials from "../landing/components/testimonials/testimonials";
import Principle from "../landing/components/principles/principle";
import HeroLandingPage from "../landing/components/hero/heroLandingPage";

import OverlayedPrinciple from "../landing/components/principles/OverlayedPrinciple"
import PrincipleMobile from "../landing/components/principles/principleMobile";
import Faq from "./components/faq/faq";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getAbout, getNews, getFaq, getTest } from "../../redux/selectors";



function Landing() {
 
  const [citizen, setCitizen] = useState(true);
  const { t} = useTranslation();
  const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  useEffect(() => {
    console.log("to the top");
    window.scrollTo(0, 0);
  
  }, [])

  const aboutlist = useSelector(getAbout);
  const newslist = useSelector(getNews);
  const testlist = useSelector(getTest);
  const faqlist = useSelector(getFaq);
 

  return (
  <> 
 
  <>

  <HeroLandingPage citizen={citizen}/>

  <div className="overflow-hidden ">

 { isDesktopOrLaptop ?
    (
      <>
    <div className="absolute bottom-0 mt-10 text-lg font-medium transparent lg:mt-5 z-100 font-barlow ">
     <button className={`${activeButtonIndex === 0 ? " bg-white text-black " : " bg-button-gradient text-white shadow-2xl rounded-sm " } content-center p-2 px-14   hover:cursor-pointer  `} onClick={() =>  {setActiveButtonIndex(0); setCitizen(true)}}>{t( "residents")}</button>
     <button className={`${activeButtonIndex === 1 ? "bg-white text-black rounded-tr-md" : " rounded-tr-md bg-button-gradient text-white shadow-2xl rounded-sm "  } content-center p-2 px-16  hover:cursor-pointer`} onClick={() =>  {setActiveButtonIndex(1); setCitizen(false)}}>{t('stakeholder')}</button> 
     </div>
     {citizen ?  <><About list={aboutlist}/>   <OverlayedPrinciple/> </> :  <> <AboutStakeholder/>   <Principle/></> }
       
       </> 
    ):
     (
     <>
     <About list={aboutlist}/>
     <PrincipleMobile/> 
     </>
    )
    }



  
  

 
   {isDesktopOrLaptop?
   <News list={newslist}/>:
   <NewsMobile/>  
}

  
 <Testimonials list={testlist}/>
 <Faq list={faqlist}/>
 
  </div>
  <Footer/>
  </>

  </>
  );
}

export default Landing;
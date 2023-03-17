import React, {useState, useEffect} from "react";
import Footer from "../../components/footer/footer";

import News from "../landing/components/news/news"
// import News from "../../components/news/news";
import Hero from "../landing/components/hero/hero";
import About from "../landing/components/about/About";
import AboutStakeholder from "../landing/components/about/AboutStakeholder";
import { useMediaQuery } from 'react-responsive';
import NewsMobile from "../landing/components/news/newsMobile";
import TopBar from "../../components/navbar/navbar";
import { Route, Router, Routes } from "react-router";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Sidebar from "../../components/sidebar/sidebar";
import SidebarComponent from "../../components/sidebar/sidebar";
import Buttons from "../../components/buttons/buttons";
import Testimonials from "../landing/components/testimonials/testimonials";

import HeroLandingPage from "../about/components/hero/heroLandingPage";
import { Navbar } from "react-bootstrap/esm";
import OverlayedPrinciple from "../landing/components/principles/OverlayedPrinciple"
import PrincipleMobile from "../landing/components/principles/principleMobile";

import Partners from "./components/partners/partners";
import Carousel from "./components/partners/carousel";
import Principleabout from "./components/principleabout/principle";
import History from "./components/history/history";
import Registrations from "./components/registrations/registrations";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import { useSelector } from "react-redux";
import { getHistory } from "../../redux/selectors";

function AboutPage() {

  const [isLoading, setIsLoading] = useState(true);
  

 const historyList = useSelector(getHistory);

  const [citizen, setCitizen] = useState(true);
  const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  useEffect(() => {
    console.log("to the top");
    window.scrollTo(0, 0);
  
  }, [])



  return ( 
  <> 
 <HeroLandingPage citizen={citizen}/>


<History list={historyList}/>


<Ecosystem/>
<Registrations/>
<Partners/>
<Carousel/>
<Footer/>

  </>
  );
}

export default AboutPage;
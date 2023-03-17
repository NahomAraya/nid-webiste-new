import React from "react";
import { useMediaQuery } from 'react-responsive';


import TopBar from "../../../../components/navbar/navbar";
import Sidebar from "../../../../components/sidebar/sidebar";
import Hero from "./hero";


const HeroLandingPage = ({citizen}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
   <>
  {isDesktopOrLaptop?<TopBar viewState={citizen?"citizen":"stakeholder"}/>:<Sidebar/> } 
   <Hero citizen={citizen}/>
   </>
  );
};

export default HeroLandingPage;
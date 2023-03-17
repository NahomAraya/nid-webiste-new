import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import HeroLandingPage from "../idServices/components/hero/heroLandingPage";
import FooterService from "../../components/footer/footer";
import Idandmobile from "./components/idandmobile/idandmobile";
import Getfayda from "./components/getfayda/getfayda";
import Updatenumber from "./components/updatenumber/updatenumber";

function IdServices() {
  const [citizen, setCitizen] = useState(true);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  useEffect(() => {
    console.log("to the top");
    window.scrollTo(0, 0);
  
  }, [])
  return (
    <>
      <HeroLandingPage citizen={citizen} />
     
      <Getfayda/>
      <Idandmobile />
      <Updatenumber/>
      <FooterService />
    </>
  );
}

export default IdServices;

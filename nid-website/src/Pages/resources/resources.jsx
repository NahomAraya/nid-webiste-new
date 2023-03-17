import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import HeroLandingPage from "../resources/components/hero/heroLandingPage";
import FooterService from "../../components/footer/footer";
import Sidebar from "./components/sidebar/sidebar";

import { getResources } from "../../redux/selectors";


const Resources = ({title}) => {
  const [citizen, setCitizen] = useState(true);
  const resourcesList = useSelector(getResources);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  useEffect(() => {
    console.log("to the top");
    window.scrollTo(0, 0);
  
  }, [])
    return(
        <>
          <HeroLandingPage citizen={citizen} />
          <Sidebar title={title} list={resourcesList}/>
          <FooterService />
        </>
    )
}
export default Resources;


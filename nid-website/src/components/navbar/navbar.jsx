import React, { useState, useCallback, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo_white.png";
import ButtonDropDown from "../dropdown/buttonDropDown"
import SearchIcon from '@mui/icons-material/Search';

import "./navbar.css";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useTranslation } from "react-i18next";


const dummyData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",

    // subMenu: [
    //   {
    //     id: 1,
    //     name: "Services",
    //     path: "/services",
    //     view: "stakeholder"
    //   },
    //   {
    //     id: 2,
    //     name: "Services",
    //     path: "/services",
    //     view: "citizen"
    //   },
    //   {
    //     id: 3,
    //     name: "Services",
    //     path: "/services",
    //     view: "stakeholder"
    //   },
    // ],
  },
  {
    id: 3,
    name: "Resources",
    path: "/resources",

    subMenu: [
      {
        id: 1,
        name: "Media",
        path: "/media",
        view: "stakeholder"
      },
      {
        id: 2,
        name: "MOU",
        path: "/mou",
        view: "stakeholder"
      },
      {
        id: 3,
        name: "Decks",
        path: "/decks",
        view: "stakeholder"
      },

      {
        id: 4,
        name: "Polices and Stratgies",
        path: "/polices",
        view: "stakeholder"
      },
      {
        id: 5,
        name: "Publications",
        path: "/documents",
        view: "stakeholder"
      },
      {
        id: 6,
        name: "Specifications",
        path: "/nidspecifications",
        view: "stakeholder"
      },
      
    ],
  },
  {
    id: 4,
    name: "Media",
    path: "/news",

    subMenu: [
      {
        id: 1,
        name: "News",
        path: "/news",
        view: "stakeholder"
      },

      {
        id: 2,
        name: "Events",
        path: "/events",
        view: "stakeholder"
      },
      
      {
        id: 2,
        name: "Gallery",
        path: "/media/gallery/all",
        view: "citizen"
      },
     
    ],
  },
  {
    id: 5,
    name: "About Us",
    path: "/about",

  
  },
  {
    id: 6,
    name: "FAQ",
    path: "/faq",

  
  },
];
const TEXTS = ["Language", `ቋንቋ${"   "}`];
const TopBar = ({viewState}) => {
 
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Navbar
      className={classNames(
        scrollPosition > 0 ? "bg-MetallicBlue" : "transparent",
        "fixed w-full flex justify-between items-center pb-1 z-20 transition-shadow "
      )}
    >
      <Navbar.Brand className="absolute left-0 flex gap-2 ">
        <div class="flex p-5 mt-3 ">
          <img src={logo} alt="National Id logo" className="left-0 h-16 w-23 md:object-scale-down md:h-18"
          ></img>
          {/* <button className="px-6 py-1 mt-5 ml-56 text-base font-medium transition duration-150 ease-in-out shadow-lg rounded-2xl dropdown-toggle bg-green/30 whitespace-nowrap"> Language</button> */}

          <ButtonDropDown/>
     
        </div>
      </Navbar.Brand>



      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="items-center w-full mt-3 mr-10">
            {dummyData.map((itemData, index) => (
              <>
                {/* <Nav.Item className="p-2 ml-4 no-underline hover:underline hover:decoration-[#00f7c7]  hover:decoration-4 hover:decoration-offset-10 active:animate-pulse active:text-blue-400 ">
            <Link to={itemData.path}  className="nav-link" >
              <span className="text-[#005371] text-xl font-semibold"><FormattedMessage id={itemData.name}/></span>
            </Link>
          </Nav.Item>  */}
                <NavLink
                to={`${itemData.path}`}

                  className={(navData) =>
                    (!navData.isActive 
                   
                      ? "px-3 ml-2 no-underline "
                      : "px-3 ml-2 underline decoration-[#00f7c7]  decoration-4 decoration-offset-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer "
             ) }
                 

                >
                  {itemData.subMenu ? (

                    <div class="dropdown inline-block relative ">
                      <button class=" text-white font-semibold pb-4 px-2 rounded inline-flex items-center ">
                        <span class="mr-1 text-base font-semibold font-barlow hover:scale-110 transition duration-200">
                          {t(itemData.name)}
                        </span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-white ">
                        {itemData.subMenu.map((subItem, index) => (
                          
                          <li class="">
                            <span
                              class=" bg-darkblue/70 hover:bg-green/80 px-7 py-1 font-semibold hover:text-MetallicBlue rounded-sm border-white/20 border-b-2 block whitespace-no-wrap"
                             
                            >
                                <Link
                                 
                              to={subItem.path}>
                                  {t(subItem.name)}
                              
                              </Link>
                            </span>
                          </li>
                        ))}
                        {/* <li class=""><a class="rounded-t bg-green/30 hover:bg-green/70 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                        <li class=""><a class="bg-green/30 hover:bg-green/70 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                        <li class=""><a class="rounded-b bg-green/30 hover:bg-green/70 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li> */}
                      </ul>
                    </div>
                  ) : (
                    <span className="text-base font-semibold text-white transition duration-200 font-barlow hover:scale-110">
                     
                      <Link
                     
                              
                              to={`${itemData.path}`}
                            >    {t(itemData.name)}
                            </Link>
                    </span>
                  )}
                </NavLink>
              </>
            ))}
          <SearchIcon className="text-white text-md ml-10 rounded-2xl border-white border-2 p-0.5 hover:cursor-pointer hover:scale-110 transition duration-200"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;

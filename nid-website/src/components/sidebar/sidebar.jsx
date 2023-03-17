import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import SubMenu from './subMenu';
import { IconContext } from 'react-icons/lib';
import SearchIcon from '@mui/icons-material/Search';
import ButtonDropDown from '../dropdown/buttonDropDown';
import logoOnly from "../../assets/logo_only.png"

import { useScrollPosition } from "../../hooks/useScrollPosition";

const Nav = styled.div`
position:absolute;
  z-index:10;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #09384f;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;



  const TEXTS = [
    "Language",
    "ቋንቋ"
  ];

  const Sidebar = ({viewState}) => {
    const [index, setIndex] = useState(0);
    const [sidebar, setSidebar] = useState(false);
    const [view, setView ] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
    const scrollPosition = useScrollPosition();

    useEffect(()=>{

      const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
    },[])
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav className='w-full '>
         
            <NavIcon to='#' className='fixed' >
              
              <FaIcons.FaBars onClick={showSidebar} style={scrollPosition > 0 ? { color: "#235D71" }: {}}/>
            </NavIcon>
           
           <div className='ml-16 '>
            <ButtonDropDown/>
            </div>
          
            <img src={logoOnly} alt="National Id logo" className="absolute right-8 top-4 h-14 "></img>
           
            
    
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
              {/* <label class="relative text-gray-400 mr-12  block">
                  <SearchIcon className='absolute w-8 h-8 transform -translate-y-1/2 pointer-events-none top-1/2 left-3'/>
                <input className='block w-full px-4 py-3 text-xs text-gray-500 placeholder-gray-400 bg-white border border-gray-900 appearance-none pl-14' placeholder='Search ..'/>
            
                </label> */}
                <AiIcons.AiOutlineClose onClick={showSidebar} />
                {/* <img src={logo} alt="National Id logo" className="absolute h-10 ml-10 w-23 md:object-scale-down md:h-18"></img> */}
                <label class="relative text-gray-400 mx-4  block">
                  <SearchIcon className='absolute w-8 h-8 transform -translate-y-1/2 pointer-events-none top-1/2 left-3'/>
                <input className='block w-full py-3 text-xs text-gray-500 placeholder-gray-400 bg-white border border-gray-900 appearance-none pl-14' placeholder='Search ..'/>
            
                </label>
               
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </>
    );
  };
  
  export default Sidebar;
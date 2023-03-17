import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'Service',
    path: '/services',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Media',
        path: '/media',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'MOU',
        path: '/mou',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Decks',
        path: '/decks',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Policies and Strategies',
        path: '/policies',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Publications',
        path: '/documents',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Specifications',
        path: '/nidspecifications',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Media',
    path: '/news',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: 'News',
          path: '/news',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Events',
          path: '/events',
          icon: <IoIcons.IoIosPaper />
        }
      ]
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
   
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
   
  },
 
 
];
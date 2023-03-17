import React from "react";
//import './news.css';
import Iframe from "react-iframe";
import { useMediaQuery } from "react-responsive";
import i18next from "i18next";
import TextLoop from "react-text-loop";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiYoutubeFill } from "react-icons/ri";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FaRegEdit } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

const Updates = ({ newslist, socials }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
    {newslist? 
      <div className="flex hidden xl:inline font-barlow ">
        <div class="grid gap-10  grid-cols-3 mx-28 mt-12 ">
          {/*  Title for news /Press  container  */}
          <div className="h-10 col-span-2 ">
            <div className="flex-col ">
              <div className="flex ">
                <h1 className="px-16 text-2xl text-center text-white whitespace-nowrap bg-MetallicBlue rounded-t-md">
                  <span className="flex items-center justify-center h-full rounded-sm ">
                    Trending
                  </span>
                </h1>
                <ul className="flex items-center justify-center w-full h-full gap-10 px-8 text-2xl ">
                  <div className="grid w-full place-items-center">
                  <button className={`content-center px-6 hover:cursor-pointer hover:underline focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}>All</button>
                   
                  </div>
                  <div className="grid w-full place-items-center">
                  <button className={`content-center px-6 hover:cursor-pointer hover:underline focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}>News</button>
                  </div>
                  <div className="grid w-full place-items-center ">
                  <button className={`content-center px-6 hover:cursor-pointer hover:underline focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}>Press</button>
                  </div>

                  <div className="grid w-full place-items-center">
                  <button className={`content-center px-6 hover:cursor-pointer hover:underline focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}>Tender</button>
                  </div>

                  <div className="flex items-center justify-center w-full bg-darkred ">
                    <li></li>
                  </div>

                  <div className="flex items-center justify-center w-full bg-darkred ">
                    <li></li>
                  </div>
                  {/* <div className="bg-green h-1 w-[40%] "></div> */}
                </ul>
              </div>

              <div>
                <hr className="w-[100%] border-b-1 border-MetallicBlue font-light" />
              </div>
            </div>
          </div>

          {/*  Title for Staying connected  */}
          <div className="h-10 col-span-1 ">
            <h1 className=" text-2xl text-white whitespace-nowrap  bg-MetallicBlue text-center h-full  w-[50%] flex justify-center items-center rounded-t-md">
              <span className="flex items-center justify-center h-full rounded-sm">
                Stay Connected
              </span>
            </h1>
            <hr className="w-full border-b-1 border-MetallicBlue " />
          </div>

          {/*  Single Major News container  */}
          <div className=" cursor-pointer h-[50%]   text-darkblue font-medium ">
            <div className="w-full h-full ">
              {" "}
              <img
                className="object-cover w-full h-full duration-300 rounded-lg shadow-lg shadow-MetallicBlue hover:scale-105 transform-all"
                src={`http://196.189.124.207:8000${newslist.data[0].image}`}
                alt="news1"
              />
            </div>

            <div className="mt-4 overflow-auto text-2xl font-semibold ">
              <h1>
                {i18next.language == "en" && newslist.data[0].title}{" "}
                {i18next.language == "amh" && newslist.data[0].title_amh}{" "}
              </h1>
            </div>
            <div className="mt-3 text-justify  h-[20%] overflow-y-auto pr-3 shadow-sm">
              <p>
                {i18next.language == "en" && newslist.data[0].description}{" "}
                {i18next.language == "amh" && newslist.data[0].description_amh}
              </p>
            </div>

            <div className="bottom-0 flex mt-4 font-light ">
              <h3>{newslist.data[0].date}</h3>
            </div>
          </div>

          {/* News Update holder in mini form container */}
          <div className=" h-[70%]">
            <div class="grid grid-rows-4 grid-cols-3 gap-y-4 gap-x-3  rounded-md h-full">
              {newslist.data.slice(1, 5).map((newslistItem, key) => (
                <>
                  <div class="col-start-1 flex items-center justify-center ">
                    <img
                      className="object-cover w-full h-[80%] duration-300 rounded-lg shadow-md shadow-MetallicBlue hover:scale-105 transform-all"
                      src={`http://196.189.124.207:8000${newslistItem.image}`}
                      alt="news1"
                    />
                  </div>
                  <div class=" relative col-span-2 ">
                    <div className="overflow-auto text-2xl font-semibold ">
                      <h1>
                        {i18next.language == "en" && newslistItem.title}{" "}
                        {i18next.language == "amh" && newslistItem.title_amh}{" "}
                      </h1>
                    </div>
                    <div className=" h-[50%] leading-tight  overflow-auto text-justify  pr-3">
                      <p>
                        {i18next.language == "en" && newslistItem.sub_title}{" "}
                        {i18next.language == "amh" &&
                          newslistItem.sub_title_amh}{" "}
                      </p>
                    </div>

                    <div className="absolute bottom-0 ">
                      <h3>{newslistItem.date}</h3>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Social Media and Tweet Embed container */}
          <div className="">
            <div className="flex flex-col h-[70%] gap-16 ">

              <div className="flex flex-col ">
                  <div className="flex items-center justify-center py-1 ">
                    <div className="flex   w-[85%]">
                      <div className="p-1 text-3xl text-white rounded-lg bg-dodgerblue">
                        <a>
                          <FaFacebookF />
                        </a>{" "}
                      </div>
                      <div className="px-2 text-2xl ">
                        {" "}
                        <p>Facebook</p>{" "}
                      </div>
                    </div>
                    <div className="w-full h-full text-center ">
                      <button className="border-2 text-center rounded-full w-[90%]  hover:bg-MetallicBlue hover:text-white transform-all duration-200 ">
                        Like
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-1 ">
                  <div className="flex   w-[85%]">
                    <div className="p-1 text-3xl text-white rounded-lg bg-dodgerblue">
                      <a>
                        <BsTwitter />
                      </a>{" "}
                    </div>
                    <div className="px-2 text-2xl">
                      {" "}
                      <p>Twitter</p>{" "}
                    </div>
                    </div>
                    <div className="w-full h-full text-center ">
                      <button className="border-2 text-center rounded-full w-[90%] hover:bg-MetallicBlue hover:text-white transform-all duration-200 ">
                        Follow
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-1 ">
                  <div className="flex  w-[85%]">
                    <div className="p-1 text-3xl text-white rounded-lg bg-darkred">
                      <a>
                        <RiYoutubeFill />
                      </a>{" "}
                    </div>
                    <div className="px-2 text-2xl ">
                      {" "}
                      <p>Youtube</p>{" "}
                      </div>
                    </div>
                    <div className="w-full h-full text-center ">
                    <button className="border-2 text-center rounded-full w-[90%] hover:bg-MetallicBlue hover:text-white transform-all duration-200 ">
                      Subscribe
                    </button>
                    </div>
                  </div>

                  <div>              
                  </div>
              </div>

              {/* <div className="grid gap-6">
              {socials.data.map((social, key) => (
                <>
                  <div className="border-2 text-center rounded-full w-[50%] h-400  ">
                    <button> {social.action}</button>
                  </div>
                </>
              ))}
            </div> */}

              <div className=" w-[100%]  h-fit md:w-[100%] md:h-fit  rounded-3xl ">
                <div className=" w-[100%] h-fit  rounded-3xl ">
                  <TwitterTimelineEmbed
                    sourceType="url"
                    url="https://twitter.com/IDethiopia"
                    screenName="nationalID"
                    options={{ height: 250 }}
                  />
                </div>
              </div>

              
            </div>
          </div>

          {/* 

       
          {/* <div className=" bg-darkred">
                        <div class="grid grid-rows-4 grid-cols-2 gap-2  rounded-md h-[50%]">
              {newslist.data.slice(1, 5).map((newslistItem, key) => (
                <>
                  <div class="col-start-1 ">
                    <img
                      className="object-cover w-full h-full rounded-md"
                      src={`http://196.189.124.207:8000${newslistItem.image}`}
                      alt="news1"
                    />
                  </div>
                  <div class=" relative col-start-2 col-span-12 ">
                    <div className="text-2xl font-semibold">
                      <h1>
                        {i18next.language == "en" && newslistItem.title}{" "}
                        {i18next.language == "amh" && newslistItem.title_amh}{" "}
                      </h1>
                    </div>

                    <div className="w-full h-[50%] overflow-hidden">
                      <p>
                        {i18next.language == "en" && newslistItem.sub_title}{" "}
                        {i18next.language == "amh" &&
                          newslistItem.sub_title_amh}{" "}
                      </p>
                    </div>
                    <div className="absolute bottom-0 bg-white ">
                      <h3>{newslistItem.date}</h3>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div> */}

          {/* <div className=" bg-violet">
            <div className="grid grid-cols-2 grid-rows-3">
              <div className="bg-green">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="px-1 py-1 text-3xl text-white rounded-lg bg-dodgerblue">
                      <a>
                        <FaFacebookF />
                      </a>{" "}
                    </div>
                    <div className="px-8 text-2xl ">
                      {" "}
                      <p>Facebook</p>{" "}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="px-1 py-1 text-3xl text-white rounded-lg bg-dodgerblue">
                      <a>
                        <BsTwitter />
                      </a>{" "}
                    </div>
                    <div className="px-8 text-2xl ">
                      {" "}
                      <p>Twitter</p>{" "}
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-1 py-1">
                    <div className="px-1 py-1 text-3xl text-white rounded-lg bg-darkred">
                      <a>
                        <RiYoutubeFill />
                      </a>{" "}
                    </div>
                    <div className="px-8 text-2xl ">
                      {" "}
                      <p>Youtube</p>{" "}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-2 text-center rounded-full w-[50%] h-400  ">
                    <button>Like</button>
                  </div>
                  <div className="border-2 text-center rounded-full w-[50%] h-200">
                    <button>Follow</button>
                  </div>
                  <div className="border-2 text-center rounded-full w-[50%] h-200">
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {socials.data.map((social, key) => (
                <>
                  <div className="border-2 text-center rounded-full w-[50%] h-400  ">
                    <button> {social.action}</button>
                  </div>
                </>
              ))}
            </div>

            <div className=" w-[100%]  h-[100%] md:w-[90%] md:h-[80%]  rounded-3xl md:flex hidden  ">
              <div className=" w-[100%] h-[100%]  rounded-3xl ">
                <TwitterTimelineEmbed
                  sourceType="url"
                  url="https://twitter.com/IDethiopia"
                  screenName="nationalID"
                  options={{ height: 250 }}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>:
      <></>

}
    </>
  );
};
export default Updates;

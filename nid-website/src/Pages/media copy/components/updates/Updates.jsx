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
      <div className="hidden xl:inline font-barlow ">
        <div class="grid grid-cols-3 gap-6 mx-28 my-12 ">
          <div className="">
            <div className="flex">
              <h1 className=" text-2xl text-white whitespace-nowrap  bg-MetallicBlue rounded-t-sm  w-[100%] text-center pl-8 pr-8">
                <span className="rounded-sm ">Trending</span>
              </h1>
              <ul className="flex mx-20 text-2xl gap-28">
                <div>
                  <li className="ml-4 ">All</li>
                  <div className="bg-green h-2 w-[130%] "></div>
                </div>
                <div>
                  <li>News</li>
                </div>
                <div>
                  <li>Press</li>
                </div>
                <div className="bg-green h-1 w-[40%] "></div>
              </ul>
            </div>
            <hr className="w-[200%] border-b-1 mb-12 border-MetallicBlue  font-light " />

            <div className="">
              {" "}
              <img
                className="rounded-lg "
                src={`http://196.189.124.207:8000${newslist.data[0].image}`}
                alt="news1"
              />
            </div>
            <div className="text-2xl font-semibold">
              <h1>
                {i18next.language == "en" && newslist.data[0].title}{" "}
                {i18next.language == "amh" && newslist.data[0].title_amh}{" "}
              </h1>
            </div>
            <div className="">
              <p>
                {i18next.language == "en" && newslist.data[0].description}{" "}
                {i18next.language == "amh" && newslist.data[0].description_amh}
              </p>
            </div>
            <div className="font-light">
              <h3>{newslist.data[0].date}</h3>
            </div>
          </div>

          <div>
            <div className="mb-24 "></div>

            <div class="grid grid-rows-4 grid-cols-2 gap-6 ">
              {newslist.data.slice(1, 5).map((newslistItem, key) => (
                <>
                  <div class="col-start-1 ">
                    <img
                      className="rounded-lg"
                      src={`http://196.189.124.207:8000${newslistItem.image}`}
                      alt="news1"
                    />
                  </div>
                  <div class="col-start-2 col-span-12 ">
                    <div className="text-2xl font-semibold">
                      <h1>
                        {i18next.language == "en" && newslistItem.title}{" "}
                        {i18next.language == "amh" && newslistItem.title_amh}{" "}
                      </h1>
                    </div>
                    <div>
                      <p>
                        {i18next.language == "en" && newslistItem.sub_title}{" "}
                        {i18next.language == "amh" &&
                          newslistItem.sub_title_amh}{" "}
                      </p>
                    </div>
                    <div>
                      <h3>{newslistItem.date}</h3>
                    </div>
                  </div>
                </>
              ))}
              {/* <div class="col-start-1 "><img className="rounded-lg" src={require('../../../../assets/photo1.jpg')} alt="news1"/></div>
  <div class="col-start-2 col-span-12 ">
  <div className="text-2xl font-semibold"><h1>News Title</h1></div>
    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit. </p></div>
    <div ><h3>feb 25, 2023</h3></div>

  </div>
  <div class="col-start-1 "><img className="rounded-lg" src={require('../../../../assets/photo1.jpg')} alt="news1"/></div>
  <div class="col-start-2 col-span-12 ">
  <div className="text-2xl font-semibold"><h1>News Title</h1></div>
    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit. </p></div>
    <div ><h3>feb 25, 2023</h3></div>

  </div>
  <div class="col-start-1   "><img className="rounded-lg" src={require('../../../../assets/photo1.jpg')} alt="news1"/></div>
  <div class="col-start-2 col-span-12 ">
  <div className="text-2xl font-semibold"><h1>News Title</h1></div>
    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit. </p></div>
    <div ><h3>feb 25, 2023</h3></div>

  </div>
  <div class="col-start-1 "><img className="rounded-lg" src={require('../../../../assets/photo1.jpg')} alt="news1"/></div>
  <div class="col-start-2 col-span-12 ">
  <div className="text-2xl font-semibold"><h1>News Title</h1></div>
    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit. </p></div>
    <div ><h3>feb 25, 2023</h3></div>

  </div> */}
            </div>
          </div>

          <div>
            <div className="my-2 ">
              <h1 className=" text-2xl text-white whitespace-nowrap  bg-MetallicBlue text-center  w-[50%] ">
                <span className="rounded-sm ">Stay Connected</span>
              </h1>
              <hr className="w-[100%] border-b-1 mb-16 border-MetallicBlue  " />
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="grid gap-4 ">
                {/* {socials.data.map((social, key) => (
                  <div className="flex items-center justify-center ">
                    <div className="text-3xl text-white rounded-lg bg-darkblue">
                      <a href={social.link}>
                        <img className="w-10 h-10" src={social.image} />
                      </a>{" "}
                    </div>

                    <div className="px-8 text-2xl ">
                      {" "}
                      <p>{social.title}</p>{" "}
                    </div>
                  </div>
                ))} */}

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
            </div>

            {/*
            
            <div className="  h-60 w-[74%]  border-2  rounded-xl my-8  mx-8  max-2xl:my-2   max-2xl:h-80  max-2xl:w-[80%]">
<div className="flex items-center justify-start my-3">
        <div className="mx-4 text-2xl font-bold text-MetallicBlue"> <p>Tweets from NID</p> </div>
        <div className="mx-8 text-4xl text-dodgerblue"><a><BsTwitter/></a> </div>
    </div>
    <div className=''>  <hr className="w-[80%] border-b-1  border-MetallicBlue  ml-2"/></div>

    <div className="flex items-center justify-start ">
    <div className=""><img className="left-0 h-16 px-2 py-4 w-23 md:object-scale-down md:h-18 " src={require('../../../../assets/logo_only.png')} alt="news1"/> </div>
        <div className=" text-1xl">  <p> <span className="font-semibold ">National ID Program-Ethiopia</span> <br></br>@IDethiopia</p> </div>
        
        
    </div>
    <div className="mx-16 my-4 "><p>Lorem ipsum dolor sit amet consectetur  amet   </p></div>
</div> */}
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Updates;

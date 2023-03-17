import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import resourceImg from "../../../../assets/resourceImageshort.png";
import i18next from "i18next";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ slug }) => {
  switch (slug) {
    case "all":
      return <h1>All</h1>;
    case "media":
      return <h1>Media</h1>;
    default:
      return null;
  }
};



const Sidebar = ({title, list}) => {
    const navigate = useNavigate();
    const subPath = useLocation();

    const handleNavigate = (num, path) => {
        setActiveButtonIndex(num);
        navigate(path)


    }
    const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
    return(

        <>
        {list? 
        <>
        <div className="flex items-center justify-center h-20 gap-10 mb-8 bg-lightblue">
            {/* <div className="bg-white w-[30%] rounded-2xl py-1.5 flex text-lg justify-center font-barlow h-9 items-center ">Search Documents</div>
            <div className="h-10 bg-green"></div> */}
        <div className="flex items-center w-[30%]">
          <input
            className="block w-full py-2 pl-8 pr-48 text-lg text-gray-500 placeholder-gray-400 bg-white appearance-none rounded-3xl font-barlow placeholder:text-center"
            placeholder="Search Documents"
          />
          <SearchIcon className="-ml-9" />
        </div>


        <div className="font-bold text-white font-barlow">
          <button
            className={`content-center px-6 hover:cursor-pointer hover:underline focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}
          >
            Latest
          </button>
          <button
            className={`content-center px-6 hover:cursor-pointer hover:underline  focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}
          >
            Name
          </button>
          <button
            className={`content-center px-6 hover:cursor-pointer hover:underline  focus:underline focus:decoration-[#00f7c7] decoration-4 decoration-offset-10 `}
          >
            Date
          </button>
        </div>

        <div></div>
      </div>

      <div className="flex justify-start mx-32 ">
        <div className="w-[20%] mt-10 mb-20 flex flex-col justify-center font-barlow text-MetallicBlue ">
          <h2 className="flex w-full ml-3 text-xl font-bold text-left ">
            Categories
          </h2>

          <div className="grid gap-8 mt-4 font-semibold grid-rows-7 font-barlow ">
            <div
              className={`${
                subPath.pathname === "/resources"
                  ? "flex bg-green rounded-md items-center "
                  : ""
              } flex justify-start  p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(1, "/resources")}
            >
              <h3 className="self-start ml-2 font-barlow"> All</h3>
              {subPath.pathname === "/resources" && (
                <div class="ml-auto ">
                  {/* <svg class="w-5 h-5 text-green-400" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            <div
              className={`${
                subPath.pathname === "/media"
                  ? "bg-green text-black rounded-lg"
                  : ""
              } flex justify-start items-center p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(2, "/media")}
            >
              <h3 className="self-start ml-2 font-barlow">Media</h3>
              {subPath.pathname === "/media" && (
                <div class="ml-auto ">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div
              className={`${
                subPath.pathname === "/mou"
                  ? "bg-green text-black rounded-lg"
                  : ""
              } flex justify-start items-center p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(3, "/mou")}
            >
              <h3 className="self-start ml-2 font-barlow">Mous & Agreements</h3>
              {subPath.pathname === "/mou" && (
                <div class="ml-auto ">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div
              className={`${
                subPath.pathname === "/decks"
                  ? "bg-green text-black rounded-lg"
                  : ""
              } flex justify-start items-center p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(4, "/decks")}
            >
              <h3 className="self-start ml-2 font-barlow">Decks</h3>
              {subPath.pathname === "/decks" && (
                <div class="ml-auto ">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div
              className={`${
                subPath.pathname === "/polices"
                  ? "bg-green text-black rounded-lg"
                  : ""
              } flex justify-start items-center p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(5, "/polices")}
            >
              <h3 className="self-start ml-2 font-barlow">
                Polices & Strategies
              </h3>
              {subPath.pathname === "/polices" && (
                <div class="ml-auto ">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div
              className={`${
                subPath.pathname === "/documents"
                  ? "bg-green text-black rounded-lg"
                  : ""
              } flex justify-start items-center p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(6, "/documents")}
            >
              <h3 className="self-start ml-2 font-barlow">Publications</h3>
              {subPath.pathname === "/documents" && (
                <div class="ml-auto ">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div
              className={`${
                subPath.pathname === "/nidspecifications"
                  ? "bg-green text-black rounded-lg"
                  : ""
              } flex justify-start items-center p-2 hover:cursor-pointer`}
              onClick={() => handleNavigate(7, "/nidspecifications")}
            >
              <h3 className="self-start ml-2 font-barlow">Specifications</h3>
              {subPath.pathname === "/nidspecifications" && (
                <div class="ml-auto ">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start px-10 ">
          <div className="justify-center flex  w-0.5 h-[95%] ml-1 bg-lightblue "></div>
        </div>

        <div className="grid w-full grid-cols-4 gap-10 mt-10 mb-24 ml-16 text-center font-barlow ">
          {list.data.map((listItem) =>
            (title == "All") | (title == listItem.category) ? (
              <div
                className="w-full cursor-pointer"
                onClick={(e) => {
                  window.open(listItem.document, "_blank");
                }}
              >
                <div className="">
                  <img
                    src={resourceImg}
                    className="transition-all duration-200 bg-cover rounded-lg shadow-lg shadow-black/20 hover:translate-y-1 hover:translate-x-1"
                    alt="resource_title"
                  ></img>
                </div>
                <div className="">
                  <h1 className="pt-4 text-xl font-semibold">
                    {i18next.language == "en" && listItem.title}{" "}
                    {i18next.language == "amh" && listItem.title_amh}
                  </h1>
                  <p className="px-10 py-2 leading-tight">
                    {i18next.language == "en" && listItem.description}{" "}
                    {i18next.language == "amh" && listItem.description_amh}
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>


        </div>
        </>:

        <>
        </>

}
        </>
    )
}
export default Sidebar;

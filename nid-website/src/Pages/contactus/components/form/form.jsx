import React from "react";

const Form = () => {
    return(
        <div className="  pt-20 pb-10 p-28">
         <div className=" md:text-start ">
              <h2 class="text-4xl mb-10 lg:text-5xl md:text-5xl font-barlow ">
                <span className="text-4xl font-extrabold lg:text-5xl md:text-5xl text-green dark:text-green font-barlow">
                  Contact{" "}
                </span>{" "}
               <span className="text-MetallicBlue"> us</span>
              </h2>
              <p class="flex px-10 md:px-0  md:justify-start  text-base font-barlow p-4">
              The Fayda IDMS is the central Foundational ID Management 
                    system that integrates with many other external Identification 
                    System (ABIS) alternatives, and card printing services.The Fayda IDMS is the central Foundational ID Management 
                    system that integrates with many other external Identification 
                    System (ABIS) alternatives, and card printing services.The Fayda IDMS is the central Foundational ID Management 
                    system that integrates with many other external Identification 
                    System (ABIS) alternatives, and card printing services
              </p>
            </div>
         <div className="mt-6 ">
            <form className="">
            <div className="flex gap-5 mb-4  justify-center items-center ">
                <div className="w-2/5 ">
                  <label class="text-base  font-normal font-poppins text-black/20 ">Company Name</label>
                  <input 
                    class="block p-2 px-3 w-full md:placeholder:text-left text-base text-black  bg-lavender/30 focus:ring-blue-500 "
                    required
                  />
                </div>
                <div className="w-2/5">
                  <label class=" text-base font-normal font-poppins text-black/20  ">
                    Name
                  </label>
                  <input
                    class=" block w-full p-2  px-3 md:placeholder:text-left text-base text-black   bg-lavender/30  focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5 mb-4 justify-center items-center">
                <div className="w-2/5 ">
                  <label class="text-base  font-normal font-poppins text-black/20">Email Address</label>
                  <input
                    class="block p-2 px-3 w-full md:placeholder:text-left text-base text-black   bg-lavender/30  focus:ring-blue-500 "
                    required
                  />
                </div>
                <div className="w-2/5">
                  <label class=" text-base font-normal font-poppins text-black/20  mx-10">
                    Phone Number
                  </label>
                  <input
                    class=" block w-full p-2  px-3 md:placeholder:text-left text-base text-black  bg-lavender/30  focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <label class="text-base font-medium font-poppins text-black/20 ">Comments</label>
              <div class="mb-4 ">
               

                <textarea
                  rows="4"
                  class="mt-2 p-4 w-4/5 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  bg-lavender/30 "
                ></textarea>
              </div>
              <button
                type="submit"
                class=" mt-2 px-2 py-2  rounded-full  lg:w-[10%] bg-[#21cfac] text-white font-normal text-md leading-tight  rounded-base shadow-md ">
                Send Message
              </button>
            </form>
          </div>
        </div>
    )
}

export default Form;
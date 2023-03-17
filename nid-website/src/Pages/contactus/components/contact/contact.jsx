import React from 'react'


const Contact = () => {
   {/* for large screen */}
  return (
   
    <div className='hidden sm:inline '>
   <footer className='bg-white   lg:px-2 md:px-2'>
      <div class="grid grid-cols-1 gap-1   ">
        <div className="p-6">
        
          <div className= "">
           
            <div className="text-center md:text-start ">
              <div className='text-5xl'>
              <h1 class="text-28xl lg:text-5xl md:text-5xl font-barlow  text-MetallicBlue dark:text-">
                <span className="text-100xl font-extrabold lg:text-5xl md:text-5xl text-green dark:text-green t">
                  Contact <span className='text-MetallicBlue font-light'>US</span>
                </span>
               
              </h1>
              </div>
             
              <p class="flex px-10 md:px-0  md:justify-start  my-8 text-base  text-black font-barlow ">
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
              </p>
            </div>

        
          </div>

          {/* Contact Form */}
          <div className="mt-6 ">
            <form className=' '>
              <div className="flex gap-2 ">
                <div className="w-2/4 ">
                  <label class="text-base  font-normal text-black/20"> Company Name</label>
                  <input
                    class="block p-3 px-3 w-full md:placeholder:text-left text-base text-black shadow-md  bg-lavender/30 focus:ring-blue-500 "
                    required
                  />
                </div>
                <div className="w-2/4">
                  <label class=" text-base font-normal text-black/20 ">
                  Name
                  </label>
                  <input
                    class=" block w-full p-3  px-3 md:placeholder:text-left text-base text-black shadow-md   bg-lavender/30  focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 my-4">
                <div className="w-2/4 ">
                  <label class="text-base  font-normal text-black/20"> Email Address</label>
                  <input
                    class="block p-3 px-3 w-full md:placeholder:text-left text-base text-black shadow-md  bg-lavender/30 focus:ring-blue-500 "
                    required
                  />
                </div>
                <div className="w-2/4 gap-2">
                  <label class=" text-base font-normal text-black/20 ">
               Phone Number
                  </label>
                  <input
                    class=" block w-full p-3  px-3 md:placeholder:text-left text-base text-black shadow-md  bg-lavender/30  focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div class="mt-4">
                <label class="text-base font-medium text-black/20">Comments</label>

              
              </div>
              <div>  <textarea
                  rows="4" 
                  class="mt-2 p-4 w-[100%] text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  bg-lavender/30 "
                ></textarea></div>
            <button className="h-12 text-base m-1 text-white  w-[8%] md:w-[20%] lg:w-[16%] bg-green rounded-full my-8 hover:bg-[#083247]">
         Send Message
        </button>
            </form>
          </div>

        </div>

     
      </div>
    </footer>
    </div>
  )
}
export default Contact;

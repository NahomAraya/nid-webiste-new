import React from 'react'


const Contactmobile = () => {
       {/* for small screen */}
  return (
    <div className='hidden max-md:inline '>
 <div class="max-w-screen-md mx-auto p-5">
 <div className="text-center md:text-start ">
              <h2 class="text-4xl lg:text-5xl md:text-5xl font-barlow  text-black dark:text-">
                <span className="text-4xl font-extrabold lg:text-5xl md:text-5xl text-green dark:text-green font-barlow">
                  Contact{" "}
                </span>{" "}
                us
              </h2>
              <p class="flex px-10 md:px-0  md:justify-start  text-base  text-black font-barlow">
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            The Fyada IDMS is the centeral Foundational ID Management system that integrates wit many other external 
            
              </p>
            </div>

  
  <form class="w-full">
  <div class="flex flex-wrap -mx-3 mb-6 font-barlow">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs   text-black mb-2" for="grid-first-name">
      Company Name
      </label>
      <input class="block p-1 px-3 w-full md:placeholder:text-left text-base text-black shadow-md  bg-lavender focus:ring-blue-500 " id="grid-first-name" type="text" placeholder="Company Name"></input>
    
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="block p-1 px-3 w-full md:placeholder:text-left text-base text-black shadow-md  bg-lavender focus:ring-blue-500 " id="grid-first-name" type="text" placeholder="Company Name"></input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="block p-1 px-3 w-full md:placeholder:text-left text-base text-black shadow-md  bg-lavender focus:ring-blue-500 " id="grid-first-name" type="text" placeholder="Company Name"></input>
    </div>
  </div>
    
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Your Message
      </label>
      <textarea  className=' rows="4" 
                  class="mt-2 p-4 w-[100%] text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  bg-lavender "'>
        
      </textarea>
    </div>
    <div class="flex justify-between w-full px-3">
      <div class="md:flex md:items-center">
        <label class="block text-gray-500 font-bold">
         
          <span class="text-sm">
          <button
                type="submit"
                class="inline-block mt-2 px-2 py-2   w-[200%] lg:w-[10%] bg-[#21cfac] text-white font-normal text-md leading-tight  rounded-base shadow-md hover:bg-[#083247]  hover:shadow-lg focus:bg-[#3a6c7d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#304f55] active:shadow-lg transition duration-150 ease-in-out rounded-full"
              >
                Send Message
              </button>
          </span>
        </label>
      </div>
     
    </div>
      
  </div>
    
</form>
</div>





    </div>
  )
}
export default Contactmobile ;

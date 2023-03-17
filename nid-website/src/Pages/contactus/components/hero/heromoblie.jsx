import React from 'react';
import SearchIcon from '@mui/icons-material/Search';



const Heromobile = () => {
  return (
 <>

<div className='hidden max-md:inline'>
  <div className="p-6  flex justify-center items-center  bg-footer bg-cover bg-center">
    
    <div className='flex flex-col justify-center items-center mb-12'>
    <h1 className=" self-start ml-2 lg:px-24  text-xl lg:text-5xl  text-white font-barlow font-light">
                Welcome to the
      </h1>
      <h1 className=" lg:px-24 py-2 text-xl lg:text-5xl  text-white font-barlow font-light">
        <span className="text-[#12d2ad] px-2  font-bold">NID online</span>helpdesk</h1>
             
    </div>
    <div className='flex items-center w-[30%]'>
                <input className='block w-full rounded-3xl  text-lg text-gray-500 font-barlow placeholder-gray-400 text-center bg-white appearance-none  mt-28' placeholder='Search your questions....'/>
                <SearchIcon className='-ml-9 mt-28'/>
                
      </div>    
            </div>
     </div> 
</>

//     <div className='grid grid-rows-2 gap-36 bg-right-bottom bg-cover h-[40vh] grid-col-1 bg-green bg-footer'>
    
//       {/* <div class="grid grid-cols-1 gap-16 px-6  py-60 bg-green">

//       </div> */}

// <div className='h-[50%]'></div>



//       <div className="flex pl-10 text-5xl md:justify-start font-barlow">
//                 <h1 className="pr-2 mb-0 text-white"> Who</h1>
//                 <h1 className=" pb-7 text-green"> We </h1>
//                 <h1 className='mb-0 ml-2 text-white ' > are </h1>
//               </div>
//     </div>
   
  )
}

export default Heromobile;

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (

    <>

    <div className="  antialiased bg-gray-900 text-gray font-sans   bg-faq  bg-cover   ">
      <div className="relative bg-lightsteelblue/70 p-28 ">
    <Fragment className="">
      {/* 1st card */}
      <div className=" p-20 w-[70%]  mx-56 bg-MetallicBlue/70 shadow-md hover:shadow-xl rounded-lg overflow-hidden my-4  " onClick={handleOpen} variant="gradient  ">
      <div class="relative  overflow-hidden pt-20 pb-10">
         <h1 className='text-white text-4xl font-barlow font-semibold '>FAQ -3</h1>
         <div><p className='text-white/100'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro aliquam ullam eum quae? Aliquam consectetur debitis, sunt, ratione at omnis ut sed distinctio magnam cumque tempora, quae a eum. The Fayda IDMS is the centeral Foundation ID Management system?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro aliquam ullam eum quae? Aliquam consectetur debitis, sunt, ratione at omnis ut sed distinctio magnam cumque tempora, quae a eum. The Fayda IDMS is the centeral Foundation ID Management system?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro aliquam ullam eum quae? Aliquam consectetur debitis, sunt, ratione at omnis ut sed distinctio magnam cumque tempora, quae a eum. The Fayda IDMS is the centeral Foundation ID Management <br></br>system?
         </p></div>

        
        </div>
        <button
                type="submit"
                class=" mt-2 px-2 py-2  rounded-full  lg:w-[10%] bg-[#21cfac] text-white font-normal text-md leading-tight  rounded-base shadow-md ">
              Answare
              </button>
      </div>


      {/* 2.open dialog */}
      <Dialog open={open} handler={handleOpen} className=" font-sans  h-70  bg-faq  bg-cover  w-full h-400 p-28 ">
      <div className="relative bg-lightsteelblue/70 p-48  ">
        <DialogHeader > </DialogHeader>
     

        <DialogBody divider>
        <div className=" p-20 w-[70%]  mx-56 bg-MetallicBlue/70 shadow-md hover:shadow-xl rounded-lg overflow-hidden  " onClick={handleOpen} variant="gradient  ">
      <div class="">
         <h1 className='text-white text-4xl font-barlow font-semibold '>FAQ -3</h1>
         <div><p className='text-white/100'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro aliquam ullam eum quae? Aliquam consectetur debitis, sunt, ratione at omnis ut sed distinctio magnam cumque tempora, quae a eum. The Fayda IDMS is the centeral Foundation ID Management system?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro aliquam ullam eum quae? Aliquam consectetur debitis, sunt, ratione at omnis ut sed distinctio magnam cumque tempora, quae a eum. The Fayda IDMS is the centeral Foundation ID Management system?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro aliquam ullam eum quae? Aliquam consectetur debitis, sunt, ratione at omnis ut sed distinctio magnam cumque tempora, quae a eum. The Fayda IDMS is the centeral Foundation ID Management <br></br>system?
         </p></div>

        
        </div>
        <button
                type="submit"    onClick={handleOpen}
                class=" mt-2 px-2 py-2  rounded-full  lg:w-[10%] bg-[#21cfac] text-white font-normal text-md leading-tight  rounded-base shadow-md ">
              Back
              </button>
      </div>
        
        </DialogBody>
        </div>
        <DialogFooter>

        <button
                type="submit"    onClick={handleOpen}
                class=" p-8 rounded-full  lg:w-[100%] bg-[#21cfac] text-white font-normal text-md leading-tight  rounded-base shadow-md ">
              Back
              </button>
       
         {/* <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
  </Button>*/}
        </DialogFooter>
      </Dialog>
    </Fragment>
    </div>
    </div>
    </>
  );
}
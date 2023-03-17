import React from "react";
import Sidebar from "../sidebar/sidebar";

const SidebarChild = ({data})=> {
    return(
        <>
            <div className="flex">
             { data}

            </div>
        </>
    )

}
export default SidebarChild;
import axios from "axios";


export const GET_RESOURCES_LIST = "GET_RESOURCES_LIST";

// export const ADD_ABOUT = "ADD_ABOUT";
// export const DELETE_ABOUT = "DELETE_ABOUT";
// export const UPDATE_ABOUT = "UPDATE_ABOUT";

let tokenStr = "token 7b50c3f4c5fc2e2:805029f0e575827"
const headers = {
 
  "Accept": "application/json",
  "Content-Type": "application/json",
}

export const  getResourcesList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/Resources?q=proxy&fields=["title", "document", "category", "title_amh", "description_amh"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_RESOURCES_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };

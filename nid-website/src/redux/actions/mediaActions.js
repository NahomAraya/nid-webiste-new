import axios from "axios";
import i18next from 'i18next';

export const GET_EVENTS_LIST = "GET_EVENTS_LIST";
export const GET_SOCIALS_LIST = "GET_SOCIALS_LIST";
export const GET_GALLERY_LIST = "GET_GALLERY_LIST";
// export const ADD_ABOUT = "ADD_ABOUT";
// export const DELETE_ABOUT = "DELETE_ABOUT";
// export const UPDATE_ABOUT = "UPDATE_ABOUT";

let tokenStr = "token 7b50c3f4c5fc2e2:805029f0e575827"
const headers = {
 
  "Accept": "application/json",
  "Content-Type": "application/json",
}
const param = {
  "fields" : '["title", "description"]'
}

export const  getEventsList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/Events?q=proxy&fields=["title", "description", "date", "type", "title_amh", "description_amh" ]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_EVENTS_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };

  export const  getSocialsList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/Socials?q=proxy&fields=["title", "image", "link","action"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_SOCIALS_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };

  export const  getGalleryList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/Gallery?q=proxy&fields=["video_url"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_GALLERY_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };
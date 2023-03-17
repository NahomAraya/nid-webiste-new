import axios from "axios";


export const GET_ABOUT_LIST = "GET_ABOUT_LIST";
export const GET_HISTORY_LIST = "GET_HISTORY_LIST";
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

export const  getAboutList = () => async (dispatch) => {
 
    try{
    await axios.get(`/api/resource/About?q=proxy&fields=["title", "description", "title_amh", "description_amh"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_ABOUT_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  }
  ;

  export const  getHistoryList = () => async (dispatch) => {
 
    try{
    await axios.get(`/api/resource/History?q=proxy&fields=["date","event","year", "date_amh" , "event_amh", "year_amh"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_HISTORY_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  }
  ;


  
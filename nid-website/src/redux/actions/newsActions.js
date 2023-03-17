import axios from "axios";
import i18next from 'i18next';

export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const GET_TOP_NEWS = "GET_TOP_NEWS";
export const GET_TEST_LIST = "GET_TEST_LIST";
export const GET_FAQ_LIST = "GET_FAQ_LIST";
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


export const  getTopNewsList = () => async (dispatch) => {
  try{
  await axios.get(`/api/resource/TopNews?q=proxy&fields=["title", "image", "description","date","type", "title_amh", "description_amh", "sub_title", "sub_title_amh"]`,
  {
    headers: headers
  },
 
  )
  
  .then(response => 
    
    dispatch(
    {
      type: GET_TOP_NEWS,
      payload: response.data
    }
  ))
 
  console.log("Sucess");

 
}
catch (err) {
  console.log(err)
}
};


export const  getNewsList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/News?q=proxy&fields=["title", "image", "description","date","type", "title_amh", "description_amh",  "sub_title", "sub_title_amh"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_NEWS_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };

  export const  getTestList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/Testimonials?q=proxy&fields=["description","client_name","address", "description_amh", "clientname_amh", "address_amh"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_TEST_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };
  export const  getFaqList = () => async (dispatch) => {
    try{
    await axios.get(`/api/resource/FAQ?q=proxy&fields=["question","answer", "question_amh", "answer_amh", "type"]`,
    {
      headers: headers
    },
   
    )
    
    .then(response => 
      
      dispatch(
      {
        type: GET_FAQ_LIST,
        payload: response.data
      }
    ))
   
    console.log("Sucess");

   
  }
  catch (err) {
    console.log(err)
  }
  };



  
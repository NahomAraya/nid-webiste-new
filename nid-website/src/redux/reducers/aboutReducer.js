import { GET_ABOUT_LIST } from "../actions/aboutActions";
import { GET_HISTORY_LIST } from "../actions/aboutActions";

 const initialState = {
    aboutList: [],
    historyList: [],
 }

 const aboutReducer = (state = initialState, action) => {
   
    console.log(action.type);
    switch(action.type){
    
        case GET_ABOUT_LIST:  
        return{
            ...state,
           aboutList: action.payload
          };
         case GET_HISTORY_LIST:
            return{
               ...state,
           historyList: action.payload
            };
          default: 
            return state;
    }
 };
 export default aboutReducer;
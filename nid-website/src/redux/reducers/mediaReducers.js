import { GET_EVENTS_LIST, GET_GALLERY_LIST, GET_SOCIALS_LIST } from "../actions";

 const initialState = {
    eventList: [],
    socialList: [],
    galleriesList: []
 }

 const mediaReducer = (state = initialState, action) => {
   
    console.log(action.type);
    switch(action.type){
    
         case GET_EVENTS_LIST:  
            return{
            ...state,
           eventList: action.payload
          };
         case GET_SOCIALS_LIST:  
            return{
            ...state,
           socialList: action.payload
          };
         case GET_GALLERY_LIST:
            return{
            ...state,
           galleriesList: action.payload
            };
          default: 
            return state;
    }
 };
 export default mediaReducer;
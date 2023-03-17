import { GET_NEWS_LIST, GET_TEST_LIST,GET_FAQ_LIST, GET_TOP_NEWS } from "../actions";

 const initialState = {
    newsList: [],
    testList: [],
    faqList: [],
    topNews: []
 }

 const newsReducer = (state = initialState, action) => {
   
    console.log(action.type);
    switch(action.type){
    
        case GET_NEWS_LIST:  
        return{
            ...state,
           newsList: action.payload
          };
         case GET_TOP_NEWS:
            return{
               ...state,
              topNews: action.payload
             };


         case GET_TEST_LIST:
            return{
               ...state,
              testList: action.payload
             };

         case GET_FAQ_LIST:
            return{
               ...state,
              faqList: action.payload
             };
         
          default: 
            return state;
    }
 };
 export default newsReducer;
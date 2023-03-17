import { GET_RESOURCES_LIST } from "../actions/resourccesActions";

 const initialState = {
    resourceList: []
 }

 const resourcesReducer = (state = initialState, action) => {
   
    console.log(action.type);
    switch(action.type){
    
        case GET_RESOURCES_LIST:  
        return{
            ...state,
           resourceList: action.payload
          };
          default: 
            return state;
    }
 };
 export default resourcesReducer;
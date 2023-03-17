import aboutReducer from "./aboutReducer";
import newsReducer from "./newsReducer";
import resourcesReducer from "./resourcesReducer";
import mediaReducer from "./mediaReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    aboutReducer,
    newsReducer,
    resourcesReducer,
    mediaReducer

})

export default rootReducer;
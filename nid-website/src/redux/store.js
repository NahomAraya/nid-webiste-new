import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default createStore(rootReducer, composeWithDevTools(middleware));

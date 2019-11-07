import { combineReducers } from "redux";

import tweets from "./tweetsReducer"
import userA from "./userReducer"
 

export default combineReducers({
 tweets, 
 userA  // These become ACTUAL name
});
//Combune reducers
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({authReducer, menuReducer, loginReducer});

export default rootReducer
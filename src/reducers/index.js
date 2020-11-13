import LoginReducer from "./LoginReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
        loginStore: LoginReducer
});

export default allReducers;
import {combineReducers} from "redux";
import {coursesReducer} from "./coursesReducer";
import {usersReducer} from "./usersReducers";

export const reducers = combineReducers({
    courses: coursesReducer,
    user: usersReducer,
});
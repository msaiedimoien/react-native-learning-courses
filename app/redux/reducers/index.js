import {combineReducers} from "@reduxjs/toolkit";
import {coursesReducer} from "./coursesReducer";
import {usersReducers} from "./usersReducers";

export const reducers = combineReducers({
    courses: coursesReducer,
    user: usersReducers,
});
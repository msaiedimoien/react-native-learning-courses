import {createContext} from "react";

const CoursesContext = createContext({
    courses: [],
    loadind: true,
});

export default CoursesContext;
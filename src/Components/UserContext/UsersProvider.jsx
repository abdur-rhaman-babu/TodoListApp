/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import { useReducer } from "react";
import { initialState } from "../UseReducer/UseReducer.js";
import {reducer} from '../UseReducer/UseReducer.js';
import { TasksContext } from "../Context/TasksContext.jsx";

const UserProvider = ({children})=>{
const [state,dispatch] = useReducer(reducer,initialState)

return(
    <TasksContext.Provider value={{state,dispatch}}>
    {children}
    </TasksContext.Provider>
)
}

export default UserProvider;

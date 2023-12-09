/* eslint-disable no-undef */
import { useContext } from "react"
import { TasksContext } from "../Context/TasksContext";
const useUserContext = ()=>{
    return useContext(TasksContext)
}
export default useUserContext;


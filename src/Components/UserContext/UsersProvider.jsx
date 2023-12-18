/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import { useEffect, useReducer } from "react";
import { initialState } from "../UseReducer/UseReducer.js";
import {reducer} from '../UseReducer/UseReducer.js';
import { TasksContext } from "../Context/TasksContext.jsx";

const UserProvider = ({children})=>{
const [state,dispatch] = useReducer(reducer,initialState)
2

 // setLocal Storage
 useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state]);


const allTask = {
    todos: state.todos,
    addTodo : (newTodo)=>{
        dispatch({type:'ADD_TODO',payload:newTodo})
    },

    deleteTodo : (id)=>{
        dispatch({type:'DELETE_TODO',payload:id})
    },

    updateTodo : (id)=>{
        dispatch({type:'UPDATE_TODO',payload:id})
    },

    completeTodo : (id)=>{
        dispatch({type:'COMPLETE_TODO',payload:id})
    }
}

return(
    <TasksContext.Provider value={allTask}>
    {children}
    </TasksContext.Provider>
)
}

export default UserProvider;

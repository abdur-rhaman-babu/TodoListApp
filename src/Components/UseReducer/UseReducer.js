/* eslint-disable no-case-declarations */

import getDatafromLs from '../GetDataFromLs'

// create initialState
export const initialState = {todos:getDatafromLs()}

// Create reducer Function
export const  reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
        return {
            ...state,
            todos:[action.payload, ...state.todos]
        }

           // delete todo
           case 'COMPLETE_TODO':
            const completeTodo = state.todos.map((todo)=>todo.id === action.payload)
            return {
                ...state,
                todos: completeTodo
               
            }
        
        // delete todo
        case 'DELETE_TODO':
        const filterTodo = state.todos.filter((todo)=>todo.id !==action.payload)
        
        return {
            ...state,
            todos:filterTodo
        }

        // Update_todo
        // case 'UPDATE_TODO':
        // const updateTodo = state.todos.map((todo)=>{

        //     if(todo.id === action.payload.id){
        //         return {
        //             ...todo, task: action.payload.task
        //         }
        //     }
        //     return todo
        // })

        // return {
        //     ...state,
        //     todos:updateTodo
        // }
        default: return state
    }
}

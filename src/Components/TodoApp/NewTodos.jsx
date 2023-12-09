import { useState } from "react";
import useUserContext from "../Hook/UseUserContext";

const NewTodos = () => {
    const {dispatch} = useUserContext()
    const [todo,setTodo] = useState('')
   
    const todoListHandaler = (e)=>{
        e.preventDefault()

        if(todo.trim() === ''){
         return todo
        }

        const newTodos ={
            id:Date.now(),
            task:todo
        }
        
        setTodo('')
        dispatch({type:'ADD_TODO', payload:newTodos})
    }

    return (
        <div className="submitTodo">
            <form onSubmit={todoListHandaler}>
            <input type="text" 
            value={todo} required
            onChange={(e)=>setTodo(e.target.value)} 
            placeholder="Enter your task" /> 
            <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodos;
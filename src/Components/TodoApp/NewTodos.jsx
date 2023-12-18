import { useState } from "react";
import useUserContext from "../Hook/UseUserContext";
import { IoIosAddCircle } from "react-icons/io";
import { RiTodoLine } from "react-icons/ri";
import { RiCalendarTodoFill } from "react-icons/ri";

const NewTodos = () => {
    const {addTodo} = useUserContext()
    const [todo,setTodo] = useState('')
   
    const todoListHandaler = (e)=>{
        e.preventDefault()


        if(todo.trim() === ''){
            alert('write something')
         return todo
        }

        const newTodo ={
            id:Date.now(),
            task:todo
        }

        addTodo(newTodo)
        setTodo('')
        // dispatch({type:'ADD_TODO', payload:newTodo})
    }

    return (
        <>
        <div className="heading-task">
        <RiTodoLine />
        <h2 style={{textAlign:"center",marginBottom:'10px'}}>Task App</h2>
        <RiCalendarTodoFill />
        </div>
        <div className="submitTodo">
            <form onSubmit={todoListHandaler} >
            
            <input type="text" 
            value={todo} required
            onChange={(e)=>setTodo(e.target.value)} 
            placeholder="Enter your task" /> 

            <div className="submit-btn">
            <button type="submit"><IoIosAddCircle className="sub-logo" />Add Task</button>
            </div>
            </form>
        </div>

        </>
    );
};

export default NewTodos;
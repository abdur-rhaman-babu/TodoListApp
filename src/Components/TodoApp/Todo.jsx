/* eslint-disable react/prop-types */

import { useState } from "react";
import useUserContext from "../Hook/UseUserContext";
import { FaSave } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";


  const Todo = ({ todo}) => {
  const { todos,deleteTodo } = useUserContext();
  const { task, id } = todo;

  // All States is here
  const [isEdit, setIsEdit] = useState(false);
  const [complete, setComplete] = useState(false);
  const [updatetext, setUpdatedText] = useState('');

  // delete todo
  const deleteTodoHandaler = (id) => {
    deleteTodo(id)
  };



  // Edit todo
  const editTodoHandaler = (id) => {
    const findTodo = todos.find((editTodo)=>editTodo.id ===id)
    setIsEdit(true);
    setUpdatedText(findTodo.task)
  };

// updateTodo
  const updateTodoHandaler = (id) => {
    
    if(updatetext.trim()===''){
      alert('write text')
      return updatetext
    }

    setIsEdit(false);
    const findTodo = todos.find((editTodo)=>editTodo.id ===id)
    findTodo.task = updatetext
  };




  return (
    <>
    <div style={{ display: "flex",alignItems:'center' }} className="todoStyle">
      <div className="todoStyleLeft">
      {isEdit ? null : <input
          type="checkbox"
          onChange={(e) => setComplete(e.target.checked)}
          checked={complete}
         />}
      
        <div
          style={{
            textDecoration: complete && "line-through",
            color: complete && "#eb2f06",
          }}
        >

          {isEdit ? (
            <input className="updateInput"
              type="text"
              value={updatetext}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
          ) : (
            <div className="singleTodo">
              <li> {task}</li>
            </div>
          )}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}
      >

        <i className="edit-btn" onClick={()=>isEdit ? updateTodoHandaler(id) : editTodoHandaler(id)}>
          
          {isEdit ? <FaSave style={{color:'#227093'}} className="sub-logo" /> : complete ? null:<FaEdit className="sub-logo"/> }   
        </i>


        <i className="btn_danger" 
        onClick={() => deleteTodoHandaler(id)}>
        {isEdit? null : <RiDeleteBack2Fill className="sub-logo"/>}
        </i>


      </div>
    </div>    
    </>

  );
};

export default Todo;



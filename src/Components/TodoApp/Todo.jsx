/* eslint-disable react/prop-types */

import { useState } from "react";
import useUserContext from "../Hook/UseUserContext";
import { FaSave } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";


const Todo = ({ todo, edit: { isEdit, setIsEdit } }) => {
  const { dispatch } = useUserContext();
  const { task, id } = todo;

  const [complete, setComplete] = useState(false);
  const [updatetext, setUpdatedText] = useState(task);

  // delete todo
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  // Edit todo
  const editTodoHandaler = () => {
    setIsEdit(id);
  };

  const updateTodoHandaler = () => {
    setIsEdit(null);
    dispatch({ type: "UPDATE_TODO", payload: { id, task: updatetext } });
  };

  return (
    <>
    <div style={{ display: "flex",alignItems:'center' }} className="todoStyle">
      <div className="todoStyleLeft">
      {isEdit === id ? null : <input
          type="checkbox"
          onChange={(e) => setComplete(e.target.checked)}
          checked={complete}
         />}
      
        <div
          style={{
            textDecoration: complete && "line-through",
            color: complete && "#16FF00",
          }}
        >
          {isEdit === id ? (
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

        <i className="edit-btn" onClick={isEdit === id ? updateTodoHandaler : editTodoHandaler}>
          {isEdit === id ? <FaSave style={{color:'#227093'}} className="sub-logo" /> : complete ? null:<FaEdit className="sub-logo"/> }   
        </i>

        <i className="btn_danger" onClick={() => deleteTodo(id)}>
        {isEdit === id ? null : <RiDeleteBack2Fill className="sub-logo"/>}
        </i>
      </div>
    </div>    
    </>

  );
};

export default Todo;



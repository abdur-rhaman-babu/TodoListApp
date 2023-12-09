/* eslint-disable react/prop-types */

import { useState } from "react";
import useUserContext from "../Hook/UseUserContext";
import { AiFillDelete } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


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
            color: complete && "red",
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
            
              <li style={{ listStyle: "none", textAlign: "left", }}>
                {task}</li>
    
            </div>
          )}
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}
      >
        <i onClick={isEdit === id ? updateTodoHandaler : editTodoHandaler}>
          {isEdit === id ? <FaSave /> : complete ? null:<FaEdit /> }
         
        </i>
        <i onClick={() => deleteTodo(id)}>
        {isEdit === id ? null : <AiFillDelete />}
        
        </i>
      </div>
    </div>
  );
};

export default Todo;



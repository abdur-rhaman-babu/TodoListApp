
import { useEffect, useState } from "react";
import useUserContext from "../Hook/UseUserContext";
import Todo from "./Todo";
// eslint-disable-next-line no-unused-vars

const Todos = () => {
    const {state} = useUserContext()
    const [isEdit, setIsEdit] = useState(null);

    // setLocal Storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }, [state.todos]);


    return (
        <section>
            <div className="mainContent">
            {
                state.todos &&
                state.todos.map((todo)=><Todo key={todo.id} todo={todo}
                edit={{isEdit, setIsEdit}}/>)
            }
           
            </div>
        </section>
        
    );
};

export default Todos;

import useUserContext from "../Hook/UseUserContext";
import Todo from "./Todo";
// eslint-disable-next-line no-unused-vars

const Todos = () => {
    const {todos} = useUserContext()
  
    return (
        <section>
            <div className="mainContent">
            {
                todos &&
                todos.map((todo)=><Todo key={todo.id} todo={todo}
             />)
            }
            </div>
        </section>
        
    );
};

export default Todos;
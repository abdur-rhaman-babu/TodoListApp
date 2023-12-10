import NewTodos from "../Components/TodoApp/NewTodos";
import Todos from "../Components/TodoApp/Todos";
import UsersProvider from "../Components/UserContext/UsersProvider";
import "../Components/TodoApp/Todo.css";
const App = () => {
  return (
    <UsersProvider>
      <div className="container">
        
        <div className="mainTodo">
          <NewTodos />
          <Todos />
        </div>
      </div>
    </UsersProvider>
  );
};

export default App;

import "./style.css"
import NewTodo from "../NewTodo/NewTodo"
import Todo from "../Todo/Todo";
import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const handleTodoDelete = (id)=>{
       const filterTodo = todos.filter(todo => todo.id !== id);
       setTodos(filterTodo)
    }
    return (
        <div className="container">
            <div>
                <h2 className="todo-app-title">Todo App</h2>
                <div className="todos">
                <NewTodo addTodos={setTodos}/>
                <div className={`${todos.length > 0 ? "todo-container": ""}`}>
                    {
                        todos?.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={handleTodoDelete}/>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Todos;
import "./style.css"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const NewTodo = ({addTodos}) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("")
    const handleAddTodoSubmit = e =>{
        e.preventDefault();
        console.log(title, description)
        addTodos(prevTodos => [...prevTodos,{id: uuidv4(), title, description}])
        setTitle("")
        setDescription("")
    }
    return (
        <div className="newtodo-container">
            <h2>Add Your Todo</h2>
            <form onSubmit={handleAddTodoSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}/>
                </div>
                <button className="add-todo-btn" type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;
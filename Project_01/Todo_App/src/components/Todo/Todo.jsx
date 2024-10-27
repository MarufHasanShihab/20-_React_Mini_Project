import { FaRegTrashCan } from "react-icons/fa6";
import "./style.css"

const Todo = ({todo,deleteTodo}) => {
    const {id,title, description} = todo || {};
    return (
        <div>
            <div className="todo">
                <div className="todo-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <button className="trash-button" onClick={()=>deleteTodo(id)}>
                    <FaRegTrashCan/>
                </button>
            </div>
        </div>
    );
};

export default Todo;
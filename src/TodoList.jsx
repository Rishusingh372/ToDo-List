import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './TodoList.css'; // Import the CSS file

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <div className="todo-container">
            <input
                className="todo-input"
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button className="todo-button" onClick={addNewTask}>Add Task</button>
            <hr />
            <h4 className="TaskName">Tasks Todo</h4>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li className="todo-item" key={todo.id}>
                        <span>{todo.task}</span>
                        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
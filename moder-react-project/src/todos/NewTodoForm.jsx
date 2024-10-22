import { useState } from "react";

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="new-todo-form">
            <input className="new-todo-input" type="text" name="todo" id="todo" placeholder="Type your new todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  style={{height: '20px', width: '400px', padding: '10px', borderRadius: '10px', marginRight: '10px'}}/>
            <button type="submit">Create Todo</button>
        </div>
    );
}

export default NewTodoForm;
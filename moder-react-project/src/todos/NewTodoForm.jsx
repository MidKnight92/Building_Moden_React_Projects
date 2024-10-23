import { useState } from "react";
import {useDispatch} from'react-redux'
import { todoAdded } from "../features/todos/todosSlice";

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const handleClick = () => {
        if (inputValue.trim()) {
          dispatch(todoAdded({text: inputValue}));
          setInputValue('');  
        }
    }
    return (
        <div style={{marginBottom: '40px'}}>
            <input type="text" name="todo" id="todo" placeholder="Type your new todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  style={{height: '20px', width: '400px', padding: '10px', borderRadius: '10px', marginRight: '10px'}}/>
            <button type="button" onClick={handleClick}>Create Todo</button>
        </div>
    );
}

export default NewTodoForm;
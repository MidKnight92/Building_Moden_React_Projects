import { useDispatch } from "react-redux";
import { todoRemove, todoToggled } from "../features/todos/todosSlice";

const TodoListItem = ({todo, index}) => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
            <h3 style={{margin: 0, flexGrow: 1}}>Todo {index} : {todo.text}</h3>
            <div style={{display: 'flex', gap: '10px'}}>
                <button type="button" style={todo.completed ? { background: 'blue'} : { background: 'green'}} onClick={()=> dispatch(todoToggled({id: todo.id}))}>{todo.completed ? 'In progress' : 'Completed'}</button>
                <button type="button" style={{background: 'red', marginLeft: '25px'}} onClick={()=> dispatch(todoRemove({id: todo.id}))}>Remove</button>  
            </div>
        
        </div>
    );
}

export default TodoListItem;
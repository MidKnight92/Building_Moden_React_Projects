const TodoListItem = ({todo}) => {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div>
               <button className="completed-button" type="button">Mark as completed</button>
                <button className="remove-button" type="button">Remove</button>  
            </div>
        </div>
    );
}

export default TodoListItem;
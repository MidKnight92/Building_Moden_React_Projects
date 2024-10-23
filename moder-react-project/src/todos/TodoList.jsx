import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    return (
        <div>
            <NewTodoForm />
            {todos?.map((todo, index) => <TodoListItem key={todo.id} todo={todo} index={index} />)}
        </div>
    );
}

export default TodoList;
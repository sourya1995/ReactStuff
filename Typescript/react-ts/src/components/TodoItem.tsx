import classes from './Todoitem.module.css';

const TodoItem: React.FC<{text: string; onRemoveTodo: (event: React.MouseEvent) => void }> = (props) => {
    return <li onClick={props.onRemoveTodo}>{props.text}</li>
}

export default TodoItem;
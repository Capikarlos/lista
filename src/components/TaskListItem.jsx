export default function TaskListItem({ task, onRemove }) {
    return (
        <li className="task-item">
            <span>{task.name} - {task.duration} min</span>
            <button onClick={onRemove}>✖</button>
        </li>
    );
}
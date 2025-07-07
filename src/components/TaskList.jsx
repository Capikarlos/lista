import TaskListItem from "./TaskListItem";

export default function TaskList({ tasks, onRemove }) {
    if (!tasks.length) return <p className="empty">No hay tareas aún.</p>;
    return (
        <ul className="task-list">
            {tasks.map((t, i) => (
                <TaskListItem key={i} task={t} onRemove={() => onRemove(i)} />
            ))}
        </ul>
    );
}

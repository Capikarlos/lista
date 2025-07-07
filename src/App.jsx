import React, { useState, useEffect, useMemo } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TotalTime from './components/TotalTime';
import './index.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const totalTime = useMemo(
    () => tasks.reduce((sum, t) => sum + t.duration, 0),
    [tasks]
  );

  useEffect(() => {
    document.title = `Total: ${totalTime} min`;
  }, [totalTime]);

  const addTask = task => setTasks(prev => [...prev, task]);
  const removeTask = idx =>
    setTasks(prev => prev.filter((_, i) => i !== idx));

  return (
    <main className="app">
      <h1>Contador de Tareas</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} />
      <TotalTime total={totalTime} />
    </main>
  );
}

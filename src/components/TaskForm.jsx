import { useState } from "react";

export default function TaskForm({ onAdd }) {
    const [name, setName] = useState("");
    const [minutes, setMinutes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = name.trim();
        const dur = parseInt(minutes, 10);
        if (!trimmed || isNaN(dur) || dur <= 0) return;
        onAdd({ name: trimmed, duration: dur });
        setName("");
        setMinutes("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre de tarea"
            />
            <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="Minutos"
                min="1"
            />
            <button disabled={!name.trim() || !minutes}>Agregar</button>
        </form>
    );
}

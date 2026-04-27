import { useState } from 'react';

export const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  return (
    <div className="flex gap-2">
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 flex-1"/>
      <button onClick={() => onAdd({ id: Date.now(), title, status: 'Pending' })} className="bg-green-500 p-2 text-white">Add</button>
    </div>
  );
};
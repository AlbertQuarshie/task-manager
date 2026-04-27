import { useState } from 'react';

export const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty tasks
    
    onAdd(title); // Pass only the title string to the parent
    setTitle(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};
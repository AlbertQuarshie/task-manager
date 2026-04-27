import React from 'react';

// Requirement: React.memo prevents unnecessary re-renders
const TaskItem = React.memo(({ task, onToggle, onDelete }) => {
  console.log(`Rendering Item: ${task.title}`);
  return (
    <div className="flex items-center justify-between p-4 border rounded shadow-sm bg-white">
      <div>
        <h3 className={task.status === 'Completed' ? 'line-through text-gray-400' : 'font-semibold'}>
          {task.title}
        </h3>
        <p className="text-xs text-blue-600 font-medium">{task.status}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onToggle(task.id)} className="text-sm border px-2 py-1 rounded">Status</button>
        <button onClick={() => onDelete(task.id)} className="text-sm text-red-500">Delete</button>
      </div>
    </div>
  );
});

export default TaskItem;
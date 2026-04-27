import React, { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../redux/taskSlice';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

const Dashboard = () => {
  const [filter, setFilter] = useState('All');
  const tasks = useSelector((state) => state.tasks.items); // Redux state management [cite: 41, 42]
  const dispatch = useDispatch();

  
  const handleAddTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description: "Team assigned task", 
      status: 'Pending' 
    };
    dispatch(addTask(newTask));
};
  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  
  const handleToggle = useCallback((id) => {
    dispatch(toggleTask(id));
  }, [dispatch]);

  
  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks for performance optimization...");
    if (filter === 'All') return tasks;
    return tasks.filter(task => task.status === filter);
  }, [tasks, filter]);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Team Dashboard</h2> [cite: 4, 30]

      <section className="mb-8">
        <TaskForm onAdd={handleAddTask} /> [cite: 19]
      </section>

      
      <div className="flex gap-4 mb-6">
        {['All', 'Pending', 'Completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg transition ${
              filter === status 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      
      <section className="bg-white rounded-xl shadow-inner p-4">
        <TaskList 
          tasks={filteredTasks} 
          onDelete={handleDelete} 
          onToggle={handleToggle} 
        />
      </section>
    </div>
  );
};

export default Dashboard;
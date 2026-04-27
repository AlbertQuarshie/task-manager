import { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../redux/taskSlice';
import { TaskForm } from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [filter, setFilter] = useState('All');
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  // Receives the title string from TaskForm
  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      status: 'Pending',
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
    if (filter === 'All') return tasks;
    return tasks.filter((t) => t.status === filter);
  }, [tasks, filter]);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Team Dashboard</h1>
      
      {/* Task Input */}
      <TaskForm onAdd={handleAddTask} />
      
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {['All', 'Pending', 'Completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <TaskList tasks={filteredTasks} onDelete={handleDelete} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Dashboard;
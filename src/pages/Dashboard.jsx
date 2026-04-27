import { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../redux/taskSlice';
import { TaskForm } from '../components/TaskForm';
import TaskList from '../components/TaskList'; // NOTICE: No curly braces here

const Dashboard = () => {
  const [filter, setFilter] = useState('All');
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  const handleAddTask = (title) => {
    if (!title.trim()) return;
    dispatch(addTask({ id: Date.now(), title, status: 'Pending' }));
  };

  const handleDelete = useCallback((id) => dispatch(deleteTask(id)), [dispatch]);
  const handleToggle = useCallback((id) => dispatch(toggleTask(id)), [dispatch]);

  const filteredTasks = useMemo(() => {
    if (filter === 'All') return tasks;
    return tasks.filter(t => t.status === filter);
  }, [tasks, filter]);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Team Tasks</h1>
      <TaskForm onAdd={handleAddTask} />
      
      <div className="my-4 flex gap-2">
        {['All', 'Pending', 'Completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className="border px-3 py-1 rounded">
            {f}
          </button>
        ))}
      </div>

      <TaskList tasks={filteredTasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default Dashboard;
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [filter, setFilter] = useState('All');
  const tasks = useSelector((state) => state.tasks.items);

  // Requirement: useMemo for optimized derived data
  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks...");
    if (filter === 'All') return tasks;
    return tasks.filter(t => t.status === filter);
  }, [tasks, filter]);

  return (
    <div>
      <h2 className="text-2xl mb-4">Your Dashboard</h2>
      {/* Filter UI and Task List rendering here */}
    </div>
  );
};

export default Dashboard;
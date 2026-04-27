import TaskItem  from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) return <p className="text-gray-500">No tasks found.</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TaskList;
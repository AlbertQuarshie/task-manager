export const getLocalTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
export const setLocalTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
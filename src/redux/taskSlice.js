import { createSlice } from '@reduxjs/toolkit';

// Assuming you have your localStorage utility functions here or imported
const getLocalTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
const setLocalTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { items: getLocalTasks() },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
      setLocalTasks(state.items);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
      setLocalTasks(state.items);
    },
    // MAKE SURE THIS IS HERE:
    toggleTask: (state, action) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.status = task.status === 'Pending' ? 'Completed' : 'Pending';
      }
      setLocalTasks(state.items);
    }
  }
});


export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
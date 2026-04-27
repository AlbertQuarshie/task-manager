import { createSlice } from '@reduxjs/toolkit';
import { getLocalTasks, setLocalTasks } from '../utils/localStorage';

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
    }
  }
});
export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
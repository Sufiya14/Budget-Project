import {createSlice} from '@reduxjs/toolkit';

let nextTaskId = 0;
export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nextTaskId++,
        name: action.payload.tasks.name,
        PlannedAmount: action.payload.tasks.PlannedAmount,
        ActualAmount: action.payload.tasks.ActualAmount,
      };
      state.push(newTask);
    },
  },
});

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;

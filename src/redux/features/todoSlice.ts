import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos?.filter(
        (item: any) => item.id !== action.payload
      );
    },
    toggleComplete: (state, action) => {
      const task = state.todos.find((item: any) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;

// type TTodo = {
//   title: string;
//   description: string;
//   isCompleted?: boolean;
// };

// type TInitialState = {
//   todos: TTodo[];
// };

// const initialState: TInitialState = {
//   todos: [],
// };
// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<TTodo>) => {
//       state.todos.push({ ...action.payload, isCompleted: false });
//     },
//     removeTodo: (state, action: PayloadAction<string>) => {
//       state.todos = state.todos?.filter((item) => item.id !== action.payload);
//     },
//     toggleComplete: (state, action: PayloadAction<string>) => {
//       const task = state.todos.find((item) => item.id === action.payload);
//       task!.isCompleted = !task?.isCompleted;
//     },
//   },
// });
// export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
// export default todoSlice.reducer;

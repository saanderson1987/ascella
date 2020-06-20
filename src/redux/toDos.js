import { createSlice } from "@reduxjs/toolkit";

export const toDosSlice = createSlice({
  name: "toDos",
  initialState: [
    {
      checked: false,
      text: "Feed the dog.",
    },
  ],
  reducers: {
    addToDo: (state, { payload: text }) => [...state, { text, checked: false }],
    removeToDo: (state, { payload: index }) => {
      const newState = [...state];
      newState.splice(index, 1);
      return newState;
    },
    toggleCheck: (state, { payload: index }) => {
      const currentToDo = state[index];
      const newState = [...state];
      newState[index] = { ...currentToDo, checked: !currentToDo.checked };
      return newState;
    },
    editText: (state, { payload: { index, text } }) => {
      const currentToDo = state[index];
      const newState = [...state];
      newState[index] = { ...currentToDo, text };
      return newState;
    },
  },
});

export const {
  addToDo,
  removeToDo,
  toggleCheck,
  editText,
} = toDosSlice.actions;

export const selectToDos = (state) => state.toDos;

export default toDosSlice.reducer;

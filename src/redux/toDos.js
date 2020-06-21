import { createSlice } from "@reduxjs/toolkit";

export const toDosSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    addToDo: (state, { payload: text }) => [
      ...state,
      { text, checked: false, notes: [] },
    ],
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
    addNote: (state, { payload: { toDoIndex, note } }) => {
      const newState = [...state];
      const newNotes = [...state[toDoIndex].notes, note];
      newState[toDoIndex] = { ...state[toDoIndex], notes: newNotes };
      return newState;
    },
    removeNote: (state, { payload: { toDoIndex, noteIndex } }) => {
      const newState = [...state];
      const newNotes = [...state[toDoIndex].notes];
      newNotes.splice(noteIndex, 1);
      newState[toDoIndex] = { ...state[toDoIndex], notes: newNotes };
      return newState;
    },
    editNote: (state, { payload: { toDoIndex, noteIndex, note } }) => {
      const newState = [...state];
      const newNotes = [...state[toDoIndex].notes];
      newNotes[noteIndex] = note;
      newState[toDoIndex] = { ...state[toDoIndex], notes: newNotes };
      return newState;
    },
  },
});

export const {
  addToDo,
  removeToDo,
  toggleCheck,
  editText,
  addNote,
  removeNote,
  editNote,
} = toDosSlice.actions;

export const selectToDos = (state) => state.toDos;
export const selectToDoItem = (index) => (state) => state.toDos[index];

export default toDosSlice.reducer;

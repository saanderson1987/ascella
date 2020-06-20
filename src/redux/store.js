import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "./toDos";

export default configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});

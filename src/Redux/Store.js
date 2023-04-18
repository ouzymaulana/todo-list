import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Slices/TodoSlice";
import CartReducer from "./Slices/dataCartSlice";

const store = configureStore({
  reducer: {
    todoList: TodoReducer,
    dataCart: CartReducer,
  },
  devTools: true,
});

export default store;

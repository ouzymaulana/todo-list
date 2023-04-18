import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    dataTodoList: [],
    value: "",
  },
  reducers: {
    setDataTodoList: (state, action) => {
      state.dataTodoList = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDataTodoList, setValue } = TodoSlice.actions;
export default TodoSlice.reducer;

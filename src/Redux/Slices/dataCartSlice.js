import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dataCartPersistConfig = {
  key: "productCart",
  storage: storage,
  whitelist: ["cartItem"],
};

const dataCartSlice = createSlice({
  name: "productCart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    setCartItem: (state, action) => {
      if (Array.isArray(state.cartItem) !== 0) {
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, stock: action.payload.stock - 1, quantity: 1 },
        ];
      } else {
        state.cartItem = action.payload;
      }

      console.log(state.cartItem);
    },

    incrementQuantity: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        if (state.cartItem[itemIndex].stock !== 0) {
          state.cartItem[itemIndex].quantity += 1;
          state.cartItem[itemIndex].stock -= 1;
        }
      }
    },

    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (state.cartItem[itemIndex].quantity == 1) {
          state.cartItem = state.cartItem.filter(
            (_, index) => index !== itemIndex
          );
        } else {
          state.cartItem[itemIndex].quantity -= 1;
          state.cartItem[itemIndex].stock += 1;
        }
      }
    },
  },
});

const persistedDataCartReducer = persistReducer(
  dataCartPersistConfig,
  dataCartSlice.reducer
);

export const selectDataCart = (state) => state.dataCart;
export const { setCartItem, incrementQuantity, decrementQuantity } =
  dataCartSlice.actions;
export default persistedDataCartReducer;

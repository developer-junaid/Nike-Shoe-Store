import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import variablesSlice from "./slices/variablesSlice";

// Configure Store
const store = configureStore({
  reducer: { cart: productSlice.reducer, variables: variablesSlice.reducer },
});

// Select Products
export const selectProducts = (state) => state.cart;
// Select Variable totalItems
export const selectTotalItems = (state) => state.variables.totalItems;
// Select Variable totalAmount
export const selectTotalAmount = (state) => state.variables.totalAmount;

// Export stuff
export const { setTotalItems, setTotalAmount } = variablesSlice.actions;
export const {
  add,
  remove,
  emptyCart,
  incrementProduct,
  decrementProduct,
} = productSlice.actions;
export { productSlice, variablesSlice, store };

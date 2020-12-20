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

// Export stuff
export const { setTotalItems } = variablesSlice.actions;
export const { add, remove, emptyCart } = productSlice.actions;
export { productSlice, variablesSlice, store };

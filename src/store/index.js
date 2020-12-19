import { createSlice, configureStore } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./state";

// Create Slice
const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    // Actions
    // Add
    add: (state, action) => {
      return state.map((item) => {
        // Find the item
        if (item.id !== action.payload.id) {
          return item;
        }

        // Add it to the cart
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },
    // Remove
    remove: (state, action) => {
      return state.map((item) => {
        // Find the item
        if (item.id !== action.payload.id) {
          return item;
        }

        // Remove it from the cart
        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },
  },
});

// Configure Store
const store = configureStore({ reducer: basketSlice.reducer });

// Export stuff
export const { add, remove } = basketSlice.actions;
export { basketSlice, store };

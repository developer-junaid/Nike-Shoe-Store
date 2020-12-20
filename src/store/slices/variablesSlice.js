import { variablesState } from "../states/variablesState";
import { createSlice } from "@reduxjs/toolkit";

// Create variables slice
const variablesSlice = createSlice({
  name: "variables",
  initialState: variablesState,
  reducers: {
    // Actions
    // Add Item to totalItems
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export default variablesSlice;

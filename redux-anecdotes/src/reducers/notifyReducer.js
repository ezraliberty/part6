import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: {
    message: null,
    displayTime: 0,
},
  reducers: {
    setNotification(state, action) {
      return {
        ...state,
        message: action.payload.message,
        displayTime: action.payload.displayTime
      }
    },
    resetNotification (state, action) {
      return {
        ...state,
        message: null,
        displayTime: 0
      }
        // state.message = null;
        // state.displayTime = 0;
    }
  },
});

export const {setNotification, resetNotification} = notifySlice.actions;

export default notifySlice.reducer;

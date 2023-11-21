import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: {
    message: null,
},
  reducers: {
    setNotification(state, action) {
        state.message = action.payload
    },
    resetNotification (state, action) {
        state.message = null
    }
  },
});

export const {setNotification, resetNotification} = notifySlice.actions;
export default notifySlice.reducer;

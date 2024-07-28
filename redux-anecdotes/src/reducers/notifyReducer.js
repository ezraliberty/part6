import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: {
    message: null
},
  reducers: {
    setNotification(state, action) {
      state.message = action.payload
    },
    resetNotification (state, action) {
        state.message = null;
    }
  },
});

export const {setNotification, resetNotification} = notifySlice.actions;

export const showNotification = (message, timeout) => {
  return async dispatch => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(resetNotification());
    }, timeout * 1000);
  };
};

export default notifySlice.reducer;

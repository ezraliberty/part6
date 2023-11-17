import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'anecdotes',
    reducers: {
        filterReducer(state, action) {
            
        },
        filterChange(state, action) {
            const filter = action.payload
            return filter
        }
    }
})
const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
        default:
            return state
    }
};

export const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter
    }
}
/*Change the definition of the filter reducer and action creators 
to use the Redux Toolkit's createSlice function. */
export default filterReducer
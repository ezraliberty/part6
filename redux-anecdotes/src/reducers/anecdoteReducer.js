import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addedVote(state, action) {
      const {id, votes} = action.payload.data
      return state.map(anecdote => anecdote.id === id ? {...anecdote, votes: votes} : anecdote)
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
  },
});

export const {addedVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions;

export const voteA = (id) => {
  return async (dispatch) => {
    const voted = await anecdotesService.vote(id);
    dispatch(addedVote(voted));
  };
};

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdotesService.createAnecdote(content);
    dispatch(appendAnecdote(anecdote));
  };
};

export default anecdoteSlice.reducer;

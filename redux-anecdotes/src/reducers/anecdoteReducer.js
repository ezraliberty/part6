import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voter(state, action) {
      const id = action.payload
      const voteToAdd = state.find((n) => n.id === id);
      const addedVote = { ...voteToAdd, votes: voteToAdd.votes + 1 };
      return state.map((vote) => (vote.id !== id ? vote : addedVote));
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const {newAnecdote, voter, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer

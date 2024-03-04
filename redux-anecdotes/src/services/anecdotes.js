import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (content) => {
    const object = {content, votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}
    // const id = action.payload
    //   const voteToAdd = state.find((n) => n.id === id);
    //   const addedVote = { ...voteToAdd, votes: voteToAdd.votes + 1 };
    //   return state.map((vote) => (vote.id !== id ? vote : addedVote));
const vote = async (id) => {
    const all = await getAll()
    const found = all.find((n) => n.id === id)
    const addedVote = {...found, votes: found.votes + 1 }
    const response = await axios.put(`${baseUrl}/${id}`, addedVote)
    // const response = all.map(anecdote => anecdote.id === id ? {...anecdote, votes: request.votes} : anecdote)
    return response
}

export default {getAll, createAnecdote, vote}
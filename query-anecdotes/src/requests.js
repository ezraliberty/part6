import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = () => axios.get(baseUrl).then((res) => res.data);

export const createAnecdote = (content) =>
  axios.post(baseUrl, content).then((res) => res.data);

export const vote = (anecdote) =>
    axios
      .put(`${baseUrl}/${anecdote.id}`, anecdote)
      .then((res) => res.data);

export const updateVote = async (id) => {
    const all = await getAnecdotes()
    const found = all.find((n) => n.id === id)
    const addedVote = {...found, votes: found.votes + 1 }
    const response = await axios.put(`${baseUrl}/${id}`, addedVote)
    // const response = all.map(anecdote => anecdote.id === id ? {...anecdote, votes: request.votes} : anecdote)
    return response
}
import { useSelector, useDispatch } from "react-redux";
import { voter } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({filter, anecdotes}) => {
  return filter !== '' ? anecdotes.filter(anecdote =>  anecdote.content.includes(filter)) : anecdotes
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voter(id));
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;

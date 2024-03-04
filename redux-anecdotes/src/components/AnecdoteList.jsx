import { useSelector, useDispatch } from "react-redux";
import { voteA } from "../reducers/anecdoteReducer";
import { setNotification, resetNotification } from "../reducers/notifyReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return filter !== ""
      ? anecdotes.filter((anecdote) => anecdote.content.includes(filter))
      : anecdotes;
  });
  const vote = (anecdote) => {
    dispatch(voteA(anecdote.id));
    dispatch(setNotification(`You voted '${anecdote.content}'`, 2));
    // setTimeout(() => {
    //   dispatch(resetNotification());
    // }, 5000);
  };

  return (
    <div>
      {[...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default AnecdoteList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from './reducers/anecdoteReducer';

export default function AnecdoteList() {
  const anecdotes = useSelector((store) =>
    store.sort(function (a, b) {
      return b.votes - a.votes;
    })
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
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
}

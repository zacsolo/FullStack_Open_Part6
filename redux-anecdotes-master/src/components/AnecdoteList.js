import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

export default function AnecdoteList() {
  //--Getting the search term
  const search = useSelector(({ search }) => search);
  //--Filtering the array with the search term
  const anecdotes = useSelector(({ anecdote }) =>
    anecdote.filter(
      ({ content }) =>
        content.toLowerCase().includes(search.term.toLowerCase()) && content
    )
  );
  //--Sorting the array based on votes
  anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });

  const dispatch = useDispatch();

  const vote = (id, content) => {
    const message = 'You voted for';
    dispatch(addVote(id, content, message));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

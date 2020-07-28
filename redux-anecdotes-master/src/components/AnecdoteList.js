import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function AnecdoteList({ anecdote, search, addVote, setNotification }) {
  const anecdotes = anecdote.filter(
    ({ content }) =>
      content.toLowerCase().includes(search.toLowerCase()) && content
  );

  anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });

  const vote = (content, id, votes) => {
    addVote(content, id, votes);
    setNotification(`You voted for "${content}"`, 5);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() =>
                vote(anecdote.content, anecdote.id, anecdote.votes)
              }>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote,
    search: state.search,
  };
};

const mapDispatchToProps = {
  addVote,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

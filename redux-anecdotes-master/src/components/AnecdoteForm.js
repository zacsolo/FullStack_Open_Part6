import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function AnecdoteForm({ createItem, setNotification }) {
  const create = async (e) => {
    e.preventDefault();
    const content = e.target.item.value;
    e.target.item.value = '';
    createItem(content);
    setNotification(`You created a new anecdote "${content}"`, 5);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name='item' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  createItem,
  setNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);

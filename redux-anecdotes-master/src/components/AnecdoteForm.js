import React from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes';

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const create = async (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    const message = 'You created';
    e.target.item.value = '';
    const newAnecdote = await anecdoteService.createNew(item);
    console.log('NEW INFO SAVED TO DB', { ...newAnecdote });
    dispatch(createItem({ ...newAnecdote, message }));
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

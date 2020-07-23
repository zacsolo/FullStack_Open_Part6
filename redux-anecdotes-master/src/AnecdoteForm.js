import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createItem } from './reducers/anecdoteReducer';

export default function AnecdoteForm() {
  const dispatch = useDispatch();

  const create = (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    e.target.item.value = '';
    dispatch(createItem(item));
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

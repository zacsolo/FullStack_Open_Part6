import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import FilterForm from './components/FilterForm';
import anecdoteService from './services/anecdotes';
import { initializeData } from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll().then((data) => dispatch(initializeData(data)));
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <FilterForm />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;

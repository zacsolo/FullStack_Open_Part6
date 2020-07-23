import React from 'react';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';

const App = () => {
  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;

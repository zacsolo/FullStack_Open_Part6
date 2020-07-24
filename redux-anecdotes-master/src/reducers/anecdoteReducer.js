//-----CONSTRUCTING INITIAL STATE------------------------------------
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);
//------------------------------------------------------------------------

//----REDUCER FOR CREATING NOTES AND VOTING-------------------------------
const anecdoteReducer = (state = [], action) => {
  const { content, votes, id, data, type } = action;
  console.log('___STATE___', state);
  switch (type) {
    case 'FETCH_DATA':
      return data;
    case 'VOTE':
      const updatedState = state.map((item) =>
        item.id === action.id ? { ...item, votes: item.votes + 1 } : item
      );
      return updatedState;
    case 'NEW_NOTE':
      const newState = [...state, { content, votes, id }];
      return newState;
    default:
      break;
  }
  return state;
};
//---------------------------------------------------------------------------

//------------ACTION CREATORS-----------------------------------------------
export const addVote = (id, content, message) => {
  return { type: 'VOTE', id, content, message };
};

export const createItem = ({ content, message, votes, id }) => {
  return { type: 'NEW_NOTE', content, message, votes, id };
};

export const initializeData = (data) => {
  return {
    type: 'FETCH_DATA',
    data,
  };
};

//----------------------------------------------------------------------------
export default anecdoteReducer;

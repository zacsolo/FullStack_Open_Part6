import anecdoteService from '../services/anecdotes';
//------------------------------------------------------------------------

//----REDUCER FOR CREATING NOTES AND VOTING-------------------------------
const anecdoteReducer = (state = [], action) => {
  const { content, votes, id, data, type } = action;
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
export const addVote = (anecdote, id, votes) => async (dispatch) => {
  const data = await anecdoteService.update(anecdote, id, votes);
  dispatch({ type: 'VOTE', ...data });
};

export const createItem = (anecdote) => async (dispatch) => {
  const data = await anecdoteService.createNew(anecdote);

  dispatch({ type: 'NEW_NOTE', ...data });
};

export const initializeData = () => async (dispatch) => {
  const data = await anecdoteService.getAll();
  dispatch({
    type: 'FETCH_DATA',
    data,
  });
};

//----------------------------------------------------------------------------
export default anecdoteReducer;

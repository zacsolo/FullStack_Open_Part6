const initialState = {
  term: '',
};

const filterReducer = (state = initialState, action) => {
  const { term } = action;
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, term };
    default:
      break;
  }
  return state;
};

export const setSearchTerm = (term) => {
  return { type: 'SET_SEARCH', term };
};

export default filterReducer;

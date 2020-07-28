const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.term;
    default:
      return state;
  }
};

export const setSearchTerm = (term) => {
  return { type: 'SET_SEARCH', term };
};

export default filterReducer;

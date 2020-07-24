const initialState = {
  content: '',
  message: '',
  isDisplayed: false,
};

const notificationReducer = (state = initialState, action) => {
  const { content, message, isDisplayed } = action;
  switch (action.type) {
    case 'VOTE':
      return {
        content,
        message,
        isDisplayed: true,
      };
    case 'NEW_NOTE':
      return {
        content,
        message,
        isDisplayed: true,
      };
    case 'HIDE_MESSAGE':
      return { ...state, isDisplayed };
    default:
      break;
  }
  return state;
};

export const hideMessage = () => {
  return { type: 'HIDE_MESSAGE', isDisplayed: false };
};

export default notificationReducer;

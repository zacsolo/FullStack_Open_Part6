const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.content;
    default:
      return state;
  }
};

let t;

const timer = (seconds, dispatch) => {
  t = setTimeout(() => {
    dispatch({ type: 'NOTIFICATION', content: '' });
  }, Number(`${seconds}000`));
};

export const setNotification = (content, seconds) => async (dispatch) => {
  window.clearTimeout(t);
  await timer(seconds, dispatch);
  await dispatch({ type: 'NOTIFICATION', content });
};

export default notificationReducer;

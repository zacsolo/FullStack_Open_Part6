import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideMessage } from '../reducers/notificationReducer';

const Notification = () => {
  const notification = useSelector(({ notification }) => notification);

  const dispatch = useDispatch();

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  const displayMessage = () => {
    const { isDisplayed, message, content } = notification;
    if (isDisplayed) {
      setTimeout(() => {
        console.log('__IN SET TIMEOUT__');
        dispatch(hideMessage());
      }, 5000);
      return (
        <div style={style}>
          {message} an anecdote "{content}"
        </div>
      );
    }
  };

  return <div>{displayMessage()}</div>;
};

export default Notification;

import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notify = useSelector(({ notification }) => notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return <div>{notify ? <div style={style}>{notify}</div> : null}</div>;
};

export default Notification;

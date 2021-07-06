import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    // calling removeAlert, setting it to the default params
    const timeout = setTimeout(() => removeAlert(), 3000);

    // cleanup function
    return () => clearTimeout(timeout);
    // adding list to dependency array to this useEffect will be run whenever list changes, and not just on first render only as with an empty array
  }, [list, removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    // calling removeAlert, setting it to the default params
    const timeout = setTimeout(() => removeAlert(), 3000);

    // cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

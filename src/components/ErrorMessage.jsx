import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-800 p-4 rounded-lg mt-4">
      <h2 className="font-bold">Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;

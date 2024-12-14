import React from 'react';

const Result = ({ prediction }) => {
  return (
    <div className="bg-green-100 text-green-800 mt-6 p-4 rounded-lg max-w-lg mx-auto">
      <h2 className="text-lg font-semibold">Predicted Diagnosis:</h2>
      <p>{prediction}</p>
    </div>
  );
};

export default Result;

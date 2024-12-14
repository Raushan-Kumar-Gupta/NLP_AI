import React from 'react';

const SymptomHistory = ({ history }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-6">
      <h2 className="text-lg font-semibold">Previous Symptoms:</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item.symptoms} - <span className="text-blue-600">{item.prediction}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SymptomHistory;

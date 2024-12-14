import React from 'react';

const DietRecommendations = ({ diet }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-6 shadow-md">
      <h2 className="text-lg font-semibold">Balanced Diet Recommendations:</h2>
      <ul className="list-disc ml-6">
        {diet.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DietRecommendations;

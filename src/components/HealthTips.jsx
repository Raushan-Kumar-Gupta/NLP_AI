import React from 'react';

const HealthTips = () => {
  const tips = [
    'Stay hydrated by drinking plenty of water.',
    'Engage in regular physical activity.',
    'Get enough sleep each night.',
    'Eat a variety of fruits and vegetables.',
    'Limit processed foods and sugars.',
  ];

  return (
    <div className="bg-white p-4 rounded-lg mt-6 shadow-md">
      <h2 className="text-lg font-semibold">Health Tips:</h2>
      <ul className="list-disc ml-6">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTips;

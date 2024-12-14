import React from 'react';

const DiseaseInfo = ({ diseases }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-6 shadow-md">
      <h2 className="text-lg font-semibold">Related Diseases:</h2>
      <ul className="list-disc ml-6">
        {diseases.map((disease, index) => (
          <li key={index}>{disease}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseInfo;

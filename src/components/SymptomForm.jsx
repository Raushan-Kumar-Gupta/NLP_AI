import React, { useState } from 'react';

const SymptomForm = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(symptoms); // Pass symptoms to the parent component
    setSymptoms(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-[100%] max-w-lg mx-auto">
      <label className="block mb-4">
        <span className="text-gray-700">Enter your symptoms:</span>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Type your symptoms here..."
          required
          className="mt-2 p-4 w-full h-32 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default SymptomForm;

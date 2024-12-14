import React, { useState } from 'react';
import Header from './components/Header';
import SymptomForm from './components/SymptomForm';
import Result from './components/Result';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import SymptomHistory from './components/SymptomHistory';
import DiseaseInfo from './components/DiseaseInfo';
import DietRecommendations from './components/DietRecommendations';
import HealthTips from './components/HealthTips';

function App() {
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [diet, setDiet] = useState([]);

  const handleSymptomSubmit = async (symptoms) => {
    setLoading(true);
    setPrediction(''); // Clear previous predictions
    setError(''); // Clear previous error messages
    setDiseases([]); // Clear previous diseases
    setDiet([]); // Clear previous diet recommendations

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
      });

      const data = await response.json();
      if (response.ok) {
        setPrediction(data.prediction);
        setDiseases(data.diseases); // Assuming the API returns an array of related diseases
        setDiet(data.diet); // Assuming the API returns diet recommendations
        // Update history with the new symptoms and prediction
        setHistory((prevHistory) => [...prevHistory, { symptoms, prediction: data.prediction }]);
      } else {
        setError(data.message || 'Failed to fetch prediction.'); // Handle errors
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching prediction. Please try again.'); // Handle errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Header />
      <SymptomForm onSubmit={handleSymptomSubmit} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {prediction && <Result prediction={prediction} />}
      <SymptomHistory history={history} />
     <div className='flex gap-10'>
     <DiseaseInfo diseases={diseases} />
      <DietRecommendations diet={diet} />
      <HealthTips />
     </div>
    </div>
  );
}

export default App;

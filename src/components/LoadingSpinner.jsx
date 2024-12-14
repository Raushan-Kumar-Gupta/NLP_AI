import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;

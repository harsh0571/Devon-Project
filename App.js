// src/components/LoadingPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add logic to process the selected symptoms and fetch results
    // For simplicity, let's just show a loading message for a few seconds
    const timeoutId = setTimeout(() => {
      // Navigate to the results page
      navigate('/results');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div>
      <h1>Loading Page</h1>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;

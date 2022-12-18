export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

// For local -> http://localhost:5000
// For Deploy -> https://relish-n-haven-backend.onrender.com

export const BACKEND = 'https://relish-n-haven-backend.onrender.com';

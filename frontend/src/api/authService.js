// src/api/authService.js
import axios from 'axios';

const API_URL = 'https://cv-chatbot-backend.onrender.com/api/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register/', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login/', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify({
      user: {
        username: userData.username,
      },
      token: response.data,
    }));
    
    return {
      user: {
        username: userData.username,
      },
      token: response.data,
    };
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

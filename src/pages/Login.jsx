import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      alert('You are already logged in!');
      navigate('/material-list');
    } else {
      // Show alert when component mounts
      setTimeout(() => {
        alert('Only admin can login.\nClick OK to continue.');
        setShowLoginForm(true);
      }, 100); // Delay slightly so it triggers after page load
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = e.target.username.value;
    const enteredPassword = e.target.password.value;

    if (enteredUsername === 'admin' && enteredPassword === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/material-list');
    } else {
      alert('Invalid credentials.\n\nUsername: admin\nPassword: admin123');
    }
  };

  if (!showLoginForm) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

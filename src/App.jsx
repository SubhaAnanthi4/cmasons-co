import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import MaterialList from './components/MaterialList';
import WastageCalculator from './components/WastageCalculator';
import ProductVisualization from './components/ProductVisualization';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route
          path="/material-list"
          element={
            <ProtectedRoute>
              <MaterialList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wastage-calculator"
          element={
            <ProtectedRoute>
              <WastageCalculator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/visualization"
          element={
            <ProtectedRoute>
              <ProductVisualization />
            </ProtectedRoute>
          }
        />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

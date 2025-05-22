import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaterialList from './components/MaterialList';
import WastageCalculator from './components/WastageCalculator';
import ProductVisualization from './components/ProductVisualization'; // <-- Add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MaterialList />} />
        <Route path="/wastage-calculator" element={<WastageCalculator />} />
        <Route path="/visualization" element={<ProductVisualization />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './WastageCalculator.css';

const WastageCalculator = () => {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [wastageDetails, setWastageDetails] = useState(null);

  useEffect(() => {
    // Fetch all materials from the backend
    const fetchMaterials = async () => {
      try {
        const response = await fetch('https://cma-textiles-1.onrender.com/materials');
        const data = await response.json();
        setMaterials(data); // Assuming the response is an array of materials
      } catch (err) {
        console.error('Error fetching materials:', err);
      }
    };

    fetchMaterials();
  }, []);

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handleCalculateWastage = async () => {
    if (selectedMaterial) {
      try {
        const response = await fetch(`https://cma-textiles-1.onrender.com/wastage/${selectedMaterial}`);
        const data = await response.json();
        setWastageDetails(data);
      } catch (err) {
        console.error('Error fetching wastage details:', err);
      }
    } else {
      alert('Please select a material.');
    }
  };

  const handleDownloadPDF = async () => {
    if (selectedMaterial) {
      try {
        const response = await fetch(`https://cma-textiles-1.onrender.com/generate-pdf/${selectedMaterial}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/pdf',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to download PDF');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `wastage_report_${selectedMaterial}.pdf`;
        link.click();
      } catch (err) {
        console.error('Error downloading PDF:', err);
      }
    } else {
      alert('Please select a material to download the PDF.');
    }
  };

  // Calculate the wastage quantity based on the given quantity and wastage percentage
  const getWastageQuantity = () => {
    if (wastageDetails) {
      return (wastageDetails.wastagePercentage / 100) * wastageDetails.givenQuantity;
    }
    return 0;
  };

  return (
    <div className="wastage-calculator-wrapper">
      <div className="wastage-calculator-container">
        <h2>Calculate Wastage</h2>
        
        {/* Material Selection Dropdown */}
        <select onChange={handleMaterialChange} value={selectedMaterial}>
          <option value="">Select Material</option>
          {materials.map((material) => (
            <option key={material._id} value={material._id}>
              {material.materialName}
            </option>
          ))}
        </select>

        {/* Button to Calculate Wastage */}
        <button className='wastage' onClick={handleCalculateWastage}>Calculate Wastage</button>

        {/* Button to Download PDF */}
        {wastageDetails && (
          <button className='download-pdf' onClick={handleDownloadPDF}>Download PDF</button>
        )}

        {/* Display Wastage Details */}
        {wastageDetails && (
          <div className="wastage-details">
            <h3>Wastage Details</h3>
            <p><strong>Material Name:</strong> {wastageDetails.materialName}</p>
            <p><strong>To Company:</strong> {wastageDetails.toCompany}</p>
            <p><strong>Given Quantity:</strong> {wastageDetails.givenQuantity}</p>
            <p><strong>Total Received Quantity:</strong> {wastageDetails.totalReceived}</p>
            <p><strong>Wastage Percentage:</strong> {wastageDetails.wastagePercentage}%</p>
            <p><strong>Wastage Quantity:</strong> {getWastageQuantity()} {wastageDetails.unit}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WastageCalculator;

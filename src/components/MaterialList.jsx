import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MaterialList.css';

const MaterialList = () => {
  const navigate = useNavigate();
  const [materialList, setMaterialList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMaterialId, setEditingMaterialId] = useState(null);
  const [batchReturns, setBatchReturns] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [newMaterial, setNewMaterial] = useState({
    materialName: '',
    toCompany: '',
    givenQuantity: '',
    dispatchDate: '',
    batchQuantity: '',
    batchDate: ''
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert("Logged out successfully");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    fetchMaterials();
  }, []);
  const fetchMaterials = async () => {
    try {
      const response = await axios.get('https://cma-textiles-1.onrender.com/materials');
      const materialsWithExtra = await Promise.all(
        response.data.map(async (material) => {
          try {
            const batchRes = await axios.get(`https://cma-textiles-1.onrender.com/batch-returns/${material._id}`);
            const totalBatchQty = batchRes.data.reduce((sum, batch) => sum + batch.receivedQuantity, 0);
            const givenQty = parseFloat(material.givenQuantity);
            let wastage = 'N/A';
            if (!isNaN(givenQty) && givenQty !== 0) {
              wastage = (((givenQty - totalBatchQty) / givenQty) * 100).toFixed(2) + '%';
            }
            return { ...material, totalBatchQty, wastage, batchHistory: batchRes.data };
          } catch {
            return { ...material, totalBatchQty: 0, wastage: 'Error', batchHistory: [] };
          }
        })
      );
      setMaterialList(materialsWithExtra);
    } catch (err) {
      console.error("Error fetching materials:", err);
    }
  };

  const handleInputChange = (e) => {
    setNewMaterial({ ...newMaterial, [e.target.name]: e.target.value });
  };

  const handleSubmitMaterial = async (e) => {
    e.preventDefault();
    try {
      if (editingMaterialId) {
        await axios.put(`https://cma-textiles-1.onrender.com/materials/${editingMaterialId}`, {
          materialName: newMaterial.materialName,
          toCompany: newMaterial.toCompany,
          givenQuantity: newMaterial.givenQuantity,
          dispatchDate: newMaterial.dispatchDate
        });

        if (newMaterial.batchQuantity && newMaterial.batchDate) {
          await axios.post('https://cma-textiles-1.onrender.com/batch-return', {
            materialId: editingMaterialId,
            receivedQuantity: newMaterial.batchQuantity,
            receivedDate: newMaterial.batchDate
          });
        }
      } else {
        const res = await axios.post('https://cma-textiles-1.onrender.com/materials', {
          materialName: newMaterial.materialName,
          toCompany: newMaterial.toCompany,
          givenQuantity: newMaterial.givenQuantity,
          dispatchDate: newMaterial.dispatchDate
        });

        if (newMaterial.batchQuantity && newMaterial.batchDate) {
          await axios.post('https://cma-textiles-1.onrender.com/batch-return', {
            materialId: res.data.dispatch._id,
            receivedQuantity: newMaterial.batchQuantity,
            receivedDate: newMaterial.batchDate
          });
        }
      }
      resetForm();
      fetchMaterials();
    } catch (err) {
      console.error("Error saving material:", err);
    }
  };

  const handleEditClick = (material) => {
    setNewMaterial({
      materialName: material.materialName || '',
      toCompany: material.toCompany || '',
      givenQuantity: material.givenQuantity || '',
      dispatchDate: material.dispatchDate?.slice(0, 10) || '',
      batchQuantity: '',
      batchDate: ''
    });
    setEditingMaterialId(material._id);
    setShowForm(true);
  };

  const handleDeleteClick = async (materialId) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      try {
        await axios.delete(`https://cma-textiles-1.onrender.com/materials/${materialId}`);
        fetchMaterials();
      } catch (err) {
        console.error("Error deleting material:", err);
      }
    }
  };

  const resetForm = () => {
    setNewMaterial({
      materialName: '',
      toCompany: '',
      givenQuantity: '',
      dispatchDate: '',
      batchQuantity: '',
      batchDate: ''
    });
    setEditingMaterialId(null);
    setShowForm(false);
  };

  return (
    <div className="material-list-container">
      <div className="material-list-header">
        <h1 className="material-list-title">Material List</h1>
        <div className="user-icon-container">
          <button className="user-icon" onClick={handleLogout} title="Logout">
            👤
          </button>
        </div>
      </div>

      <div className="material-list-header">
        <button className="add-btn" onClick={() => { resetForm(); setShowForm(true); }}>
          + Add Material
        </button>
        <button className="wastage-btn" onClick={() => navigate('/wastage-calculator')}>
          Wastage Calculation
        </button>
        <button className="visualize-btn" onClick={() => navigate('/visualization')}>
          Visualize Products
        </button>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="popup-form">
            <h2>{editingMaterialId ? "Edit Material" : "Add New Material"}</h2>
            <form onSubmit={handleSubmitMaterial}>
              <input type="text" name="materialName" placeholder="Material Name" value={newMaterial.materialName} onChange={handleInputChange} required />
              <input type="text" name="toCompany" placeholder="Company" value={newMaterial.toCompany} onChange={handleInputChange} required />
              <input type="number" name="givenQuantity" placeholder="Given Quantity" value={newMaterial.givenQuantity} onChange={handleInputChange} required />
              <input type="date" name="dispatchDate" value={newMaterial.dispatchDate} onChange={handleInputChange} />
              <input type="number" name="batchQuantity" placeholder="Batch Quantity (optional)" value={newMaterial.batchQuantity} onChange={handleInputChange} />
              <input type="date" name="batchDate" placeholder="Batch Date (optional)" value={newMaterial.batchDate} onChange={handleInputChange} />
              <div className="popup-buttons">
                <button type="submit" className="edit-btn">{editingMaterialId ? "Update" : "Add"}</button>
                <button type="button" className="delete-btn" onClick={resetForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="table-wrapper">
        <table className="material-table">
          <thead>
            <tr>
              <th>Material Name</th>
              <th>Company</th>
              <th>Given Qty</th>
              <th>Dispatch Date</th>
              <th>Wastage %</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {materialList.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-materials">No materials found.</td>
              </tr>
            ) : (
              materialList.map((material) => (
                <tr key={material._id}>
                  <td>{material.materialName}</td>
                  <td>{material.toCompany}</td>
                  <td>{material.givenQuantity}</td>
                  <td>{material.dispatchDate ? new Date(material.dispatchDate).toLocaleDateString() : "N/A"}</td>
                  <td>{material.wastage}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditClick(material)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteClick(material._id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialList;
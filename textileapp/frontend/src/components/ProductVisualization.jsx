import React, { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
import "./ProductVisualization.css";

const ProductVisualization = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [productData, setProductData] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("all");

  useEffect(() => {
    axios.get("http://localhost:5000/api/wastage-summary")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedProducts(selected);
  };

  const generateChart = () => {
    let labels = [];
    let data = [];

    if (selectionMode === "all") {
      labels = productData.map((item) => item.productName);
      data = productData.map((item) => item.wastageAmount);
    } else {
      labels = selectedProducts;
      data = selectedProducts.map((product) => {
        const item = productData.find((p) => p.productName === product);
        return item ? item.wastageAmount : 0;
      });
    }

    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const barColors = "#fef08a";


    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Wastage Percentage",
            data,
            backgroundColor: barColors,

            borderColor: "#2563eb",
            borderWidth: 1,
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value + "%",
            },
            title: {
              display: true,
              text: "Wastage (%)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Products",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => context.parsed.y + "%",
            },
          },
        },
      },
    });
  };

  return (
    <div className="product-container">
      <h2 className="title">Visualize Product Wastage</h2>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="mode"
            value="all"
            checked={selectionMode === "all"}
            onChange={() => setSelectionMode("all")}
          />
          All Products
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="specific"
            checked={selectionMode === "specific"}
            onChange={() => setSelectionMode("specific")}
          />
          Select Specific Products
        </label>
      </div>

      {selectionMode === "specific" && (
        <select multiple onChange={handleChange} className="product-select">
          {productData.map((product) => (
            <option key={product.productName} value={product.productName}>
              {product.productName}
            </option>
          ))}
        </select>
      )}

      <button onClick={generateChart} className="generate-btn">
        Generate Chart
      </button>

      <canvas ref={chartRef} className="product-chart" />
    </div>
  );
};

export default ProductVisualization;

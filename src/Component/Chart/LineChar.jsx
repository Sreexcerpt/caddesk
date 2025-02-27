import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Utility functions for random data
const getRandomNumbers = (count, min, max) =>
  Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

const LineChar = () => {
  const DATA_COUNT = 7;

  const [chartData, setChartData] = useState({
    labels: months.slice(0, DATA_COUNT),
    datasets: [
      {
        label: "Dataset 1",
        data: getRandomNumbers(DATA_COUNT, -100, 100),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: getRandomNumbers(DATA_COUNT, -100, 100),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Chart.js Line Chart" },
    },
  };

  // Actions
  const randomizeData = () => {
    setChartData((prev) => ({
      ...prev,
      datasets: prev.datasets.map((dataset) => ({
        ...dataset,
        data: getRandomNumbers(DATA_COUNT, -100, 100),
      })),
    }));
  };

  const addDataset = () => {
    setChartData((prev) => ({
      ...prev,
      datasets: [
        ...prev.datasets,
        {
          label: `Dataset ${prev.datasets.length + 1}`,
          data: getRandomNumbers(DATA_COUNT, -100, 100),
          borderColor: getRandomColor(),
          backgroundColor: getRandomColor(),
        },
      ],
    }));
  };

  const addData = () => {
    setChartData((prev) => ({
      labels: [...prev.labels, `Month ${prev.labels.length + 1}`],
      datasets: prev.datasets.map((dataset) => ({
        ...dataset,
        data: [...dataset.data, Math.floor(Math.random() * 201) - 100],
      })),
    }));
  };

  const removeDataset = () => {
    setChartData((prev) => ({
      ...prev,
      datasets: prev.datasets.slice(0, -1),
    }));
  };


  return (
    <div>
      <h2>Dynamic Line Chart</h2>
      <Line data={chartData} options={options} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={randomizeData} style={buttonStyle}>Randomize Data</button>
        <button onClick={addDataset} style={buttonStyle}>Add Dataset</button>
        <button onClick={addData} style={buttonStyle}>Add Data</button>
        <button onClick={removeDataset} style={buttonStyle}>Remove Dataset</button>
      </div>
    </div>
  );
};

// Button Styling
const buttonStyle = {
  margin: "5px",
  padding: "8px",
  cursor: "pointer",
};

export default LineChar;

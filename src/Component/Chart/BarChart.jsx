import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Utility function to generate random numbers
const getRandomData = (count, min, max) =>
  Array.from({ length: count }, () => [Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)]);

const BarChart = () => {
  const DATA_COUNT = 7;
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: getRandomData(DATA_COUNT, -100, 100),
        backgroundColor: "#7c32ff",
      },
      {
        label: "Dataset 2",
        data: getRandomData(DATA_COUNT, -100, 100),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  // Function to randomize data
  const randomizeData = () => {
    setChartData({
      ...chartData,
      datasets: chartData.datasets.map((dataset) => ({
        ...dataset,
        data: getRandomData(DATA_COUNT, -100, 100),
      })),
    });
  };

  return (
    <div>
      <h2>Income Bar Chart</h2>
      <Bar data={chartData} options={options} />
      <button onClick={randomizeData} style={{ marginTop: "10px", padding: "8px", cursor: "pointer" }}>
        Randomize Data
      </button>
    </div>
  );
};

export default BarChart;

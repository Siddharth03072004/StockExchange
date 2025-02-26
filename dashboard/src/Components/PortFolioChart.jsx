import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PositionsChart = ({ positions }) => {
  const stockNames = positions.map((stock) => stock.name);
  const stockQuantities = positions.map((stock) => stock.qty);

  const data = {
    labels: stockNames,
    datasets: [
      {
        label: "Stock Quantity",
        data: stockQuantities,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default PositionsChart;

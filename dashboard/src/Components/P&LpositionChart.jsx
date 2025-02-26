import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PositionsPnlChart = ({ positions }) => {

  const stockNames = positions.map((stock) => stock.name);
  const pnlValues = positions.map(
    (stock) => stock.price * stock.qty - stock.avg * stock.qty
  );


  const data = {
    labels: stockNames,
    datasets: [
      {
        label: "Profit & Loss (₹)",
        data: pnlValues,
        backgroundColor: pnlValues.map((value) =>
          value >= 0 ? "green" : "red"
        ),
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PositionsPnlChart;

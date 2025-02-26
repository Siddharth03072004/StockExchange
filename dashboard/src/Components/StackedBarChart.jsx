import React, { useState, useEffect } from "react";
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

const OrdersChart = ({ orders }) => {

  const stockNames = [...new Set(orders.map((stock) => stock.name))];


  const buyData = stockNames.map((name) => {
    return orders
      .filter((stock) => stock.name === name && stock.mode === "BUY")
      .reduce((total, stock) => total + stock.qty, 0); // Sum up the qty for BUY mode
  });

  const sellData = stockNames.map((name) => {
    return orders
      .filter((stock) => stock.name === name && stock.mode === "SELL")
      .reduce((total, stock) => total + stock.qty, 0); // Sum up the qty for SELL mode
  });


  const data = {
    labels: stockNames,
    datasets: [
      {
        label: "BUY Orders",
        data: buyData,
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue for buy
      },
      {
        label: "SELL Orders",
        data: sellData,
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Red for sell
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
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default OrdersChart;

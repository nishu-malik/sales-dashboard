/** @jsxImportSource theme-ui */

import { Box } from "@theme-ui/components";
import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ label, sendData, receivedData }) {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Total",
        data: sendData,
        fill: false,
        backgroundColor: "#563bff",
        borderColor: "#563bff",
      },
      {
        label: "Pipeline",
        data: receivedData,
        fill: false,
        backgroundColor: "#00c4fa",
        borderColor: "#00c4fa",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <Box sx={{ width: ["", "95%"], height: "65%" }}>
      <Line data={data} options={options} />
    </Box>
  );
}

export default LineChart;

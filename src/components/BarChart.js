/** @jsxImportSource theme-ui */

import { Box } from "@theme-ui/components";
import React from "react";
import { Bar } from "react-chartjs-2";
function VerticalBar({ label, sendData, receivedData }) {
  const data = {
    labels: label,
    datasets: [
      {
        label: "label 1",
        data: sendData,
        backgroundColor: ["#563bff"],
        borderColor: ["#563bff"],
        borderWidth: 0.5,
      },
      {
        label: "label 2",
        data: receivedData,
        backgroundColor: ["#00c4fa"],
        borderColor: ["#00c4fa"],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Box
      sx={{
        width: ["", "90%"],
        height: ["200px", "20px", "90%"],
      }}
    >
      <Bar data={data} options={options} sx={{ height: "180px" }} />
    </Box>
  );
}

export default VerticalBar;

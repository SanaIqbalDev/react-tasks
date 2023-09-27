import React from "react";
import { Pie } from "react-chartjs-2";

const PriorityInsights = ({ values }) => {
  const data = {
    labels: ["High priority", "Medium priority", "Low priority"],
    datasets: [
      {
        label: "# of tasks",
        data: values,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <label>Tasks based on priority</label>

      <Pie data={data} />
    </>
  );
};

export default PriorityInsights;

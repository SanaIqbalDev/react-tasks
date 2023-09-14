import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const Insights = () => {
    Chart.register(...registerables);

    const tasks = [
        {
            label: "Task 1",
            startDate: "2023-09-08",
            endDate: "2023-09-12",
            completionDate: "2023-09-11",
        },
        {
            label: "Task 2",
            startDate: "2023-09-04",
            endDate: "2023-09-22",
            completionDate: "2023-09-18",
        },
        {
            label: "Task 3",
            startDate: "2023-09-19",
            endDate: "2023-09-26",
            completionDate: "2023-09-20",
        },
        // Add more tasks here...
    ];

    const data = {
        labels: tasks.map((task) => task.label),
        datasets: [
            {
                label: "Start Date",
                data: tasks.map((task) => [new Date(task.startDate), task.label]),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "End Date",
                data: tasks.map((task) => [new Date(task.endDate), task.label]),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Completion Date",
                data: tasks.map((task) => [new Date(task.completionDate), task.label]),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            xAxes: [{ type: "time", time: { parser: "YYYY-MM-DD", unit: "day" } }],
        },
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
};

export default Insights;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const ActivityMetrics = () => {
    Chart.register(...registerables);

    const labelData = [
        "10th Sep",
        "11th Sep",
        "12th Sep",
        "13th Sep",
        "14th Sep",
        "15th Sep",
    ];

    const data = {
        labels: labelData,
        datasets: [
            {
                label: "Tasks Added",
                data: [3, 5, 9, 10, 2, 5],
                borderColor: "red",
                backgroundColor: "red",
            },

            {
                label: "Tasks Completed",
                data: [1, 1, 6, 0, 2, 4],
                borderColor: "green",
                backgroundColor: "green",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
        maintainAspectRatio: false,
        aspectRatio: 2,
    };
    return (
        <>
            <Line data={data} style={{ width: "100%" }} options={{
                maintainAspectRatio: false
            }} />
        </>
    );
};

export default ActivityMetrics;

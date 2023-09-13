import React from "react";
import { Line } from "react-chartjs-2";

const ActivityMetrics = () => {
    labels = [
        "10th Sep",
        "11th Sep",
        "12th Sep",
        "13th Sep",
        "14th Sep",
        "15th Sep",
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Tasks Added',
                data: [3, 5, 9, 10, 2, 5],
                borderColor: 'red',
                backgroundColor: 'pink'
            },

            {
                label: 'Tasks Completed',
                data: [1, 1, 6, 0, 2, 4],
                borderColor: 'black',
                backgroundColor: 'green'
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
    };
    return (
        <>
            <Line options={options} />
        </>
    );
};

export default ActivityMetrics;
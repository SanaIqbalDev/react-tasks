import React from "react";
import { Line } from "react-chartjs-2";

const ActivityMetrics = () => {
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

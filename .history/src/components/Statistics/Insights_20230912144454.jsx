import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-luxon";

const Insights = ({ values }) => {
    Chart.register(...registerables);

    const data = {
        labels: ["high", "Medium", "Low"],
        datasets: [
            {
                label: "High",
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
            <Pie />
        </>
    );
};

export default Insights;

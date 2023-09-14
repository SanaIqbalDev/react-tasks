import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "chartjs-adapter-luxon";

const Insights = ({ values }) => {
    // Chart.register(ArcElement, Tooltip, Legend);

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
    const options = {
        aspectRation: 1,
    }
    return (
        <>
            <Pie data={data} options={options} />
        </>
    );
};

export default Insights;

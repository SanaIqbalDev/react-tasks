import React from "react";
import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

const Insights = ({ values }) => {
    // Chart.register(ArcElement, Tooltip, Legend);

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
    const options = {
        aspectRation: 1,
    };
    const plugins = [
        {
            beforeDraw: function (chart) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;
                ctx.restore();
            },
        },
    ];
    return (
        <>
            <label>Task based on priority</label>

            <Pie data={data} options={options} plugins={plugins} />
        </>
    );
};

export default Insights;

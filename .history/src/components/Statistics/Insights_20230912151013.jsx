import React from "react";
import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "chartjs-adapter-luxon";

const Insights = ({ values }) => {
    // Chart.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ["high", "Medium", "Low"],
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

                // var fontSize = (height / 160).toFixed(2);
                // ctx.font = fontSize + "em sans-serif";
                // ctx.textBaseline = "top";

                // var text = Completionpercent + '%',
                //     textX = Math.round((width - ctx.measureText(text).width) / 2),
                //     textY = height / 2;
                // ctx.fillText(text, textX, textY);
                // ctx.save();
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

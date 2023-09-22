import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const CompletedTasks = ({ values }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const testValues =
        JSON.stringify(values) == JSON.stringify([0, 0]) ? [12, 18] : values;

    const allTasks = testValues.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const completionPercent = Math.round((testValues[0] / allTasks) * 100);

    const labelA = `Completed tasks ${completionPercent}% `;
    const labelB = `Pending tasks ${100 - completionPercent}%`;
    const data = {
        labels: [labelA, labelB],
        datasets: [
            {
                label: "# of Tasks",
                data: testValues,
                borderColor: ["white"],
                backgroundColor: ["blue", "red"],
                borderWidth: 2,
            },
        ],
    };
    const plugins = [
        {
            beforeDraw: function (chart) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;
                ctx.restore();

                var fontSize = (height / 160).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "top";

                var text = completionPercent + "%",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
            },
        },
    ];

    return (
        <>
            <label>Total number of tasks: {allTasks}</label>
            <Doughnut data={data} plugins={plugins} />
        </>
    );
};

export default CompletedTasks;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const CompletedTasks = ({ values }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const testValues = [12, 18]
    const allTasks = testValues.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const Completionpercent = Math.round((testValues[0] / allTasks) * 100);

    const labela = `Completed tasks ${Completionpercent}% `
    const labelb = `Pending tasks ${100 - Completionpercent}%`
    const data = {
        labels: [labela, labelb],
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

                var text = Completionpercent + '%',
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
            },
        },
    ];

    const options = {
        aspectRation: 1,
    }

    return (
        <>
            <label>Total number of tasks: {allTasks}</label>
            <Doughnut data={data} plugins={plugins} options={options} />
        </>
    );
};

export default CompletedTasks;

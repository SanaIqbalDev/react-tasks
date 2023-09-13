import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const CompletedTasks = ({ values }) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const allTasks = values.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const data = {
        labels: ["Completed Task", "Incomplete tasks"],
        datasets: [
            {
                label: "# of Tasks",
                data: values,
                borderColor: ["white"],
                backgroundColor: ["rgba(232,99,132,1)", "rgba(153,102,255,1)"],
                borderWidth: 2,
            },
        ],
    };
    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = "Foo-bar",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]

    return (
        <>
            <label>Total number of tasks: {allTasks}</label>
            <Doughnut data={data} plugins={plugins} />
        </>
    );
};

export default CompletedTasks;
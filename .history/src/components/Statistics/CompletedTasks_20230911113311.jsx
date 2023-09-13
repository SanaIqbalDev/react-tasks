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

    return (
        <>
            <label>Total number of completed tasks: {allTasks}</label>
            <Doughnut data={data} />
        </>
    );
};

export default CompletedTasks;
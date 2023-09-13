import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const CompletedTasks = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Completed Task', 'Incomplete tasks'],
        datasets: [
            {
                label: '# of Tasks',
                data: [85, 15],
                borderColor: ["rgba(255,206,86,0.2)"],
                backgroundColor: [
                    "rgba(232,99,132,1)",
                    "rgba(153,102,255,1)",
                ],
            },
        ],
    };

    const options = {
        // plugins: {
        // title: {
        //     font: {
        //         size: 34,
        //     },
        //     padding: {
        //         top: 30,
        //         bottom: 30,
        //     },
        //     responsive: true,
        //     animation: {
        //         animateScale: true,
        //     },
        // },
        // },
    };
    return <Doughnut data={data} />;
};

export default CompletedTasks;

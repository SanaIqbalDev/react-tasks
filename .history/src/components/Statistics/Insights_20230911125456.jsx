import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const Insights = ({ tasks }) => {
    Chart.register(...registerables);

    const mappingData = {
        labels: tasks.map((task) => task.name),
        datasets: [
            {
                label: "Task 1",
                data: [('2017-02-12'), ('2017-02-16')],
                backgroundColor: "blue",
                borderColor: "pink",
                borderWidth: 2,
            },
            // {
            //     label: "Task 2",
            //     data: [new Date('2017-02-12'), new Date('2017-02-16')],
            //     backgroundColor: "red",
            //     borderColor: "pink",
            //     borderWidth: 2,
            // },

            // {
            //     label: "Task 3",
            //     data: [new Date('2017-02-10'), new Date('2017-02-22')],
            //     backgroundColor: "green",
            //     borderColor: "pink",
            //     borderWidth: 2,
            // },
        ],
    };
    const options = {
        scales: {
            yAxes: [{ ticks: { min: 0 } }],
            xAxes: [{ type: 'time', time: { parser: 'YYYY-MM-DD', unit: 'day' } }],
        },
    };

    return (
        <>
            <Bar type="horizontalBar" data={mappingData} options={options} />
        </>
    );
};

export default Insights;

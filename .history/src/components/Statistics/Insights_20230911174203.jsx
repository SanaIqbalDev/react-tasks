import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import 'chartjs-adapter-date-fns';

const Insights = () => {
    Chart.register(...registerables);

    const tasks = [
        {
            label: "Task 1",
            startDate: "2023-09-08",
            endDate: "2023-09-12",
            completionDate: "2023-09-11",
        },
        {
            label: "Task 2",
            startDate: "2023-09-04",
            endDate: "2023-09-22",
            completionDate: "2023-09-18",
        },
        {
            label: "Task 3",
            startDate: "2023-09-19",
            endDate: "2023-09-26",
            completionDate: "2023-09-20",
        },
        // Add more tasks here...
    ];

    const options = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },

            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const labels = ["task 1", "task 2", "task 3", "task 4", "task 5"];


    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => {
                    return [
                        ("1981-03-25"),
                        ("1996-12-11"),
                    ];
                }),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };


    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
};

export default Insights;

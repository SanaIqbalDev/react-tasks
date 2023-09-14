import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";

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
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'yyyy-MM-dd'
                    }
                }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    const labels = [
        "task 1",
        "task 2",
        "task 3",
        "task 4",
        "task 5"
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => {
                    return [new Date('2023-10-11'), new Date('2023-10-17')];
                }),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 2",
                data: labels.map(() => {
                    return [new Date('2023-10-04'), new Date('2023-10-10')];
                }),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 3",
                data: labels.map(() => {
                    return [new Date('2023-10-22'), new Date('2023-10-27')];
                }),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            }
        ],
    };

    // const options = {
    // scales: {
    //   x: {
    //     type: 'time',
    //     time: {
    //       unit: 'day',
    //       displayFormats: {
    //         day: 'YYYY-MM-DD'
    //       }
    //     }
    //   },
    //   y: {
    //     beginAtZero: true
    //   }
    //     }
    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
};

export default Insights;

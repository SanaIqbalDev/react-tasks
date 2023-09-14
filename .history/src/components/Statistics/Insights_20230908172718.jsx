import { scales, TimeScale } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

const Insights = ({ tasks }) => {
    const mappingData = {
        labels: tasks.map((task) => task.name),
        datasets: [
            {
                label: "Start date",
                data: tasks.map((task) => task.startDate),
                backgroundColor: "red",
                borderColor: "pink",
                borderWidth: 2,
            },
            {
                label: "Due date",
                data: tasks.map((task) => task.dueDate),
                backgroundColor: "green",
                borderColor: "blue",
                borderWidth: 2,
            },
        ],
    };
    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    minUnit: 'day',
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasks'
                }
            }
        }
    }

    return (
        <>
            <Bar
                type="horizontalBar"
                data={mappingData}
                options={options}
            />
        </>
    );
};

export default Insights;

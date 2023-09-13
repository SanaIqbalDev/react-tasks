// import { scales, TimeScale } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TimeScale, LinearScale, CategoryScale, Bar } from "chart.js";


const Insights = ({ tasks }) => {

    ChartJS.register(TimeScale, LinearScale, CategoryScale, Bar);


    const mappingData = {
        labels: tasks.map((task) => task.name),
        datasets: [
            {
                label: "Start date",
                // data: tasks.map((task) => task.startDate),
                data: "2023-10-12",
                backgroundColor: "red",
                borderColor: "pink",
                borderWidth: 2,
            },
            {
                label: "Due date",
                data: "2023-10-19",
                backgroundColor: "green",
                borderColor: "blue",
                borderWidth: 2,
            },
        ],
    };
    const options = {
        scales: {
            x: [{
                type: "time",
                time: {
                    unit: "date",
                },
                title: {
                    display: true,
                    text: "Date",
                },
            }],
            y: {
                title: {
                    display: true,
                    text: "Tasks",
                },
            },
        },
    };

    return (
        <>
            <Bar type="horizontalBar" data={mappingData} options={options} />
        </>
    );
};

export default Insights;

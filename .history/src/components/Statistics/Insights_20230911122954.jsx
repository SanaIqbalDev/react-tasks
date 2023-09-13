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
                data: [tasks[0].startDate, tasks[0].dueDate],
                backgroundColor: "blue",
                borderColor: "pink",
                borderWidth: 2,
            },
            {
                label: "Task 1",
                data: [tasks[1].startDate, tasks[1].dueDate],
                backgroundColor: "red",
                borderColor: "pink",
                borderWidth: 2,
            },

            {
                label: "Task 1",
                data: [tasks[2].startDate, tasks[2].dueDate],
                backgroundColor: "green",
                borderColor: "pink",
                borderWidth: 2,
            },
        ],
    };
    // const options = {
    //     scales: {
    //         x:
    //         {
    //             type: "time",
    //             time: {
    //                 unit: "date",
    //             },
    //             title: {
    //                 display: true,
    //                 text: "Date",
    //             },
    //         },

    //         y: {
    //             title: {
    //                 display: true,
    //                 text: "Tasks",
    //             },
    //         },
    //     },
    // };

    return (
        <>
            <Bar type="horizontalBar" data={mappingData} />
        </>
    );
};

export default Insights;

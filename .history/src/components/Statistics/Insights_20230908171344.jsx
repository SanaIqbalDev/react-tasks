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

    return (
        <>
            <Bar
                type="horizontalBar"
                data={mappingData}
                options={
                    (scales = {
                        xAxes: [
                            {
                                type: "time",
                                time: {
                                    min: new Date("2017,02,10"),
                                    unit: "day",
                                    unitStepSize: 1,
                                },
                            },
                        ],
                    })
                }
            />
        </>
    );
};

export default Insights;

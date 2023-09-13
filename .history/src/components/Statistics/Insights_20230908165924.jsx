import React from "react";
// import { Bar } from "chart.js";
import { Chart } from "react-chartjs-2";

const Insights = () => {
    return (
        <>
            <Chart
                type="horizontalBar"
                data={
                    ((labels = ["Item 1"]),
                        (datasets = [
                            {
                                label: "Task 1",
                                data: [new Date("2017,02,26")],
                            },
                            {
                                label: "Task 2",
                                data: [new Date("2017,02,14")],
                            },
                        ]))
                }
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

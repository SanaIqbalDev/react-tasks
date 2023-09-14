import React from "react";

import { Bar } from "react-chartjs-2";

const Insights = () => {
    return (
        <>
            <Bar
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

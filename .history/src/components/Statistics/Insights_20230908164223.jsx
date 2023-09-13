import React from "react";
import { Bar } from "chart.js";
import { Chart } from "react-chartjs-2";

const Insights = () => {
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                type: "bar",
                label: "Dataset 2",
                backgroundColor: "rgb(75, 192, 192)",
                data: labels.map(() =>
                    faker.datatype.number({ min: -1000, max: 1000 })
                ),
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    };
    return (
        <>
            <Chart type="bar" data={data} />
        </>
    );
};

export default Insights;

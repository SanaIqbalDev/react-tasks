import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import 'chartjs-adapter-luxon';

const Insights = () => {
    Chart.register(...registerables);

    return (
        <>
            <Pie />
        </>
    );
};

export default Insights;

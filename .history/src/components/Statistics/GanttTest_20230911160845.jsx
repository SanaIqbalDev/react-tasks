import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-chart-gantt';

const GanttTest = () => {
    useEffect(() => {
        const data = [
            {
                id: 'Task 1',
                start: '2023-10-11',
                end: '2023-10-16',
                progress: 30
            },
            {
                id: 'Task 2',
                start: '2023-10-15',
                end: '2023-10-20',
                progress: 50
            }
        ];

        const ctx = document.getElementById('myGanttChart').getContext('2d');

        const config = {
            type: 'gantt',
            data: {
                datasets: [{
                    label: 'Tasks',
                    data: data,
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time'
                    }
                }
            }
        };

        new Chart(ctx, config);

    }, []); // useEffect dependency array is empty to run this code once on component mount

    return <canvas id="myGanttChart"></canvas>;
}

export default GanttTest;

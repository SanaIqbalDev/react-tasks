import React from 'react';
import GanttChart from 'react-gantt-chart';

const GanttTest = () => {
    const data = [
        {
            id: 1,
            name: 'Task 1',
            start: new Date('2023-10-11'),
            end: new Date('2023-10-16'),
        },
        {
            id: 2,
            name: 'Task 2',
            start: new Date('2023-10-15'),
            end: new Date('2023-10-20'),
        }
    ];

    return <GanttChart tasks={data} />;
};

export default GanttTest;

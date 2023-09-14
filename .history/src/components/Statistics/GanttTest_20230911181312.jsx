import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";

import React from "react";

const GanttTest = () => {
    const tasks = [
        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 1, 2),
            name: "Task 1",
            id: "0",
            type: "task",
            progress: 45,
            isDisabled: true,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },

        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 1, 8),
            name: "Task 2",
            id: "1",
            type: "task",
            progress: 87,
            isDisabled: true,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },

        {
            start: new Date(2020, 2, 2),
            end: new Date(2020, 5, 12),
            name: "Task 3",
            id: "2",
            type: "task",
            progress: 90,
            isDisabled: true,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },





    ];

    return (
        <Gantt
            tasks={tasks}
        />
    );
};

export default GanttTest;

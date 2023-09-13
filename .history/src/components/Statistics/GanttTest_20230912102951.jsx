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
import { useState } from "react";

const GanttTest = () => {
    const [view, setView] = useState(ViewMode.Day);

    const calculateProgress = (date) => {
    }

    const getDateToday = () => {
        const dateToday = new Date().toLocaleDateString("en", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });

        const newDate = new Date(dateToday);

        return (
            newDate.getFullYear() +
            "-" +
            (newDate.getMonth()).toString().padStart(2, "0") +
            "-" +
            newDate.getDate().toString().padStart(2, "0")
        );
    };

    const tasks = [
        {
            start: new Date(2023, 9, 10),
            end: new Date(2023, 9, 12),
            name: "Task 1",
            id: "0",
            type: "task",
            progress: 20,
            isDisabled: true,
            isChecked: false,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },

        {
            start: new Date(2023, 9, 5),
            end: new Date(2023, 9, 8),
            name: "Task 2",
            id: "1",
            type: "task",
            progress: undefined,
            isDisabled: true,
            isChecked: false,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },

        {
            start: new Date(2023, 9, 18),
            end: new Date(2023, 9, 26),
            name: "Task 3",
            id: "2",
            type: "task",
            progress: 90,
            isDisabled: true,
            isChecked: false,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },
    ];

    return (
        <Gantt tasks={tasks} viewMode={view} listCellWidth={isChecked ? "155px" : ""} ganttHeight={300} />
    );
};

export default GanttTest;
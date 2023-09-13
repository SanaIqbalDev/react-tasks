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
import { Moment } from "moment/moment";


const GanttTest = () => {
    const [view, setView] = useState(ViewMode.Day);

    const calculateProgress = (date) => { };

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
            newDate.getMonth().toString().padStart(2, "0") +
            "-" +
            newDate.getDate().toString().padStart(2, "0")
        );
    };

    const getProgressPercent = (start_date, due_date, completion_date) => {
        const today = new Date();
        let dateMDY = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const differenceInDays = moment(dateMDY) - moment(start_date);
        const totalNumberOfDays = due_date - start_date;
        var progressPercent = (differenceInDays / totalNumberOfDays) * 100;

        if (completion_date && completion_date < dateMDY) {
            progressPercent = 100;
        }

        return progressPercent;
    };

    const progressPercent = getProgressPercent(
        "2023-09-01",
        "2023-09-10",
        "2023-09-05"
    );

    const tasks = [
        {
            start: new Date(2023, 9, 10),
            end: new Date(2023, 9, 12),
            name: "Task 1",
            id: "0",
            type: "task",
            progress: 20,
            isDisabled: true,
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
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },
    ];

    return (
        <>
            {console.log(progressPercent)}
            <Gantt tasks={tasks} viewMode={view} />
        </>
    );
};

export default GanttTest;

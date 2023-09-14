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
import moment from "moment/moment";

const GanttTest = () => {
    const [view, setView] = useState(ViewMode.Day);

    const getProgressPercent = (start_date, due_date, completion_date) => {
        console.log(start_date, "\n", due_date, "\n", completion_date);
        if (completion_date >= start_date && completion_date < due_date) {
            const totalNumberOfDays = moment(due_date).diff(start_date, "days");

            let taskCompletedInDays = moment(completion_date).diff(
                start_date,
                "days"
            );

            if (taskCompletedInDays === 0) taskCompletedInDays = 1;

            const progressPercent = (taskCompletedInDays / totalNumberOfDays) * 100;

            return progressPercent;
        }
        return 0;
    };

    const progressCol = "green";
    const progressSelColor = "green";

    const tasks = [
        {
            start: new Date(2023, 9, 1),
            end: new Date(2023, 9, 10),
            completion_date: new Date(2023, 9, 5),
            name: "Task 1",
            id: "0",
            type: "task",
            progress: getProgressPercent(
                moment("2023-09-01"),
                moment("2023-09-10"),
                moment("2023-09-05")
            ),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },

        {
            start: new Date(2023, 9, 5),
            end: new Date(2023, 9, 8),
            name: "Task 2",
            id: "1",
            type: "task",
            progress: getProgressPercent(moment("2023-09-05"), moment("2023-09-08"), moment()),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },

        {
            start: new Date(2023, 9, 18),
            end: new Date(2023, 9, 26),
            name: "Task 3",
            id: "2",
            type: "task",
            progress: getProgressPercent(moment("2023-09-18"), moment("2023-09-26"), moment("2023-09-18")),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },
        {
            start: new Date(2023, 9, 13),
            end: new Date(2023, 9, 26),
            name: "Task 4",
            id: "3",
            type: "task",
            progress: getProgressPercent(moment("2023-09-13"), moment("2023-09-26"), moment("2023-09-24")),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },
        {
            start: new Date(2023, 9, 8),
            end: new Date(2023, 9, 13),
            name: "Task 5",
            id: "4",
            type: "task",
            progress: getProgressPercent(moment("2023-09-08"), moment("2023-09-13"), moment("2023-09-10")),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },

        {
            start: new Date(2023, 9, 3),
            end: new Date(2023, 9, 13),
            name: "Task 6",
            id: "5",
            type: "task",
            progress: getProgressPercent(moment("2023-09-03"), moment("2023-09-13"), moment("2023-09-12")),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },
        {
            start: new Date(2023, 9, 13),
            end: new Date(2023, 9, 26),
            name: "Task 7",
            id: "6",
            type: "task",
            progress: getProgressPercent(moment("2023-09-13"), moment("2023-09-26"), moment("2023-09-26")),
            isDisabled: true,
            styles: {
                progressColor: progressCol,
                progressSelectedColor: progressSelColor,
            },
        },
    ];

    return (
        <>
            <Gantt tasks={tasks} viewMode={view} />
        </>
    );
};

export default GanttTest;

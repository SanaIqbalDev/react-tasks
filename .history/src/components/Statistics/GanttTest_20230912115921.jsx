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
        const today = moment()
        if ((moment(completion_date) >= moment(start_date)) && (moment(completion_date) < moment(due_date))) {

            const totalNumberOfDays = moment(start_date).diff(moment(due_date), "days");
            // console.log("Total number of days:  ", totalNumberOfDays)

            const taskCompletedInDays = moment(start_date).diff(moment(completion_date), "days");

            console.log("Task completed in days:  ", taskCompletedInDays)

            const progressPercent = taskCompletedInDays / totalNumberOfDays * 100;


            return progressPercent;

        }
        return 0;
    };

    const progressPercent = getProgressPercent(
        "2023-09-01",
        "2023-09-10",
        "2023-09-05"
    );

    const tasks = [
        {
            start: new Date(2023, 9, 1),
            end: new Date(2023, 9, 10),
            completion_date: new Date(2023, 9, 5),
            name: "Task 1",
            id: "0",
            type: "task",
            progress: getProgressPercent("2023-09-01", "2023-09-10", "2023-09-05"),
            isDisabled: true,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },

        {
            start: new Date(2023, 9, 5),
            end: new Date(2023, 9, 8),
            name: "Task 2",
            id: "1",
            type: "task",
            progress: getProgressPercent("2023-09-5", "2023-09-8", undefined),
            isDisabled: true,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },

        {
            start: new Date(2023, 9, 18),
            end: new Date(2023, 9, 26),
            name: "Task 3",
            id: "2",
            type: "task",
            progress: getProgressPercent("2023-09-18", "2023-09-26", "2023-09-19"),
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

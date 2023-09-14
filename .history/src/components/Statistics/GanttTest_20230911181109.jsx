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
            name: "Idea",
            id: "Task 0",
            type: "task",
            progress: 45,
            isDisabled: true,
            styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
        },
    ];

    return (
        <Gantt
            tasks={tasks}
            viewMode={view}
            onDateChange={onTaskChange}
            onTaskDelete={onTaskDelete}
            onProgressChange={onProgressChange}
            onDoubleClick={onDblClick}
            onClick={onClick}
        />
    );
};

export default GanttTest;

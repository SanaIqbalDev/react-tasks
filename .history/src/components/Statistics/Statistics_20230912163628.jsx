import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";
import CompletedTasks from "./CompletedTasks.jsx";
import GanttTest from "./GanttTest.jsx";

const Statistics = ({ tasks }) => {
    const TaskCompeletionStats = () => {
        const CompletedTasks = tasks.filter((task) =>
            task.isComplete ? task : undefined
        );
        const IncompleteTasks = tasks.filter((task) =>
            task.isComplete ? undefined : task
        );

        console.log("Incomplete tasks are : ", IncompleteTasks);
        console.log("Completed tasks are : ", CompletedTasks);

        return [CompletedTasks.length, IncompleteTasks.length];
    };

    const TaskPriorityStats = () => {
        const highPriority = tasks.filter((task) =>
            task.priority === 3 ? task : undefined
        );

        const normalPriority = tasks.filter((task) =>
            task.priority === 2 ? task : undefined
        );

        const lowPriority = tasks.filter((task) =>
            task.priority === 1 ? task : undefined
        );
        return [highPriority.length, normalPriority.length, lowPriority.length];
    };

    return (
        <>
            <Link to={"/"}>Add More Tasks</Link>

            <div className="stats-container">
                <div
                    className="stats-item"
                >
                    <CompletedTasks values={TaskCompeletionStats()} />
                </div>
                <div className="stats-item">
                    <Insights values={TaskPriorityStats()} />
                </div>
            </div>
            <div>
                <GanttTest />
            </div>
        </>
    );
};

export default Statistics;
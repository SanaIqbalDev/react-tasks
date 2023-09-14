import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";
import CompletedTasks from "./CompletedTasks.jsx";
import GanttTest from "./GanttTest.jsx";

const Statistics = ({ tasks }) => {
    const TaskCompeletion = () => {
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

    return (
        <>
            <Link to={"/"}>Add More Tasks</Link>

            <div className="stats-container">
                <div
                    className="stats-item"
                    style={{ maxWidth: "100%", textAlign: "center" }}
                >
                    <CompletedTasks values={TaskCompeletion()} />
                </div>
                {/* <div className="stats-item" style={{ maxWidth: "100%" }}><Insights style={{ margin: "0 auto" }} /></div> */}
            </div>
            <div>
                <GanttTest />
            </div>
        </>
    );
};

export default Statistics;

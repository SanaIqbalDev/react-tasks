import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";
import CompletedTasks from "./CompletedTasks.jsx";
import GanttTest from "./GanttTest.jsx"


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

            <div className="stats-container" style={{ maxWidth: "100%", display: "flex", flexDirectionr: "row" }}>
                {/* <Link to={"/"}>Add More Tasks</Link> */}
                <div style={{ maxWidth: "50%" }}><CompletedTasks className="stats-item" values={TaskCompeletion()} /></div>
                <div style={{ maxWidth: "50%" }}></div><Insights className="stats-item" /></div>
            {/* <GanttTest className="stats-item" /> */}
        </div >
        </>
    );
};

export default Statistics;

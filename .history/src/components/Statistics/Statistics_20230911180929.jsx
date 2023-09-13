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

            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to={"/"}>Add More Tasks</Link>
                {/* <CompletedTasks style={{ width: '200px', height: '300px' }} values={TaskCompeletion()} /> */}
                {/* <Insights /> */}
                <GanttTest />
            </div>
        </>
    );
};

export default Statistics;

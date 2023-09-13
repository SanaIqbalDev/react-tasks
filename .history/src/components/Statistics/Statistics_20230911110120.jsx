import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";
import CompletedTasks from "./CompletedTasks.jsx";

const Statistics = ({ tasks }) => {


    const TaskCompeletion = () => {
        const IncompleteTasks = tasks.filter((task) => task.isComplete ? task : undefined)
        const CompletedTasks = tasks.filter((task) => task.isComplete ? undefined : task)

        console.log("Incomplete tasks are : ", IncompleteTasks)
        console.log("Completed tasks are : ", CompletedTasks)

    }

    return (
        <>
            {TaskCompeletion()}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to={"/"}>Add More Tasks</Link>
                <CompletedTasks />
                {/* <Insights tasks={tasks} /> */}
            </div>
        </>
    );
};

export default Statistics;

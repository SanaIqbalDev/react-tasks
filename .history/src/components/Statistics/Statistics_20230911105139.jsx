import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";
import CompletedTasks from "./CompletedTasks.jsx";

const Statistics = ({ tasks }) => {


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to={"/"}>Add More Tasks</Link>
                <CompletedTasks />
                {/* <Insights tasks={tasks} /> */}
            </div>
        </>
    );
};

export default Statistics;

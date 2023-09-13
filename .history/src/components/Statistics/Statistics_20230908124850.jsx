import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";

const Statistics = ({ tasks }) => {
    return (
        <>
            <div style={{ display: 'flex', }}>
                <Link to={"/"}>Add More Tasks</Link>
                <Insights />
            </div>
        </>
    );
};

export default Statistics;

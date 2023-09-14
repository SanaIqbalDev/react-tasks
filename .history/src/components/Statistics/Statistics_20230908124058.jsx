import React from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx"

const Statistics = ({ tasks }) => {
    return (
        <>
            <Link to={"/"}>Add More Tasks</Link>
            <Insights />
        </>
    );
};

export default Statistics;

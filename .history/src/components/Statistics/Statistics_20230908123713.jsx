import React from "react";
import { Link } from "react-router-dom";

const Statistics = ({ tasks }) => {
    return (
        <div>
            <Link to={"/"}>Add More Tasks</Link>
            <Insights />
        </div>
    );
};

export default Statistics;

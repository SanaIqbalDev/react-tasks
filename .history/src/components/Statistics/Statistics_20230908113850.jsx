import React from "react";
import { Link } from "react-router-dom";

const Statistics = ({ tasks }) => {
    return (
        <div>
            {
                console.log(tasks.name)
            }
            <Link to={"/"}>{tasks.map(task => task.name)}</Link>
        </div>
    );
};

export default Statistics;

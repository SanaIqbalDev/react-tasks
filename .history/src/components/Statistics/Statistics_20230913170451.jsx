import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Insights from "./Insights.jsx";
import CompletedTasks from "./CompletedTasks.jsx";
import GanttTest from "./GanttTest.jsx";
import ActivityMetrics from "./ActivityMetrics.jsx";
import styles from "./Statistics.module.css";

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

    useEffect(() => {
        TaskCompeletionStats();
    }, [tasks]);

    return (
        <Fragment>
            <div className={styles.stats}>
                <div className={styles.headerDiv}>
                    <h2 className={styles.heading}>STATISTICS</h2>
                    <button className={styles.addTask}>
                        <Link className={styles.tasksLink} to={"/"}>
                            Add Tasks
                        </Link>
                    </button>
                </div>

                <div className={styles.statsContainer}>
                    <div className={styles.statsItem}>
                        <CompletedTasks values={TaskCompeletionStats()} />
                    </div>
                    <div className={styles.statsItem}>
                        <Insights values={TaskPriorityStats()} />
                    </div>
                    <div className={styles.statsItem}>
                        <ActivityMetrics />
                    </div>
                </div>
                <label className={styles.title}>
                    Task Completion and due date insights
                </label>

                <div className={styles.completionStatsContainer}>
                    <GanttTest />
                </div>
            </div>
        </Fragment>
    );
};

export default Statistics;

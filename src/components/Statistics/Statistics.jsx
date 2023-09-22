import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import CompletedTasks from "./CompletedTasks.jsx";
import ActivityMetrics from "./ActivityMetrics.jsx";
import styles from "./Statistics.module.css";
import PriorityInsights from "./PriorityInsights.jsx";
import GanttTaskStatus from "./GanttTaskStatus.jsx";

const Statistics = ({ tasks }) => {


    const taskCompeletionStats = () => {
        const completedTasks = tasks.filter((task) =>
            task.isComplete ? task : undefined
        );
        const incompleteTasks = tasks.filter((task) =>
            task.isComplete ? undefined : task
        );

        console.log("Incomplete tasks are : ", incompleteTasks);
        console.log("Completed tasks are : ", completedTasks);

        return [completedTasks.length, incompleteTasks.length];
    };

    const taskPriorityStats = () => {
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
        taskCompeletionStats();
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
                        <CompletedTasks values={taskCompeletionStats()} />
                    </div>
                    <div className={styles.statsItem}>
                        <PriorityInsights values={taskPriorityStats()} />
                    </div>
                    <div className={styles.statsItem}>
                        <ActivityMetrics />
                    </div>
                </div>
                <label className={styles.title}>
                    Task Completion and due date insights
                </label>

                <div className={styles.completionStatsContainer}>
                    <GanttTaskStatus />
                </div>
            </div>
        </Fragment>
    );
};

export default Statistics;

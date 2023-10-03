import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CompletedTasks from "../CompletedTasks/CompletedTasks.jsx";
import ActivityMetrics from "../ActivityMetrics/ActivityMetrics.jsx";
import PriorityInsights from "../PriorityInsights/PriorityInsights.jsx";
import GanttTaskStatus from "../GanttTaskStatus/GanttTaskStatus.jsx";
import { TaskContext } from "../../../TaskContext.js";
import styles from "./Statistics.module.css";

const Statistics = () => {
  /**
   *
   * @returns count of completed and incompleted tasks as an array of numbers.
   */

  let tasks = useContext(TaskContext);

  const taskCompeletionStats = () => {
    const completedTasks = tasks.filter((task) =>
      task.isComplete ? task : undefined
    );
    const incompleteTasks = tasks.filter((task) =>
      task.isComplete ? undefined : task
    );

    return [completedTasks.length, incompleteTasks.length];
  };

  /**
   *
   * @returns tasks in each priority category i.e. high, normal, low, as an array of numbers.
   */
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

  return (
    <Fragment>
      <div className={styles.stats}>
        <div className={styles.headerContainer}>
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

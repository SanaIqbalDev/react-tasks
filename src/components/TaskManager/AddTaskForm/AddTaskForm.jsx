import React from "react";
import { Link } from "react-router-dom";
import TaskInputForm from "../TaskInputForm/TaskInputForm";
import styles from "./AddTaskForm.module.css";

const AddTaskForm = ({ onSubmit }) => {
  const task = {};
  return (
    <>
      <div className={styles.headerContainer}>
        <h2>ADD TASK</h2>
        <button className={styles.viewStats}>
          <Link className={styles.statsLink} to={"/Statistics"}>
            Statistics
          </Link>
        </button>
      </div>
      <TaskInputForm task={task} onSubmit={onSubmit} />
    </>
  );
};

export default AddTaskForm;

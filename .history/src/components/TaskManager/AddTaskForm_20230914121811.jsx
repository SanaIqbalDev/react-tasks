import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AddTaskForm.module.css";
import TaskInputForm from "./TaskInputForm";

const AddTaskForm = ({ onSubmit }) => {

  return (
    <>
      <div className={styles.headerDiv}>
        <h2>ADD TASK</h2>
        <button className={styles.viewStats}>
          <Link className={styles.statsLink} to={"/Statistics"}>
            Statistics
          </Link>
        </button>
      </div>
      <TaskInputForm onSubmit={onSubmit} />
    </>
  );
};

export default AddTaskForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TaskForm.module.css";
import TaskInputForm from "./TaskInputForm";

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [detail, setDetail] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");


  const submitForm = (e) => {
    e.preventDefault();

    onSubmit(taskName, detail, dueDate, category.value, priority.value);

    setTaskName("");
    setDetail("");
    setDueDate("");
    setCategory("");
    setPriority("");
  };

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
      <TaskInputForm />
    </>
  );
};

export default TaskForm;

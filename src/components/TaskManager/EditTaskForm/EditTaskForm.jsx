import React from "react";
import TaskInputForm from "../TaskInputForm/TaskInputForm";
import styles from "./EditTaskForm.module.css";
import closeBtn from "..//../../assets/ic_close.png";

const EditTaskForm = ({ task, onSubmit, onClose }) => {
  return (
    <>
      <div className={styles.editTask}>
        <div className={styles.inputContainer}>
          <div className={styles.editTaskHeader}>
            <h2>EDIT TASK</h2>
            <img src={closeBtn} alt="close button" onClick={onClose} />
          </div>
          <TaskInputForm task={task} onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default EditTaskForm;

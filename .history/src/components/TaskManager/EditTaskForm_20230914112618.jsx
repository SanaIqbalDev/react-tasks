import React from "react";
import styles from "./EditTaskForm.module.css";
import TaskInputForm from "./TaskInputForm";

const TaskEdit = ({ onSubmit }) => {
    return (
        <>
            <div className={styles.editTask}>
                <div className={styles.inputSection}>
                    <TaskInputForm onSubmit={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default TaskEdit;

import React from "react";
import styles from "./EditTaskForm.module.css";
import TaskInputForm from "./TaskInputForm";

const TaskEdit = ({ task, onSubmit }) => {
    return (
        <>
            <div className={styles.editTask}>
                <div className={styles.inputSection}>
                    <TaskInputForm task={task} onSubmit={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default TaskEdit;

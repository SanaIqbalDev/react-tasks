import React from "react";
import styles from "./EditTaskForm.module.css";
import TaskInputForm from "./TaskInputForm";

const EditTaskForm = ({ task, onSubmit }) => {
    return (
        <>
            <div className={styles.editTask}>
                <div>
                    <TaskInputForm task={task} onSubmit={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default EditTaskForm;

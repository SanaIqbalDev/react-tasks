import React from "react";
import styles from "./EditTaskForm.module.css";
import TaskInputForm from "./TaskInputForm";
import closeBtn from "..//../assets/ic_close.png"
import { Button } from "@mui/material";

const EditTaskForm = ({ task, onSubmit }) => {
    return (
        <>
            <div className={styles.editTask}>
                <div className={styles.inputSection}>
                    <img src={closeBtn} />
                    <TaskInputForm task={task} onSubmit={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default EditTaskForm;

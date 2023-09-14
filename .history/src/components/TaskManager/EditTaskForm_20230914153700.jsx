import React from "react";
import styles from "./EditTaskForm.module.css";
import TaskInputForm from "./TaskInputForm";
import closeBtn from "..//../assets/ic_close.png";

const EditTaskForm = ({ task, onSubmit, closeForm }) => {
    return (
        <>
            <div className={styles.editTask}>
                <div className={styles.inputSection}>
                    <div >
                        <label>EDIT TASK</label>
                        <img src={closeBtn} onClick={closeForm} />
                    </div>
                    <TaskInputForm task={task} onSubmit={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default EditTaskForm;

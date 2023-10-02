import React from "react";
import { Checkbox } from "@mui/material";
import clsx from "clsx";
import styles from "./TaskItem.module.css";
import deleteIcon from "../../../assets/ic_delete.png";
import editIcon from "../../../assets/ic_edit.png";

const TaskItem = ({ task, onDelete, onEdit, onStatusChange }) => {
  const { _id, name, detail, dueDate, priority, isComplete } = task;

  return (
    <>
      <div
        className={clsx(styles.taskContainer, {
          [styles.priority1]: priority === 1,
          [styles.priority2]: priority === 2,
          [styles.priority3]: priority === 3,
        })}
      >
        <div className={styles.checkboxContainer}>
          <Checkbox className={styles.checkbox}
            checked={isComplete}
            color="primary"
            onChange={(e) => onStatusChange(_id, e.target.checked)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <div className={styles.taskDetailContainer}>
          <label className={styles.taskName}>{name}</label>
          <label className={styles.taskDetails}>{detail}</label>
          <label className={styles.taskDueDate}>{dueDate}</label>
        </div>
        <div className={styles.taskFunctionsContainer}>
          <label
            className={clsx(styles.status, { [styles.statusCompleted] : isComplete === true, [styles.statusIncomplete] : isComplete === false})}
          >
            {isComplete ? "Completed" : "Not Completed"}
          </label>

          <div>
            <img
              alt="edit icon"
              src={editIcon}
              onClick={() => {
                onEdit(_id);
              }}
            />

            <img
              alt="delete icon"
              src={deleteIcon}
              onClick={() => {
                onDelete(_id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;

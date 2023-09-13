import React, { Fragment } from "react";
import { Checkbox } from "@mui/material";
import deleteIcon from "../../assets/ic_delete.png";
import styles from "./TaskItem.module.css"
const TaskItem = ({ task, onDelete, onStatusChange }) => {
  return (
    <>
      <div
        className={styles.taskContainer}
        style={{
          borderWidth: "3px",
          borderStyle: "groove",
          borderColor:
            task.priority === 1
              ? "green"
              : task.priority === 2
                ? "yellow"
                : task.priority === 3
                  ? "orange"
                  : "green",
        }}
      >
        <div className={styles.first}>
          <Checkbox
            checked={task.isComplete}
            color="primary"
            style={{
              color: "#81a7a7",
              transform: "scale(1.5)",
            }}
            onChange={(e) => onStatusChange(task.id, e.target.checked)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <div className={styles.second}>
          <label className={styles.taskName}>{task.name}</label>
          <label className={styles.taskDetails}>{task.detail}</label>
          <label className={styles.taskDueDate}>{task.duedate}</label>
        </div>
        <div className={styles.third}>
          <label
            className={styles.status}
            style={{ backgroundColor: task.isComplete ? "green" : "#B60016" }}
          >
            {task.isComplete ? "Completed" : "Not Completed"}
          </label>
          <img
            src={deleteIcon}
            onClick={() => {
              onDelete(task.id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TaskItem;
